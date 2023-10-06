import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Etudiants = () => {
    const [content, setContent] = useState([]);
    //Navigation *****
    const navigate = useNavigate();

    useEffect(() => {
        UserService.getEtudiants().then(
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
        );
    }, []);

    return (
        <div className='card-body'>
            <h5>Etudiants :&nbsp;
                <button type="button" className="btn btn-outline-primary position-relative">

                    {/*  <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#0066CC"><path d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512" fill="#0066CC">
                        <path d="M360 72a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM144 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM496 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM200 313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 217.5V272c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V217.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H486.2c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3H310.2c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6H134.2c-32.4 0-62.1 17.8-77.5 46.3L18.9 340.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5z" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {content.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button></h5>
            <table className='table'>
                <thead>
                    <tr><th>Nom</th><th>Note</th><th>Admis</th></tr>
                </thead>
                <tbody>

                    {
                        content.map((etudiant) => (
                            <tr key={etudiant.id}>
                                {/* <td>{etudiant.id}</td> */}
                                <td>{etudiant.nom}</td>
                                <td>{etudiant.note}</td>
                                <td>{(etudiant.admis ? "Oui" : "-")}</td>
                                {/*<!-- -->*/}

                                {/* <td>
                                    <button onClick={() => navigate(`/etudiant/${etudiant.id}`)} className='btn btn-outline-success'>
                                        Détails
                                    </button>
                                </td> */}

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    );
}

export default Etudiants

{/* <td>
                                    <button onClick={() => handelCheckEtudiant(etudiant)} className='btn btn-outline-success'>
                                        <FontAwesomeIcon
                                            icon={etudiant.admis ? faCheck : fa0}>
                                        </FontAwesomeIcon>
                                    </button></td>*/}

{/* <td>
                                    <button onClick={() => handelDeleteEtudiant(etudiant)} className='btn btn-outline-danger'>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => navigate(`/admin/user/editEtudiant/${etudiant.id}`)} className='btn btn-outline-success'>
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                    </button>
                                </td> */}