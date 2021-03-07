import './uuid-generator.css';
import { v4 as uuidv4 } from 'uuid';

const uuidNumber = uuidv4();

function Uuid() {
  return (
  <div className="uuid-container">
    <div className="uuid__card">
      <p className="uuid__title">UUID - generator</p>
      <p className="uuid__subtitle">refresh page to generate new UUID</p>
      <p>{uuidNumber}</p>
    </div>
  </div>

  );
}

export default Uuid;