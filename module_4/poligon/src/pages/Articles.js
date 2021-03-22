
import React from 'react';

import News from '../components/News';

const data = [
  { id: 1, author: 'Greg Topolewski', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, author: 'Greg Topolewski', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, author: 'Greg Topolewski', title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];

function Articles() {
  return (
    <div>
      {data.map((el) => (
        <News key = { `news-${el.id}` } header = { el.title } intro = { el.intro } author = { el.author } />
      ))}
    </div>
  );
}

export default Articles;