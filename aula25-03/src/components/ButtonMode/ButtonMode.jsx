import { useState, useEffect } from "react";
import styles from "./ButtonMode.module.css";

function ButtonMode() {
  //const [darkMode, setDarkMode] = useState(false);

   // Carrega o tema salvo no LocalStorage (se não existir, começa como "false")
   const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Sempre que o estado do tema mudar, salva no LocalStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  return (
    
    <div className={darkMode ? styles.dark : styles.light}>
      <h1>{darkMode ? "Modo Escuro 🌙" : "Modo Claro ☀"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Alternar Tema
      </button>
    </div>
  );
}

export default ButtonMode;
