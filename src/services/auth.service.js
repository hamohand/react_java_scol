import axios from 'axios';
import React from 'react'
import Api from '../api/Api';

const API_URL_AUTH = 'http://localhost:8080/api/auth/';
//const API_URL = Api.BASE_URL + '/api/auth/';

const login = async (username, password) => {
    console.log('------------ AUTH.SERVICE ----------------------- ');
    console.log('AUTH.SERVICE username, password: ', username, ' ', password);
    const response = await axios.post(API_URL_AUTH + "signin", {
        username,
        password
    })
        .then((response) => {
            console.log('THEN');
            console.log('AUTH.SERVICE response.data: ', response.data);
            //console.log('AUTH.SERVICE response.data.accessToken: ', response.data.accessToken);
            //console.log('AUTH.SERVICE response.data.accessToken.token: ', response.data.accessToken.token);
            console.log('AUTH.SERVICE response.data.token: ', response.data.token);
            if (response.data) {
                //if (response.data.token) {
                //console.log('----------------------------------- ');
                //console.log('AUTH.SERVICE response.data.accessToken-2: ', response.data);
                localStorage.setItem("user", JSON.stringify(response.data));
                //localStorage.setItem("user", response.data);
                console.log("AUTH.SERVICE localStorage.getItem('user') ", localStorage.getItem('user'));
            }
            return response.data;
        })
        .catch((err) => console.warn('Non connecté'));
    console.log("AUTH.SERVICE localStorage.getItem('user') JSON.parse ", JSON.parse(localStorage.getItem('user')));

    return response.data;
}

const logout = () => {
    localStorage.removeItem("user");
}

const register = (username, email, password) => {
    return axios.post(API_URL_AUTH + "signup", {
        username,
        email,
        password
    });
}

const getCurrentUser = () => {
    console.log("AUTH.SERVICE getCurrentUser - localStorage.getItem('user') ", localStorage.getItem('user'));
    console.log("AUTH.SERVICE getCurrentUser - localStorage.getItem('user') JSON.parse ", JSON.parse(localStorage.getItem('user')));
    console.log('----------- /AUTH.SERVICE ------------------------ ');
    return JSON.parse(localStorage.getItem('user'));;
}

const AuthService = {
    login,
    logout,
    register,
    getCurrentUser
}
export default AuthService;