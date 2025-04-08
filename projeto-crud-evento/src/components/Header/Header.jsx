// Importa o componente Link do react-router-dom para navegação entre páginas sem recarregar
import { Link } from 'react-router-dom';

// Importa os estilos CSS do módulo Header.module.css
import styles from './Header.module.css';

// Define o componente funcional Header
function Header() {
  return (
    // Define a estrutura principal do cabeçalho da página
    <header className={styles.header}>
      
      {/* Título/logo do site, estilizado com a classe logo */}
      <h1 className={styles.logo}>Eventos+</h1>
      
      {/* Navegação principal do site com links internos */}
      <nav className={styles.nav}>
        {/* Link para a página inicial */}
        <Link to="/">Home</Link>
        
        {/* Link para a página de eventos */}
        <Link to="/eventos">Eventos</Link>
      </nav>
    </header>
  );
}

// Exporta o componente Header para ser usado em outras partes da aplicação
export default Header;
