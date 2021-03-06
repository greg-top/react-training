import './uuid-generator.css';
import { v4 as uuidv4 } from 'uuid';

const uuidNumber = uuidv4();

function Uuid({color}) {
  return (
  <div className="uuid-container">
    <div className="uuid__card">
      <p className="uuid__title">UUID - generator</p>
      <p className="uuid__subtitle">reefresh page to generate new UUID</p>
      <p>{uuidNumber}</p>
    </div>
  </div>

  );
}

function App() {
  return (
    <Uuid />
  );
}

export default App;
