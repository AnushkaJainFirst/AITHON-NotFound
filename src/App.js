import React from 'react';
import NavigationBar from './components/Navbar';
import RealTimePrice from './components/RealTimePrice';
import RecentNews from './components/RecentNews';
import HistoricalTrends from './components/HistoricalTrends';
import Quiz from './components/Quiz';
import CryptoWallet from './components/CryptoWallet';
import { Container } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div>
      <NavigationBar />
      <Container className="mt-4">
        <section id="price">
          <RealTimePrice />
        </section>
        <hr />
        <section id="news">
          <RecentNews />
        </section>
        <hr />
        <section id="trends">
          <HistoricalTrends />
        </section>
        <hr />
        <section id="quiz">
          <Quiz />
        </section>
        <hr />
        <section id="wallet">
          <CryptoWallet />
        </section>
      </Container>
    </div>
  );
}

export default App;
