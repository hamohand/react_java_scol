import axios from 'axios'
import React from 'react'
import authHeader from './auth-header';
import Api from '../api/Api';

const API_URL_TEST = 'https://app-1ade3633-602d-485f-9d0d-0aa4ea643685.cleverapps.io';
//const API_URL_TEST = 'http://localhost:8080';
//const API_URL = Api.BASE_URL + '/api/test/';


const getPublicContent = () => {
    return axios.get(API_URL_TEST + '/'); //axios.get(API_URL + 'all')
}

//CREATE
export const saveEtudiant = (etudiant) => {
    return axios.post(`/etudiant`, etudiant)
}
//READ
//Liste étudiants
const getEtudiants = () => {
    //return axios.get(API_URL_TEST + '/etudiants', { headers: authHeader() });
    return axios.get(API_URL_TEST + '/etudiants');
}
//un
export const getEtudiantById = (id) => {
    return axios.get(API_URL_TEST + "/etudiant/" + id);
}

//UPDATE
//Modifier quelques champs d'un enregistrement (ici uniquement 'admis')
export const checkEtudiant = (etudiant) => {
    return axios.patch(`etudiant/${etudiant.id}`, { admis: !etudiant.admis }) // préciser une nouvelle valeur pour chaque champ à modifier
}
//un enregistrement
export const updateEtudiant = (etudiant) => {
    return axios.put(`/etudiant/${etudiant.id}`, etudiant) // préciser une nouvelle valeur pour chaque champ à modifier
}

//DELETE
export const deleteEtudiant = (etudiant) => {
    return axios.delete(`/etudiant/${etudiant.id}`);
}


//******************** SECURITE ****************** */
const getUserBoard = () => {
    return axios.get(API_URL_TEST + 'user', { headers: authHeader() });
}

const getModeratorBoard = () => {
    return axios.get(API_URL_TEST + 'mod', { headers: authHeader() });
}

const getAdminBoard = () => {
    return axios.get(API_URL_TEST + 'admin', { headers: authHeader() });
}
const UserService = {
    getEtudiants,
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
}
export default UserService;
