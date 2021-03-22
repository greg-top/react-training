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

//komponent klasowy
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
  const [score, changeScore] = useState(11);

  // changeScore(22); //złe miejsce do zmiany state, omówione w dalszej części kursu
  return (
    <div className="news">
      <h2>{heading}</h2>
      <p>{intro}</p>
      <p>{score}</p>
    </div>
  );
}

const data = [
  {
    heading: "Nagłówek 1",
    intro: "Intro 1"
  },
  {
    heading: "Nagłówek 2",
    intro: "Intro 2"
  },  {
    heading: "Nagłówek 3",
    intro: "Intro 3"
  }
];


function App() {
  return (
    <>
      {data.map((el, index) => {
        return <News heading={el.heading} intro={el.intro} key={`news-${index}`} />
      })}
    </>
  );
}

export default App;
