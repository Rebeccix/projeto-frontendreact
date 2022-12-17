import Cart from "./Components/Cards";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Filter from "./Components/Filter";
import GlobalStyle from "./GlobalStyle";
import dataBase from "./dataBase";
import { useState, useEffect } from "react";

function App() {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [totalCart, setTotalCart] = useState(JSON.parse(localStorage.getItem("total")) || []);
  const [items, setItems] = useState(dataBase)
  const [filterMin, setFilterMin] = useState(0)
  const [filterMax, setFilterMax] = useState(0)
  const [filterName, setFilterName] = useState('')
  const [toggle, setToggle] = useState(1)
  const [toggleCart, setToggleCart] = useState(1)
  const [sortItemsName, setSortItemsName] = useState(0)
  
  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('total', JSON.stringify(totalCart))
  } 
  , [totalCart]
  )

  const addItem = (current) => {
    // const filtered = cart.filter(item => item.name !== current.name)
    // const mapa = cart.map((i) => i.includes(current))
    const duplicat = cart.find((i) => i.name === current.name);
    if (cart.length === 0) {
      setCart([{ ...current, amount: 1 }]);
    } else if (duplicat) {
      setCart(
        cart.map((item) =>
          item.name === current.name
            ? { ...current, amount: duplicat.amount + 1 }
            : item
        )
      );
    } else {
      cart.map(() =>
        setCart([...cart, { ...current, amount: current.amount + 1 }])
      );
    }

    // sum cart
    if (totalCart.length === 0) {
      setTotalCart(current.price);
    } else {
      setTotalCart(totalCart + current.price);
    }
    setToggleCart(0)
  };

  const removeItem = (current) => {
    const filter = cart.filter((item) => item.name !== current.name);
    const duplicat = cart.find((i) => i.name === current.name);
    if (current.amount === 1) {
      setCart(filter);
    } else if (duplicat) {
      setCart(
        cart.map((item) =>
          item.name === current.name
            ? { ...current, amount: duplicat.amount - 1 }
            : item
        )
      );
    } else {
      cart.map(() =>
        setCart([...cart, { ...current, amount: current.amount - 1 }])
      );
    }
    setTotalCart(totalCart - current.price);
  };

  const removeTodosItems = () => {
    setCart([])
    setTotalCart('')
    setToggleCart(1)
  }

  const hideShow = () => {
    toggle === 0 ? setToggle(1) : setToggle(0)
  }

  const hideShowCart = () => {
    toggleCart === 0 ? setToggleCart(1) : setToggleCart(0)
  }

  return (
    <>
      <GlobalStyle />
      <Header  hideShowCart={hideShowCart} hideShow={hideShow}/>
      <div className="center">
      <Filter setSortItemsName={setSortItemsName} toggle={toggle} setFilterMin={setFilterMin} setFilterMax={setFilterMax} setFilterName={setFilterName}/>
      <Cart toggleCart={toggleCart} removeTodosItems={removeTodosItems} cart={cart} removeItem={removeItem} totalCart={totalCart} />
      <Main sortItemsName={sortItemsName} filterMin={filterMin} filterMax={filterMax} filterName={filterName} items={items} addItem={addItem} />
      </div>
    </>
  );
}

export default App;