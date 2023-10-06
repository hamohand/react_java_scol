import axios from 'axios'
import React from 'react'

export const BASE_URL = 'http://localhost:8088' //api: spring boot

export const axiosApi = axios.create({  //non utilisé
    baseURL: BASE_URL,
    headers: {
        //'Access-Control-Allow-Origin': '*', //ne marche pas
        //'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS', //ne marche pas
        'Content-Type': 'application/json; charset=utf-8',
        //'Content-type': 'application/x-www-form-urlencoded',
        //'transfer-encoding': 'chunked', //ne marche pas
        accept: 'application/json',
        //setContentType: 'application/x-www-form-urlencoded;charset=utf-8'
        //authorization: `Bearer ${token}`,

    },
    //withCredentials: false,
    /* data: {
        client_id: 'toto',
        grant_type: 'client_credentials'
    },
    grant_type: 'client_credentials', */
});

//export const roles = client.tokenParsed.realm_access.roles;

const Api = () => {

    //const token = useAuth();
    // axiosApi.defaults.headers.authorization = `Bearer ${token}`; //autentification

    return (
        <div>
            {/* Connecté à Keycloak <br /><br /> 
            <ConnecteRouter />
             <RedactRouter /> */}
            {/* <Logout /> */}

        </div>
    )
}

export default Api

