import React from 'react';
import styles from './Band.module.css';

function Band({ image, name, description }) {
  return (
    <div className={styles.band}>
      <img src={image} alt={`Banda ${name}`} className={styles.image} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Band;
