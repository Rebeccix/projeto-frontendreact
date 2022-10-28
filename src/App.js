import GlobalStyle from './GlobalStyle';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { useState } from 'react';

function App() {

  const produtos = [
    {
      nome: "skate",
      preco: 100,
    },
    {
      nome: "bike",
      preco: 200,
    },
    {
      nome: "carro",
      preco: 300
    },
    {
      nome: "Banana",
      preco: 600
    }
  ];

  const [ cart, useCart ] = useState({
    nome: 'teste',
    preco: '300'
  })

  return (
    <>
      <GlobalStyle/>
      <Header obj={produtos}/>
      <Main cart={cart} useCart={useCart} obj={produtos}/>
      <footer>
        <p>Rebecca Ferreira</p>
      </footer>
    </>
  );
}

export default App;
