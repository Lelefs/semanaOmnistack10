const axios =require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index (req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store (req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const response = await axios.get(`https://api.github.com/users/${github_username}`);

            let { name, avatar_url, bio } = response.data;
            name = name ? name : response.data.login;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return res.json(dev);
    },

    async update (req, res) {
        const { github_username, name, bio, techs } = req.body;

        const devId = await Dev.findOne({ github_username });

        const techsArray = parseStringAsArray(techs);

        let dev = await Dev.updateOne({ _id: devId._id }, { name, bio, techs: techsArray });

        return res.json('Dev editado com sucesso');
    },

    async destroy (req, res) {
        const { github_username } = req.params;

        await Dev.deleteOne({ github_username });

        return res.json('Dev deletado com sucesso');
    }
}