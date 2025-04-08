// Importa o hook useParams do React Router para acessar os parâmetros da URL
import { useParams } from 'react-router-dom';
// Importa o módulo que simula um banco de dados com funções de acesso a eventos
import database from '../../data/database';
// Importa os estilos CSS específicos para este componente
import styles from './EventoDetalhes.module.css';

function EventoDetalhes() {
  // Extrai o parâmetro `id` da URL (por exemplo: /evento/123)
  const { id } = useParams();

  // Busca o evento correspondente ao ID fornecido na URL
  const evento = database.buscarEventoId(id);

  // Caso não encontre o evento, exibe uma mensagem de erro
  if (!evento) return <p className={styles.erro}>Evento não encontrado!</p>;

  // Renderiza os detalhes do evento encontrado
  return (
    <div className={styles.detalhes}>
      <h2>{evento.nome}</h2>
      <img src={evento.imagem} alt={evento.nome} />
      <p><strong>Descrição:</strong> {evento.descricao}</p>
      <p><strong>Data:</strong> {evento.data}</p>
      <p><strong>Local:</strong> {evento.local}</p>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes do projeto
export default EventoDetalhes;
