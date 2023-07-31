import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg"
import api from "../../../services/api";

import "./login.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Admin() {

    const [input, setInput] = useState({})
    const history = useHistory()

    const onChangeInputs = (e) => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

   const tryLogin = async() => {
    await api.post('connect/auth', input)
    .then(resp => {
        const dataToken = resp.data
        localStorage.setItem("TOKEN_ACESS", dataToken?.token)
        history.push('/admin/home')
    }).catch(error => {
        console.log("login", error.response)
        toast.error(error.response.data.erro, {
            theme: "colored",
            autoClose: 3000
        })
    })
   }

    return (
        <div className="loginAdmin">
            <div className="boxAdminInput">
                <div className="imgLogo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="formInputs">
                    <div className="inputs">
                        <label>Email</label>
                        <input 
                        name="email" 
                        type="text"
                        value={input?.email || ""} 
                        onChange={onChangeInputs}
                        />
                    </div>
                    <div className="inputs">
                        <label>Senha</label>
                        <input 
                        name="password" 
                        type="password"
                        value={input?.password || ""}
                        onChange={onChangeInputs}
                        />
                    </div>
                </div>
                <div className="btnAdmin" onClick={tryLogin}>
                    <button>Entrar</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}