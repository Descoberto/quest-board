import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewQuest() {
  const[title, setTitle] = useState('');
  const[course, setCourse] = useState('');
  const[discipline, setDiscipline] = useState('');
  const[colorClass, setColorClass] = useState('');
  const[classification, setClassification] = useState('');
  const[description, setDescription] = useState('');
  const[reward, setReward] = useState('');

  const history = useHistory();

  const senseiId = localStorage.getItem('senseiId');
  
  async function handleNewQuest(e) {
    e.preventDefault();

    const data = {
      title,
      course,
      discipline,
      colorClass,
      classification,
      description,
      reward
    };

    try {
      await api.post('quests', data, {
        headers: {
          Authorization: senseiId
        }
      })

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-quest-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Quest Board" />

          <h1>Cadastrar nova Quest</h1>

          <p>Descreva a Quest detalhadamente para encontrar o aluno capacitado para completar.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#00D294" />
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewQuest}>
          <input 
            placeholder="Título da Quest"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input 
            placeholder="Curso"
            value={course}
            onChange={e => setCourse(e.target.value)}
          />

          <input 
            placeholder="Disciplina"
            value={discipline}
            onChange={e => setDiscipline(e.target.value)}
          />          

          <textarea 
            placeholder="Descrição"
            value={description} 
            onChange={e => setDescription(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder ="Requisito"
              value={classification}
              onChange={e => setClassification(e.target.value)} 
            />

            <input list="cores"
              placeholder ="Cor" 
              style={{width: 150}}
              value={colorClass}
              onChange={e => setColorClass(e.target.value)} 
            />

            <datalist id="cores">
                <option value="#35363A">( Padrão )</option> 
                <option value="#00D294">( Neon )</option>
                <option value="#FE346E">( Punk )</option>
                <option value="#A287F4">( Evento )</option>
            </datalist>
            
          </div>
          
          <input 
            placeholder="Recompensa"
            value={reward} 
            onChange={e => setReward(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
