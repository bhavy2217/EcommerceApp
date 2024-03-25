import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="topnav">
                <Link className="active" to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </>
    )
}

export default Navbar
