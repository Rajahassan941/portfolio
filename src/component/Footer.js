import "./Footer.css"
import { FaInstagram, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
               
                <div className="location">
                  <FaHome size={20} style={{ color:
                   "#fff", marginRight: "2rem"}}/>
                   
                   <div>
                   <p>nilambur</p> 
                    
                    <p>malappuram</p> 
                     </div> 
                   
                   
                </div>
                <div className="phone">
                <h4>   <FaPhone  size={20} style={{ color:
                   "#fff", marginRight: "2rem"}}/>
                   +918111878545
                   </h4> 
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk  size={20} style={{ color:
                   "#fff", marginRight: "2rem"}}/>
                   rajahhassan88@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About</h4>
                <p>typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                <div className="social">
                    <FaInstagram size={30} style={{ color:
                   "#fff", marginRight: "1rem"}}/>
                   <FaGithub size={30} style={{ color:
                   "#fff", marginRight: "1rem"}}/>
                   <FaLinkedin size={30} style={{ color:
                   "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer