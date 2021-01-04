import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [quests, setQuests] = useState([]);
  const history = useHistory();
  const senseiId = localStorage.getItem('senseiId');
  const senseiName = localStorage.getItem('senseiName');
  const senseiCollege = localStorage.getItem('senseiCollege');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: senseiId
      }
    }).then(response => {
      setQuests(response.data);
    })
  }, [senseiId]);

  async function handleDeleteQuest(id) {
    
    if (window.confirm("Tem certeza que deseja concluir o encerramento dessa Quest?") === true) {
      try {

          await api.delete(`quests/${id}`, {
            headers: {
              Authorization: senseiId
            }
          });
        
          setQuests(quests.filter(quest => quest.id !== id));
        
      } catch (err) {
        alert('Erro ao tentar encerrar Quest, tente novamente.');
      }
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Quest Board" />
        <span>Bem vindo(a), {senseiName} - {senseiCollege}</span>

        <Link className="button" to="/quests/new">Cadastrar Quest</Link>
        <button onClick={handleLogout} type="button">
          <FiLogOut size={18} color="#00D294" />
        </button>
      </header>

      <h1>Quests Cadastradas</h1>
      
      <ul>
        {quests.map(quest => (
          <li key={quest.id}>
            <div style={{background:quest.colorClass}}>
              <p>{quest.classification}</p>
            </div>

            <strong>QUEST:</strong>
            <p>{quest.title}</p>

            <strong>CURSO:</strong>
            <p>{quest.course}</p>

            <strong>DISCIPLINA:</strong>
            <p>{quest.discipline}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{quest.description}</p>

            <strong>RECOMPENSA:</strong>
            <p>{quest.reward}</p>
            
            <div>
              <button style={{background:quest.colorClass}} onClick={() => handleDeleteQuest(quest.id)} type="button">
              Encerrar</button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
