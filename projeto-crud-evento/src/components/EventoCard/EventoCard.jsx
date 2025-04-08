// Importa o componente Link do React Router para navegação entre páginas
import { Link } from 'react-router-dom';

// Importa os estilos CSS modularizados para aplicar no componente
import styles from './EventoCard.module.css';

// Componente funcional que recebe um objeto `evento` como prop
function CardEvento({ evento }) {

  return (
    // Container principal do card, estilizado com classes CSS
    <div className={styles.card}>
      {/* Exibe a imagem do evento */}
      <img
        src={evento.imagem}           // Caminho da imagem fornecido pelo objeto evento
        alt={evento.nome}             // Texto alternativo (acessibilidade)
        className={styles.imagem}     // Estilo da imagem
      />

      {/* Conteúdo textual do card */}
      <div className={styles.conteudo}>
        <h3>{evento.nome}</h3>                  {/* Nome do evento */}
        <p>{evento.descricao}</p>              {/* Descrição breve */}
        <p><strong>Data:</strong> {evento.data}</p>   {/* Data do evento */}
        <p><strong>Local:</strong> {evento.local}</p> {/* Local do evento */}

        {/* Botão com link para ver mais detalhes do evento */}
        <div>
          <Link to={`/evento/${evento.id}`} className={styles.botaoDetalhes}>
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}

// Exporta o componente para ser utilizado em outros lugares
export default CardEvento;
