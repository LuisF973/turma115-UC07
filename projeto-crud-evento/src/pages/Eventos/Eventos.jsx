// Importa o hook useState para gerenciar estados e useNavigate para navegação
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importa os estilos CSS específicos deste componente
import styles from './Eventos.module.css';

// Importa as funções do "banco de dados" simulado
import database from '../../data/database';

// Importa o componente de formulário para criar/editar eventos
import EventoForm from '../../components/EventoForm/EventoForm';

function Eventos() {
  const navigate = useNavigate();

  // Estado para armazenar a lista de eventos
  const [eventos, setEventos] = useState(database.listarEventos());

  // Estado para armazenar o evento selecionado para edição
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  // Estado para controlar se o formulário deve ser exibido
  const [mostrarForm, setMostrarForm] = useState(false);

  // Função chamada ao submeter o formulário
  function handleSubmit(evento) {
    if (eventoSelecionado) {
      // Edita evento existente
      database.editarEvento(eventoSelecionado.id, evento);
    } else {
      // Cria novo evento
      database.criarEvento(evento);
    }

    // Atualiza lista e oculta o formulário
    setEventos(database.listarEventos());
    setEventoSelecionado(null);
    setMostrarForm(false);
  }

  // Prepara evento para edição
  function handleEditar(evento) {
    setEventoSelecionado(evento);
    setMostrarForm(true);
  }

  // Exclui evento após confirmação
  function handleExcluir(id) {
    const confirmar = window.confirm("Tem certeza que deseja excluir este evento?");
    if (confirmar) {
      database.deletarEvento(id);
      setEventos(database.listarEventos());
      navigate('/eventos'); // Redireciona para a listagem
    }
  }

  // Prepara formulário para criação de novo evento
  function handleNovoEvento() {
    setEventoSelecionado(null);
    setMostrarForm(true);
  }

  // Cancela a operação de criação ou edição
  function handleCancelar() {
    setEventoSelecionado(null);
    setMostrarForm(false);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Gerenciar Eventos</h1>

      {/* Botão para abrir formulário de novo evento */}
      <button onClick={handleNovoEvento}>Novo Evento</button>

      {/* Tabela com os eventos cadastrados */}
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Local</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento.id}>
              <td>{evento.nome}</td>
              <td>{evento.descricao}</td>
              <td>{evento.data}</td>
              <td>{evento.local}</td>
              <td>
                {/* Botões de editar e excluir */}
                <button
                  className={styles.editar}
                  onClick={() => handleEditar(evento)}
                >
                  Editar
                </button>
                <button
                  className={styles.excluir}
                  onClick={() => handleExcluir(evento.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal com formulário de criação/edição */}
      {mostrarForm && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2>{eventoSelecionado ? "Editar Evento" : "Novo Evento"}</h2>
            <EventoForm onSubmit={handleSubmit} eventoInicial={eventoSelecionado} />
            <button className={styles.cancelarBtn} onClick={handleCancelar}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Exporta o componente para ser utilizado em outras rotas
export default Eventos;
