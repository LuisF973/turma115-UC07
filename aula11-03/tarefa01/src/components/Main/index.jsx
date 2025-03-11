import React from 'react';
import Band from '../Band';
import styles from './Main.module.css';

const bands = [
  {
    name: 'Banda 1',
    image: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
    description: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Banda 2',
    image: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
    description: 'Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Banda 3',
    image: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
    description: 'Descrição da Banda 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Banda 4',
    image: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
    description: 'Descrição da Banda 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
];

function Main() {
  return (
    <main className={styles.main}>
      
      {bands.map((band, index) => (
        <div className={styles.section}>
          <Band key={index} {...band} />
        </div>
      ))}
     
      
    </main>
  );
}

export default Main;
