import React from 'react'
import Mytbale from './Table'
import "./table.css"
function TableContainer() {
    let  products = [
      { title: "Wireless Headphones", price: 120.99, rating: 4.5 },
      { title: "Smartphone", price: 899.99, rating: 4.7 },
      { title: "Laptop", price: 1299.49, rating: 4.6 },
      { title: "Smartwatch", price: 199.99, rating: 4.3 },
      { title: "Bluetooth Speaker", price: 59.99, rating: 4.4 },
      { title: "Gaming Mouse", price: 49.99, rating: 4.2 },
      { title: "Keyboard", price: 79.99, rating: 4.1 },
      { title: "4K Monitor", price: 349.99, rating: 4.6 },
      { title: "Portable Charger", price: 29.99, rating: 4.8 },
      { title: "Tablet", price: 399.99, rating: 4.5 },
    ];
    
  return (
    <div className='container' >
        <div>TableContainer</div>
        <Mytbale  products={ products}/>
    </div>
  )
}

export default TableContainer