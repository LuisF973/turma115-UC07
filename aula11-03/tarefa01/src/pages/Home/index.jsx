import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default Home;
