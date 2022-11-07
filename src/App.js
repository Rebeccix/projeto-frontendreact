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
    // const filtered = cart.filter(item => item.name !== current.name)
    // const mapa = cart.map((i) => i.includes(current))
    const duplicat = cart.find((i) => i.name === current.name)
    if (cart.length === 0) {
      setCart([{...current, amount: 1}])
    } else if (duplicat) {
      setCart(
        cart.map(item => 
          item.name === current.name ? {...current, amount: duplicat.amount + 1} : item
        )
      )
    } else {
      cart.map(() => setCart([...cart, {...current, amount: current.amount + 1}]))
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