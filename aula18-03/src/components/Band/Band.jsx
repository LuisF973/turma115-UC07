import React from "react";
import style from "./Band.module.css";

function Band({imagem,nome,descricao}) {
    return (
        <div className={style.band}>
            <img src={imagem} alt={nome}/>
            <div className={style.bandinfo}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    )
}
export default Band;