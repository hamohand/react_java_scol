import React from 'react'
import AuthService from '../services/auth.service';

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    console.log("PROFILE longueur token ", currentUser.token.length);
    const longueurToken = currentUser.token.length;

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                </h3>
            </header>
            <p>
                {/* <strong>Token:</strong> {currentUser.token.substring(0, longueurToken - 1)} ...{" "}
                {currentUser.token.substr(currentUser.token.length - 20)} */}
                <strong>Token:</strong> {currentUser.token}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    )
}
export default Profile;
