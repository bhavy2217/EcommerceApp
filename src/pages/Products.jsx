import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { addCart } from '../Redux/Action/CartAction'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import '../App.css'

function Product() {
  const [product, setproduct] = useState([])
  const [search, setsearch] = useState("")
  const [limit, setlimit] = useState(20)
  const [showAlert, setShowAlert] = useState(false);


  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts();
  }, [search, limit])

  const getAllProducts = async () => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${search}&limit=${limit}`)
    // console.log(response.data.products);
    setproduct(response.data.products);
    // console.log(search, 'search');
  }
  const cart = useSelector((state) => state.CartReducer.cart);
  console.log(cart, 'cart');

  const handleAddToCart = (data) => {
    console.log(data, 'data');
    dispatch(addCart([...cart, data]));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="topnav">
        <Link className="active" to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <div className="search-container">
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
            {/* <span style={{ backgroundColor: 'white', padding: '10px ' }}>Products Limit</span> */}
            <select value={limit} onChange={(e) => setlimit(e.target.value)} style={{ height: '39px' }}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={60}>60</option>
            </select>
          </div>
          <div style={{ display: 'inline-block' }}>
            <input
              placeholder='Search here...'
              value={search}
              type='text'
              onChange={(e) => setsearch(e.target.value)}
            />
            <button type="submit"><i className="fa fa-search"></i></button>
          </div>
          <button type='button' id='navCartBtn' style={{}}><Link style={{ padding: '0px' }} to="/cart">Cart</Link></button>
        </div>
      </div>

      {/* <div className='container-fluid' style={{}}> */}
      <div className='' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: ' space-evenly', flexDirection: 'row' }}>
        {product.map((o) => (
          <div key={o.id} className="card" id="card" style={{ position: 'relative', width: '300px', padding: '20px', marginBottom: '10px', marginTop: '10px' }}>
                       <Link to={`/products/${o.id}`}><img src={o.thumbnail} id="card-image" alt="" style={{ width: '100%', aspectRatio: '3/2' }} /></Link>
            {/* <hr style={{ marginTop: '0px', marginBottom: '0px' }} /> */}
            <div style={{}}>
              <h4 style={{ height: '30px', margin: '0px', overflow: 'hidden' }}>{o.title}</h4>
              <span>Brand : {o.brand}</span><br />
              <span>Price : {o.price}$</span> <br />
              <span>Rating : {o.rating}/5</span><br />
              <span>Discount : {o.discountPercentage}% </span>
              <span style={{ float: 'right', position: 'absolute', bottom: '17px', right: '9px' }}><button id='cartImg' style={{ }} onClick={() => handleAddToCart(o)}><img src='https://cdn-icons-png.flaticon.com/512/5163/5163690.png' style={{width:'30px'}} alt=''></img></button></span>
              {/* <span>{e.category}</span><br /> */}
              {/* <p style={{ marginTop: "0px", marginBottom: '0px' }}>{e.description}</p> */}
              {/* <Rating initialValue={e.rating} readOnly style={{}} /> */}
            </div>
            {/* <Link to={`/products/${o.id}`}><div id='viewDetails' style={{ padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              View More
            </div></Link> */}
          </div>
        ))}
      </div>
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" style={{ position: "fixed", width: "100%", top: "0px" }} role="alert">
          Product Added to <strong>Cart</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {/* </div> */}
    </>
  )
}

export default Product
