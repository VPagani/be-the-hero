import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";
import Logo from "../../components/Logo";

import "./style.css";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Login() {
    const [id, setId] = useState("");
    const history = useHistory();

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.post("sessions", { id });

            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", response.data.name);
            
            history.push("/profile");
        } catch(e) {
            alert("Falha no login, tente novamente");
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <Logo />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}