const d3 = require('d3-random');
const prompt = require('prompt');

//draw random number between 1 -10
const drawRandom = d3.randomUniform(1, 11);
const randomNumber = Math.floor(drawRandom());

//set schema for prompt
const schema = {
    properties: {
      number: {
        pattern: /^([1-9]|10)$/,
        message: 'Możesz podać liczbę w przedziale 1-10',
        required: true
      }
    }
  };

//prompt user
console.log(`podaj liczbę z zakresu 1-10`);
prompt.start();
prompt.get(schema, function (err, result) {
    const userDraw = result.number;
    console.log(`użytkownik wybrał liczbę: ${userDraw}`);
    console.log(`komputer wylosował: ${randomNumber}`); 
    if(userDraw==randomNumber) console.log('Udało się!');
    if(userDraw!=randomNumber) console.log('Spróbuj ponownie');
});

