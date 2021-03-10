
import React, {useState} from 'react';

import Author from './Author';
import Scoring from './Scoring';

//CSS in JS
const yellow = '#f39c12';
const styles = {
  backgroundColor: '#e74c3c',
  border: '#3498db 1px solid',
  padding: 30,
  paragraph: {
    backgroundColor: yellow
  }
}

// komponent funkcyjny ze stanem (hooks)
function News({heading, intro, author}) {
    const [score] = useState(11);
  
    return (
      <div className="news" style={styles}>
        <h2>{heading}</h2>
        <p style={styles.paragraph}>{intro}</p>
        <Author author={author} />
        <Scoring score={score} />
      </div>
    );
  }

  export default News;