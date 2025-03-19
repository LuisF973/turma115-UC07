import { React, useState } from "react"; 
import style from "./Band.module.css";

function Band({imagem,nome,descricao}) {
   const [like, setLike] = useState(0); 
   const [deslike, setDeslike] = useState(0);

    return (
        <div className={style.band}>
            <img src={imagem} alt={nome}/>
            <div className={style.bandinfo}>
                <h2>{nome}</h2>
                <p>{descricao} </p>
                <p>Likes: {like}</p>
                <p>Deslikes: {deslike}</p>
            </div>
            
            <button onClick={()=>setLike(like+1)}>❤️</button>
            <button onClick={()=>setDeslike(deslike+1)}>💔</button>
        </div>
    )
}
export default Band;