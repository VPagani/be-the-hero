import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import Logo from "../../components/Logo";

import "./style.css";

export default function NewIncident() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const history = useHistory();

    const ongId = localStorage.getItem("ongId");

    async function handleNewIncident(e: FormEvent) {
        e.preventDefault();

        const data = { title, description, value };

        try {
            await api.post("incidents", data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push("/profile");
        } catch(e) {
            alert("Erro ao cadastrar caso, tente novamente");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <Logo />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreve o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input type="text"
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="number"
                        placeholder="Valor em R$"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}