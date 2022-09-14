import '../style/imc.css';
import { useState } from 'react';

export const Imc = () => {
  const[weight, setWeight] = useState(0);
  const[height, setHeight] = useState(0);
  const[bmi, setBmi] = useState('');
  const[message, setMessage] = useState('');
  const[imcColor, setImcColor] = useState('');

// Calc the bmi and changes the color depending on its value
  const calcBmi = (e) =>{
    e.preventDefault();
    if(weight === 0 || height === 0){
      alert('Por favor ingrese un peso y una altura valida');
    }else{
      // 0.0001?
      const bmi = (weight / (height * height) * 10000);
      // redondear
      setBmi(bmi.toFixed(1));
      // message
      if(bmi < 18.5){
        setMessage('Se encuentra bajo de peso');
        setImcColor('blue');
      }else if(bmi >= 18.5 && bmi < 24.9){
        setMessage('Todo perfecto, estas saludable');
        setImcColor('green');
      }else if(bmi >= 25 && bmi < 29.9){
        setMessage('Cuidado!, se encuentra con sobrepeso');
        setImcColor('yellow');
      }else if(bmi > 30){
        setMessage('Tiene obesidad');
        setImcColor('red');
      }
    }
  }

  return (
    <div className='container-imc'>
      <h2>IMC <span> BMI</span></h2>
      <div className='content-imc'>
        <form onSubmit={calcBmi}>
          <label>Peso (kg)
            <input type='number' maxLength='3' value={weight} onChange={(event) => setWeight(event.target.value)} />
          </label>
          <label>Altura (cm)
            <input type='number' maxLength='3' value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
          <button type='submit'>Calcular</button>
        </form>
        <div className='content-bmi'>
          <h3>Tu IMC es</h3>
          <div className={`bmi ${imcColor === 'blue' ? 'imc-blue' : 
                          imcColor === 'green' ? 'imc-green' : 
                          imcColor === 'yellow' ? 'imc-yellow' : 
                          imcColor === 'red' ? 'imc-red' : ''}`.trimEnd()}>
            <span>{bmi}</span>
          </div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Imc;
