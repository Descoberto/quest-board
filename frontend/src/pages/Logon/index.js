import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const[id, setId] = useState('');
  const[password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', {id});
      
      if (password === response.data.password) {
      localStorage.setItem('senseiId', id);
      localStorage.setItem('senseiName', response.data.name);
      localStorage.setItem('senseiCollege', response.data.college);

      history.push('/profile');
      } else { alert('Id ou Senha incorretas, tente novamente.'); }
    } catch (err) {
      alert('Id ou Senha incorretas, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Quest Board"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <input 
            type="password"
            placeholder="Sua Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />        

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#00D294" />
            Cadastrar-se
          </Link>
        </form>
      </section>

      
    </div>
  );
}
