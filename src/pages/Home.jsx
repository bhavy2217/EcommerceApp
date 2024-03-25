import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Navbar />
            <div className='PosterDiv'>
                <img className='img1' src="https://static.wixstatic.com/media/e58821_3df31c472f534cbb9f7ed3c78d0bc446~mv2.jpg/v1/fill/w_526,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Custom%20Gold%20iPhone%2012%20Pro%20Max.jpg" alt="New york"  />                
                <img src="https://www.techoffside.com/wp-content/uploads/2022/04/iPhone-16-pro.jpg" alt="Los Angeles" />
                <img src="https://www.smartmobsolution.com/wp-content/uploads/2023/08/iPhone-15-Pro-Max-Colors.jpg" alt="New york" />
                <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg" alt="New york"  />
                <img src="https://ilenta.com/netcat_files/609/507/iphone16.jpg" alt="Chicago" />
            </div>
        </>
    )
}

export default Home



// https://www.amazon.in/minitv/tp/eb476a41-dd0e-4f9b-8f14-ea4f40ad5fe7