import styles from './App.module.css';

import Header from './components/layout/header/Header';
import ShortenLinks from './components/shortenLinks/ShortenLinks';
import Statistics from './components/statistics/Statistics';
import Boost from './components/boost/Boost';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ShortenLinks />
        <Statistics></Statistics>
        <Boost />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
