// Importa os hooks do React: useState (estado) e useEffect (efeitos colaterais)
import { useState, useEffect } from "react";

// Importa os estilos CSS modularizados para o formulário
import styles from "./EventoForm.module.css";

// Componente funcional que recebe a função `onSubmit` e um objeto `eventoInicial` como props
function EventoForm({ onSubmit, eventoInicial = {} }) {
  
  // Estado do formulário contendo os campos do evento
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data: "",
    local: "",
    imagem: ""
  });

  // Efeito que é executado quando o eventoInicial muda (edição)
  useEffect(() => {
    // Se existir um evento inicial (edição), atualiza os valores no estado
    if (eventoInicial) {
      setEvento({
        nome: eventoInicial.nome || "",
        descricao: eventoInicial.descricao || "",
        data: eventoInicial.data || "",
        local: eventoInicial.local || "",
        imagem: eventoInicial.imagem || ""
      });
    } else {
      // Se for um novo evento, limpa o formulário
      setEvento({ nome: "", descricao: "", data: "", local: "", imagem: "" });
    }
  }, [eventoInicial]);

  // Função para atualizar os campos do formulário conforme o usuário digita
  function handleChange(e) {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  }

  // Função para tratar o envio do formulário
  function handleSubmit(e) {
    e.preventDefault();         // Previne o comportamento padrão de recarregar a página
    onSubmit(evento);          // Envia o evento preenchido para o componente pai
    // Limpa o formulário após o envio
    setEvento({ nome: "", descricao: "", data: "", local: "", imagem: "" });
  }

  // JSX que define o formulário com campos controlados
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        value={evento.nome}
        onChange={handleChange}
        placeholder="Nome do Evento"
        required
      />
      <input
        type="text"
        name="descricao"
        value={evento.descricao}
        onChange={handleChange}
        placeholder="Descrição"
        required
      />
      <input
        type="date"
        name="data"
        value={evento.data}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="local"
        value={evento.local}
        onChange={handleChange}
        placeholder="Local"
        required
      />
      <input
        type="text"
        name="imagem"
        value={evento.imagem}
        onChange={handleChange}
        placeholder="URL da Imagem (Opcional)"
      />
      {/* Botão para salvar os dados do formulário */}
      <button type="submit">Salvar</button>
    </form>
  );
}

// Exporta o componente para ser reutilizado
export default EventoForm;
