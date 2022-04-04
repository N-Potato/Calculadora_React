import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [opcao, setOpcao] = useState('Somar')
  const [resultado, setResultado] = useState(0)

  const calcular = () => {
    if (opcao === 'Somar')
      return parseFloat(n1) + parseFloat(n2)
    else if (opcao === 'Subtrair')
      return parseFloat(n1) - parseFloat(n2)
    else if (opcao === 'Multiplicar')
      return parseFloat(n1) * parseFloat(n2)
    else if (opcao === 'Dividir')
      return parseFloat(n1) / parseFloat(n2)

  }

    useEffect(() =>{
      setResultado(calcular())
    }, [n1, n2, opcao ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>

        <label>Primeiro Número</label>
        <input type="number"
          value={n1}
          onChange={e => setN1(e.target.value)}
        />

        <label>Segundo Número</label>
        <input type="number"
          value={n2}
          onChange={e => setN2(e.target.value)}
        />

        <select onChange={e => setOpcao(e.target.value)}>
          <option>Somar</option>
          <option>Subtrair</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>

        <label>Resultado {resultado}</label>

      </header>
    </div>
  );
}

export default App;
