import React from 'react';

import Header from './components/Header';
import Articles from './pages/Articles';
import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';
import './reset.css';
import './normalize.css';

function App() {
  return (
    <>
      <Header />
      <Content>
        <Articles />
      </Content>
      <Footer />
    </>
  );
}

export default App;
