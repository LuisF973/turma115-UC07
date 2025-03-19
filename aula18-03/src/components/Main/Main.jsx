import React from "react";
import { Link } from "react-router-dom";
import Band from "../Band/Band";
import style from "./Main.module.css";
import bandas from "../../data/bancoBands";

function Main() {
    return (
        <main className={style.main}>
            {
                bandas.map((banda, index) => (

                    <section>

                        <Band key={index} {...banda} />
                        <Link key={banda.id} to={`band/${banda.id}`}>
                            <p>Clique aqui para ler mais sobre...</p>
                        </Link>
                    </section>


                ))
            }
            {/* <section>
                <Band imagem="https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg" nome="Banda 01" descricao="Uma banda legal" />
            </section> */}
        </main>

    )


}

export default Main;