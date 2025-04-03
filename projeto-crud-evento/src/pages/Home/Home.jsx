import { useState } from "react";
import CardEvento from "../../components/CardEvento/CardEvento";
import database from "../../data/database";

function Home() {
    const eventos = database.listarEventos();
    return (
        <>
            <h1> Página dos Eventos mais Legais do RN </h1>
            {
                eventos.map((evento) =>(
                    <div>
                         <CardEvento key={evento.id} evento={evento} />
                    </div>
                   
                ))
            }
        </>
    )

}
export default Home