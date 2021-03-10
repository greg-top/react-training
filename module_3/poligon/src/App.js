import React, {useState} from 'react';

import './App.css';
import './reset.css';
import './normalize.css';

const yellow = '#f39c12';

const styles = {
  backgroundColor: '#e74c3c',
  border: '#3498db 1px solid',
  padding: 30,
  paragraph: {
    backgroundColor: yellow
  }
}

// //komponent klasowy
// class News extends React.Component {

//   //korzystanie ze state za pomocą kontruktora
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     score: 5
//   //   }
//   // }

//   //konfiguracja state 
//   state = {
//     score: 6
//   }

//   //stan życia komponentu (omówione dalej w kursie)
//   componentDidMount() {
//     let loader = true;
//     //zmiana state 
//     this.setState({score: 8}, ()=> {
//       loader = false;
//     });
//   }

//   render() {

//     const {heading, intro} = this.props;
//     const {score} = this.state;

//     return (
//       <div className="news">
//         <h2>{heading}</h2>
//         <p>{intro}</p>
//         <p>{score}</p>
//       </div>
//     );
//   }
// }

//komponent funkcyjny
// function News({heading, intro}) {
//   return (
    // <div className="news">
    //   <h2>{heading}</h2>
    //   <p>{intro}</p>
    // </div>

    // JSS - JavaScript in CSS
    //   <div style={styles}>
    //   <h2>{heading}</h2>
    //   <p style={styles.paragraph}>{intro}</p>
    // </div>
//   );
// }

// komponent funkcyjny ze stanem (hooks)

function News({heading, intro}) {
  const [score] = useState(11);

  return (
    <div className="news" style={styles}>
      <h2>{heading}</h2>
      <p style={styles.paragraph}>{intro}</p>
      <p>Ocena: {score}</p>
    </div>
  );
}

const data = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];


function App() {
  return (
    <>
      {data.map((el) => {
        return <News heading={el.title} intro={el.intro} key={`news-${el.id}`} />
      })}
    </>
  );
}

export default App;
