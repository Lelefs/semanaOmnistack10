const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Query Params: req.query (Filtros, ordenação, paginação);
// Route Params: req.params (Identificar um recurso na alteração ou remoção);
// Body: req.body (Dados para criação ou alteração de um registro);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/editar', DevController.update);
routes.delete('/removerDev/:github_username', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;


/*
{
	"name": "Leandro",
	"github_link": ,
	"github_username": "lefinochio" ,
	"bio": ,
	"avatar_url": ,
	"techs": ,
}
*/