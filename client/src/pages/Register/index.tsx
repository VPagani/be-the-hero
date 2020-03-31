import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import Logo from "../../components/Logo";

import "./style.css";


export default function Register() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ whatsapp, setWhatsapp ] = useState("");
    const [ city, setCity ] = useState("");
    const [ uf, setUf ] = useState("");

    const history = useHistory();

    async function handleRegister(e: FormEvent) {
        e.preventDefault();

        const data = { name, email, whatsapp, city, uf };
        
        try {
            const response = await api.post("ongs", data);
            
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push("/");
        } catch(e) {
            alert("Erro de cadastro, tente novamente");
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <Logo />

                    <h1>Cadastro</h1>
                    <p>Faça cadastro, entre na plataforma e ajude pessoas a encontrarem os casos na sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="UF"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            style={{ width: 80 }}
                        />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}