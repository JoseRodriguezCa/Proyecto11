import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import PrintPokemon from './components/pages/Pokemon/Pokemon';
import OnePokemon from './components/pages/OnePokemon/OnePokemon';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<PrintPokemon/>}/>
      <Route path="/pokemon/:id" element={<OnePokemon/>}/>
    </Routes>

    </>
  )
}

export default App
