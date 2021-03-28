import react from 'react';

function Form() {
  return (
    <form>
      <div>
        <input type="number" placeholder="Kwota netto do zapłaty" />
      </div>  
      <div>
        <select>
          <option defaultValue disabled>Wybierz napiwek</option>
          <option value="5">Napiwek 5%</option>
          <option value="10">Napiwek 10%</option>
          <option value="15">Napiwek 15%</option>
          <option value="20">Napiwek 20%</option>
        </select>
      </div>
      <div>
        <select>
          <option defaultValue disabled>Wybierz VAT</option>
          <option value="5">VAT 5%</option>
          <option value="8">VAT 8%</option>
          <option value="22">VAT 22%</option>
        </select>
      </div>
      <button type="submit">Przelicz</button>
    </form>
  );
}

export default Form;