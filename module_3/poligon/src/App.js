import React from 'react';

import Header from './components/Header';
// import { Logo, NavLink } from './components/Header';
import News from './pages/Articles';

import './App.css';
import './reset.css';
import './normalize.css';

const data = [
  { id: 1, author: 'Greg Topolewski', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, author: 'Greg Topolewski', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, author: 'Greg Topolewski', title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];


function App() {
  return (
    <>
      <Header />
      {/* <div>
          <Logo />
          <div>
              <NavLink to="/" label="Link 1" />
              <NavLink to="/" label="Link 2" />
              <NavLink to="/" label="Link 3" />
          </div>
      </div> */}
      {data.map((el) => {
        return <News 
        heading={el.title} 
        intro={el.intro} 
        author={el.author}
        key={`news-${el.id}`
      } />
      })}
    </>
  );
}

export default App;
