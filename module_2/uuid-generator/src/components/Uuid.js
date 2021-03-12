import './uuid-generator.css';
import { v4 as uuidv4 } from 'uuid';

function Uuid() {
  return (
  <div className="uuid-container">
    <div className="uuid__card">
      <p className="uuid__title">UUID - generator</p>
      <button className="uuid__btn" onClick={generateUuid}>Generate Uuid</button>
      <p className="uuid__number">Click button to generate Uuid</p>
    </div>
  </div>
  );
}



const generateUuid = () => {
  const uuidContainer = document.querySelector(".uuid__number");
  uuidContainer.textContent = uuidv4();
}

export default Uuid;