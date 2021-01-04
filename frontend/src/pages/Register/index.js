import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
  
export default function Register() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[whatsapp, setWhatsApp] = useState('');
  const[college, setCollege] = useState('');
  const[city, setCity] = useState('');
  const[uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      whatsapp,
      college,
      city,
      uf
    };

    try {
      const response = await api.post('senseis', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Quest Board" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro e entre na plataforma como Sensei, passando Quests para seus Alunos em troca de Recompensas!</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#00D294" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome do Sensei" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />

          <input 
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />          

          <input 
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)} 
          />

          <input 
            placeholder ="Instituição"
            value={college}
            onChange={e => setCollege(e.target.value)} 
          />
          
          <div className="input-group">
            <input 
              placeholder ="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)} 
            />

            <input 
              placeholder ="UF" 
              style={{width: 80}}
              value={uf}
              onChange={e => setUf(e.target.value)} 
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
