import { v4 as uuidv4 } from "uuid";
const eventos = [
    {
        id: uuidv4(),
        nome:"Teste",
        local:"Conferência Teste",
        descricao: "Evento sobre tecnologia e games",
        data: "2025-06-28",
        imagem: "https://cdn-icons-png.flaticon.com/512/6078/6078414.png",
    }
]

function listarEventos(){
    return eventos
}

function buscarEventoId(id){
    return eventos.find(evento => eventos.id === id);
}

function criarEvento(evento){
    evento.id = uuidv4();
    evento.imagem  = evento.imagem || "https://cdn-icons-png.flaticon.com/512/6078/6078414.png";
    eventos.push(evento);
}

function editarEvento(id, eventoAtualizado){
    const index = eventos.findIndex(evento => evento.id === id);
    if(index!== -1){
        eventos[index]  = {...eventos[index], ...eventoAtualizado}
        eventos[index].imagem = eventoAtualizado.imagem || "https://cdn-icons-png.flaticon.com/512/6078/6078414.png";
    }
}

function deletarEvento(id){
    const index = eventos.findIndex(evento => evento.id === id);
    if(index!== -1){
       eventos.slice(index,1);
    }
}
export default {listarEventos, buscarEventoId, criarEvento, editarEvento, deletarEvento}



