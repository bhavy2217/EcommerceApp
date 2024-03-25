import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { Link } from 'react-router-dom'
import { removeCart, emptyCart } from '../Redux/Action/CartAction';


function Cart() {
  const [showAlert, setShowAlert] = useState(false);
  const cart = useSelector((state) => state.CartReducer.cart);

  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    const filterData = cart.filter((item) => item.id !== id)
    console.log(filterData);
    dispatch(removeCart(filterData))
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }
  const handleEmptyCart = () => {
    dispatch(emptyCart([]))
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <>
      <Navbar />

      {/* {cart.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
        </div>
      ))} */}
      <div style={{ marginTop: "10px", display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/products" style={{ marginLeft: "10px" }}>
          <button type="button" className="btn btn-outline-primary">Previous</button>
        </Link>
        <button onClick={handleEmptyCart} type="button" style={{ marginRight: '10px' }} className="btn btn-outline-danger">Empty Cart</button>
      </div>
      <hr />
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', }}>
        {cart.map((p) => (
          <div key={p.id} id="Cartcard" style={{ width: '300px', padding: '10px', marginBottom: '20px' }}>
            <img src={p.thumbnail} alt="" style={{ width: '250px', aspectRatio: '3/2' }} />
            <h5 >{p.title}</h5>
            <span>Brand : {p.brand}</span><br />
            <span>Price : {p.price}$</span> <br />
            <span>Rating : {p.rating}/5</span><br />
            <span>Discount : {p.discountPercentage}% </span>
            {/* <Link to={`/posts/${p.id}`}>See Details</Link><br /> */}
            <button onClick={() => handleRemoveItem(p.id)} type="button" className="btn btn-outline-danger">Remove</button>
          </div>
        ))}
      </div>
      {showAlert && (
        <div className="alert alert-danger alert-dismissible fade show" style={{ position: "fixed", width: "100%", top: "0px" }} role="alert">
          Product Removed from <strong>Cart</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  )
}
export default Cart;

// {Cart.map(e)=>(

// ))}