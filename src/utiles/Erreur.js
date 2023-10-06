import React from 'react';
import { Link } from 'react-router-dom';

export default function Erreur() {
  return (
    <div>
      <h3>Cette adresse n'existe pas</h3>
      <button className='btn btn-outline-success'>
        <Link to="/etudiants">Retour</Link>
      </button>
    </div>
  )
}
