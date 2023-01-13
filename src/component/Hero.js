import "./Heroimg.css"
import React from 'react'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="content">
            <p>HI,I'M RAJAHASSAN</p>
            <h1>WEB DEVELOPER</h1>
        <div>
        <Link className="btn" to="/projects">Projects</Link>
        <Link className="btn-light" to="/contact">contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Hero