import React from 'react'

export default function authHeader() {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log("AUTH.HEADER user ", user);
    // console.log("PROFILE user.token ", user.token);

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}
