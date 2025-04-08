import React from 'react';
import styles from './Home.module.css';
import database from '../../data/database';
import EventoCard from '../../components/EventoCard/EventoCard';

function Home() {
  const eventos = database.listarEventos();

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {eventos.map(evento => (
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </div>
    </div>
  );
}

export default Home;
