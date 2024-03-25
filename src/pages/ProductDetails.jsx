import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import StarRating from '../components/StarRating';
import axios from 'axios';
import '../App.css'

function ProductDetails() {
  const [detail, setdetail] = useState({})
  const param = useParams();
  // console.log(param.id, 'param.id');

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${param.id}`)
    // console.log(response.data , 'response.data');
    setdetail(response.data)
  }
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '10px' }}>
        <span style={{ marginLeft: '10px' }}>
          <Link to="/products">
            <button type='button' style={{padding : '5px 15px'}} className="btn btn-outline-primary">
            <span style={{fontSize:'20px'}}>&larr; </span><span>Previous</span>
            </button>
          </Link>
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: '20px' }}>
          <div style={{ display: 'inline-block' }}>
            <img src={detail.thumbnail} alt="image" style={{ width: '100%', boxShadow: ' 0px 0px 5px 1px rgb(153, 153, 153)' }} />
          </div>
          <div style={{ display: 'inline-block', width: '400px' }}>
            <p></p>
            <h3 style={{}}>{detail.title}</h3>
            <p style={{ marginTop: "0px", marginBottom: '0px' }}>About : {detail.description}</p><br />
            <h5>Rating : {detail.rating}/5</h5> 
            <br />
            <h3 style={{ border: '1px solid rgb(220, 220, 220)', width: '300px', margin: '0px', padding: '10px' }}>Specifications</h3>
            <table>
              <tr>
                <td>Name</td>
                <td>: {detail.title}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>: {detail.discountPercentage}%</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>: {detail.category}</td>
              </tr>
              <tr>
                <td>brand</td>
                <td>: {detail.brand}</td>
              </tr>
            </table>
            {/* <span>Price : {detail.price}</span>
                        <span>Discount : {detail.discountPercentage}% </span>
                        <span>{detail.brand}</span>
                        <span>{detail.category}</span> */}
          </div>
        </div>
        <hr style={{ boxShadow: '0px 0px 5px 1px gray' }} />
        <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
          {detail.images?.map((item) => (
            <div>
              <img src={item} alt="" width={300} height={200} style={{}} />
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default ProductDetails
