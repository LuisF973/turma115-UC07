// Importa a função uuidv4 para gerar identificadores únicos para os eventos
import { v4 as uuidv4 } from "uuid";

// Lista inicial de eventos simulados, cada um com id, nome, local, descrição, data e imagem
const eventos = [
    {
        id: uuidv4(),
        nome: "Teste",
        local: "Conferência Teste",
        descricao: "Evento sobre tecnologia e games",
        data: "2025-06-28",
        imagem: "https://cdn-icons-png.flaticon.com/512/6078/6078414.png",
    },
    {
        id: uuidv4(),
        nome: "Teste",
        local: "Conferência Teste",
        descricao: "Evento sobre tecnologia e games",
        data: "2025-06-28",
        imagem: "https://cdn-icons-png.flaticon.com/512/6078/6078414.png",
    },
    {
        id: uuidv4(),
        nome: "Teste",
        local: "Conferência Teste",
        descricao: "Evento sobre tecnologia e games",
        data: "2025-06-28",
        imagem: "https://cdn-icons-png.flaticon.com/512/6078/6078414.png",
    }
];

// Retorna a lista completa de eventos
function listarEventos() {
    return eventos;
}

// Busca um evento com base no seu id
function buscarEventoId(id) {
    return eventos.find(evento => evento.id === id);
}

// Cria um novo evento e adiciona à lista
function criarEvento(evento) {
    evento.id = uuidv4(); // Gera um novo id único
    // Usa a imagem padrão se nenhuma imagem for fornecida
    evento.imagem = evento.imagem || "https://cdn-icons-png.flaticon.com/512/6078/6078414.png";
    eventos.push(evento);
}

// Edita um evento existente com base no id
function editarEvento(id, eventoAtualizado) {
    const index = eventos.findIndex(evento => evento.id === id);
    if (index !== -1) {
        // Atualiza os dados do evento preservando o anterior e substituindo os campos modificados
        eventos[index] = { ...eventos[index], ...eventoAtualizado };
        // Define a imagem padrão se não for fornecida
        eventos[index].imagem = eventoAtualizado.imagem || "https://cdn-icons-png.flaticon.com/512/6078/6078414.png";
    }
}

// Remove um evento da lista com base no id
function deletarEvento(id) {
    const index = eventos.findIndex(evento => evento.id === id);
    if (index !== -1) {
        eventos.splice(index, 1); // Remove o evento da lista
    }
}

// Exporta todas as funções como um objeto padrão
export default { listarEventos, buscarEventoId, criarEvento, editarEvento, deletarEvento };
