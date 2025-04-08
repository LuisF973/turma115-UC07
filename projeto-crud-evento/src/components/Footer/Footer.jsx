// Importa os estilos CSS modularizados do arquivo Footer.module.css
import styles from './Footer.module.css';

// Define o componente funcional Footer
function Footer() {
  return (
    // Define o rodapé da página com uma classe CSS para estilização
    <footer className={styles.footer}>
      {/* 
        Mostra o ano atual dinamicamente com JavaScript 
        e o nome do site "Eventos+", seguido da mensagem de direitos
      */}
      © {new Date().getFullYear()} <span>Eventos+</span> | Todos os direitos reservados
    </footer>
  );
}

// Exporta o componente para que ele possa ser utilizado em outros arquivos
export default Footer;
