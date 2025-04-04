import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/products';
import CartSummary from './components/cartSummary';
import CartItems from './components/cartItems';

const products = [{ id: 1, name: "Laptop", price: 500 , color: "bg-yellow-50", quantity:0},
  { id: 2, name: "Smartphone", price: 300, color: "bg-red-50" , quantity:0},
  { id: 3, name: "Headphones", price: 100 , color:"bg-green-50",  quantity:0},
  { id: 4, name: "Smartwatch", price: 150 , color:"bg-cyan-50",  quantity:0},]

function App() {
  const [productsList , setProductsList] = useState([...products ])

  const [cartItems, setItems] = useState([])

  const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
  const THRESHOLD = 1000;


  const increament = (id) => {
      setProductsList(productsList.map(each => id===each.id ? {...each, quantity:each.quantity+1}: each))      
  }

  
  let total = 0
  cartItems && cartItems.map((each) =>  total += each.id !== 99 && each?.quantity*each?.price)
  if(total >= THRESHOLD){
    const findFreeItem = cartItems.find(each => each.id === 99)
    if(!findFreeItem ){
      cartItems.push(FREE_GIFT)
    }
  }else{
    const findFreeItem = cartItems.findIndex((each) => each.id === 99)
    console.log(findFreeItem)
    if(findFreeItem !== -1 && total < THRESHOLD){
      console.log("VIkas")
      cartItems.splice(findFreeItem, 1)
    }
  }

  const decreament = (id) => {
    const quantityCheck = productsList.find(each => each.id === id)
    const {quantity} = quantityCheck
    if(quantity > 0){
      setProductsList(productsList.map(each => id===each.id ? {...each, quantity:each.quantity-1}: each))      
    }
    else{
      return alert("You can add minimum 1 item else 0")
    }
  }  

  const addItem = id => {
    const quantityCheck = productsList.find(each => each.id === id)
    const {quantity} = quantityCheck
    if(quantity === 0){
      return alert("Qunatity Should Be More then 0")
    }else{
      let existing = cartItems && cartItems.find(each => each.id === id)
      if(existing){
        setItems(cartItems.map(each=> id===each.id ? {...each, quantity:each.quantity+1}: each))
      }else{
      setItems([...cartItems, quantityCheck])}
    }
    setProductsList([...products])
  }

  const deleteItemfromCart = id => {
    setItems(cartItems.filter(each => id !== each.id))
  }

  const increamentCart = (id) => {
    setItems(cartItems.map(each=> id===each.id ? {...each, quantity:each.quantity+1}: each))
  }

  const decreamentCart = (id) => {
    let existing = cartItems && cartItems.find(each => each.id === id)
    if(existing.quantity === 1){
      return alert("Quantity in Cart Must be greater then 1. You can remove this Item By Clicking Trash button")
    }
    setItems(cartItems.map(each=> id===each.id ? {...each, quantity:each.quantity-1}: each))
  }
  return (
    <div className='h-screen w-screen p-10 bg-gray-50 '>
      <h2 className='font-extrabold text-center text-xl'>Shopping Cart</h2>
      <div id="producst">
        <h2 className='font-bold'>Products</h2>
        <Products productsList={productsList} increament={increament} decreament={decreament} addItem={addItem}/>      
      </div>
      <hr className='w-full my-5 rounded-full bg-gray-500 border-3 h-1.5'/>
      <div id="cartSummary">
      <h2 className='font-bold'>Cart Summary</h2>
        <CartSummary cartItems={cartItems}/>        
      </div>
      <hr className='w-full my-5 rounded-full bg-gray-500 border-3 h-1.5'/>
      <div id="cartItems">
        <h2 className='font-bold'>Cart Item</h2>
        <CartItems cartItems={cartItems} increamentCart={increamentCart} decreamentCart={decreamentCart} deleteItemfromCart={deleteItemfromCart}/>
      </div>
    </ div>
  )
}

export default App
