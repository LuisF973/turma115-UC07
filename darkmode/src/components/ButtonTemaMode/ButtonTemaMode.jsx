import React, { useState, useEffect } from "react";
import style from "./ButtonTemaMode.module.css";
function ButtonTemaMode() {
    //const [dark, setDarkMode] = useState(false);
    const [dark, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true"; //converter uma string em booleano
    })
    useEffect(() => {
        localStorage.setItem("darkMode", dark);
    }, [dark])
    return (
        <div className={dark ? style.dark : style.light}>
            <h1>{dark ? "Modo Escuro 🌙" : "Modo Claro ☀️"}</h1>
            <button onClick={() => setDarkMode(!dark)}>Alterar Tema</button>
        </div>
    );
}
export default ButtonTemaMode;
