import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import EventoDetalhes from "./pages/EventoDetalhes/EventoDetalhes";
import GerenciarEventos from "./pages/Eventos/Eventos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evento/:id" element={<EventoDetalhes />} />
        <Route path="/eventos" element={<GerenciarEventos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
