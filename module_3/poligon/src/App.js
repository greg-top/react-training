import React from 'react';

import News from './components/News';

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
