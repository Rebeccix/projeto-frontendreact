import Cart from './Components/Cards';
import Header from './Components/Header';
import Main from './Components/Main';
import Filter from './Components/Filter';
import GlobalStyle from './GlobalStyle';
import dataBase from './dataBase';
import { useState } from 'react';


function App() {

  const { items } = dataBase 

  const [ cart, setCart ] = useState([])

  const addItem = (current) => {
    console.log(cart.length)
    if (cart.length === 0 ) {
      setCart([current])
    } else {
      cart.map(() => setCart([...cart, current]))
    }
  }

  const removeItem = ((current) => {
    const filter = cart.filter(item => item.name !== current.name)
    setCart(filter)
  })

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <div className='teste'>
        <Filter/>
        <Main items={items} addItem={addItem}/>
        <Cart cart={cart} removeItem={removeItem}/>
      </div>
    </>
  );
}

export default App;