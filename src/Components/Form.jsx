import React from 'react'
import InputField from './InputField';
import Message from './Message';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '' || age === '' || pokemon === '') {
      setMessage('Todos los campos son obligatorios.');
    } else if (isNaN(age) || age <= 0) {
      setMessage('Por favor, introduce una edad válida.');
    } else {
      setMessage(`¡Registro exitoso! Bienvenido, ${name}`);
    }
  };

  const handleClear = () => {
    setName('');
    setAge('');
    setPokemon('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Nombre Completo:" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="Edad:" value={age} onChange={(e) => setAge(e.target.value)} />
      <InputField label="Pokémon Favorito:" value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
      <div>
      <button type="submit">Registrarse</button>
      <button type="button" onClick={handleClear}>Limpiar</button> {/* Botón para limpiar */}
      </div>
      <Message text={message} />
    </form>
  )
}

export default Form