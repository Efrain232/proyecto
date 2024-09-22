import React, { useState } from 'react';
import { supabase } from './client';
import './App.css';

const App = () => {

  const [formData, setFormData] = useState({
    email: '', password: ''
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password
        }
      );
      alert('Check your email for verification link');

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="ring">
      <i style={{ "--clr": "#0fff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <div className="login">
        <h2>Asistente Virtual</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <input 
            placeholder='Correo electrónico'
            name='email'
            type="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required 
          />

          <input 
            placeholder='Contraseña'
            name='password'
            type='password'
            onChange={handleChange} 
            value={formData.password}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
        <p id="error-message"></p>
      </div>
    </div>
  );
}

export default App;
