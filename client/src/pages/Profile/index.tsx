import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2, FiTrash } from "react-icons/fi";

import api from "../../services/api";
import Logo from "../../components/Logo";
import Repeat from "../../components/Repeat";

import "./style.css";

const currency = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function Profile() {
    const [ incidents, setIncidents ] = useState<any[]>([]);

    const ongId = localStorage.getItem("ongId");
    const ongName = localStorage.getItem("ongName");

    const history = useHistory();

    useEffect(() => {
        api.get("profile", {
            headers: {
                Authorization: ongId
            }
        }).then(response => setIncidents(response.data))
    }, [ongId]);

    async function handleDeleteIncident(id: number) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch(e) {
            alert("Erro  ao deletar caso, tente novamente");
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push("/");
    }

    return (
        <div className="profile-container">
            <header>
                <Logo/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident =>
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{currency.format(incident.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}