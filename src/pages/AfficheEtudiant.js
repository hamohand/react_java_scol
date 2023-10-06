import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormatDate, iconeBooleen } from '../utiles/routines';
import UserService, { getEtudiantById } from '../services/user.service';

export default function AfficheEtudiant() {
  //useParams() : stocke les paramètres de navigation ***
  const { id } = useParams(); //objet qui va contenir tous les paramètres de l'URL
  console.log("id= ", id);

  // Fiche
  //Un étudiant, comment initialiser ?
  const [content, setContent] = useState(
    { id: 1, nom: "-", note: 0.0, admis: false, dateNaissance: new Date() },
  );
  //Navigation *****
  //const navigate = useNavigate();

  // variables + événements pour stocker les saisies
  const [nom, setNom] = useState("");
  const [note, setNote] = useState(0);
  const [admis, setAdmis] = useState(false);

  //Aller chercher l'enregistrement à modifier
  useEffect(() => {
    //handleGetEtudiantById(id);
    UserService.getEtudiantById(id).then(
      (response) => {
        setContent(response.data);
        console.log("etudiants: ", response.data)
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    )
  }, [id]);

  const handleGetEtudiantById = (id) => {
    getEtudiantById(id).then(resp => {
      let etudiant = resp.data;
      setNom(etudiant.nom);
      setNote(etudiant.note);
      setAdmis(etudiant.admis);
      setContent(etudiant);
    })
  }

  return (
    <div className='col-md-6'>
      <div className='p-1 m-1'>
        <div className='card'>
          <div className='card-body'>
            <h3>Etudiant</h3>
            <ul className='list-group'>
              <li className="list-group-item">Numéro : {content.id}</li>
              <li className="list-group-item">Nom : {nom}</li>
              {/* <li className="list-group-item">Date de naissance : {FormatDate(etudiant.dateNaissance)}</li> */}
              <li className="list-group-item">Note : {note}</li>
              <li className="list-group-item">Admis : <button className='btn btn-outline-success'>
                <FontAwesomeIcon icon={iconeBooleen(admis)}></FontAwesomeIcon>
              </button></li>
              <li className="list-group-item"><button className='btn btn-outline-success'>
                <Link to="/etudiants">Retour</Link>
              </button></li>
            </ul>
          </div></div>
      </div>
    </div>
  )
}
