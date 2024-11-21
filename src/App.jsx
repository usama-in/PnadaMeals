import Cart from "./components/cart/Cart"
import Header from "./components/layout/Header"
import Meals from "./components/meals/Meals"
import React ,{ useState } from "react"
import CartProvider from "./store/CartProvider"


function App() {
  const [showCart , setShowCart]=useState(false)

  
  const handleShowCart=()=>{
    setShowCart(true)
   }
   const handleHideCart=()=>{
    setShowCart(false)
   }

  return (
    <CartProvider>
      {showCart && <Cart   onCloseCart={handleHideCart}/>}
     <Header onShowCart={handleShowCart}/>
     
     
     <Meals />
     
    </CartProvider>
  )
}

export default App
