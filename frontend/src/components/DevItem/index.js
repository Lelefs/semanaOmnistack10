import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function DevItem({ dev }) {

    function handleSubmit(dev) {
        this.props.history.push('/editar')
    }

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
            <button type="submit" onClick={() => handleSubmit(dev)}>Editar</button>
        </li>
    );
};

export default DevItem;