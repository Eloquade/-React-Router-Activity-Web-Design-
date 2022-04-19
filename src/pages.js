import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import location from './location.jpg';
import logo from './logo.jpg';


import './styles.css';




export function Home () {
    
    return (
        <div>
            
            <div className="topnav">
                        <nav className="navbar"> 
                            
                               
                                    <Link to="/about" className="active">About</Link>
                                   <Link to="/events" className="active">Events</Link>
                                    <Link to="/contact" className="active">Contact</Link>
                                    
                                
                        </nav>    
                        
                </div>
            <body>
                <nav className="navMenu">
                <h1>COMMING SOON!</h1>
                
                <div className="dot"></div>
                </nav>
            </body>
            
            
            
           

           
                
                
        </div>
    )
}

export function About () {
    return (
        <div>
                
                
                <div className="topnav">
                        <nav className="navbar"> 
                            
                               
                                    <Link to="../about" className="active">About</Link>
                                   <Link to="../events" className="active">Events</Link>
                                    <Link to="../contact" className="active">Contact</Link>
                                    
                                
                        </nav>    
                        
                </div>
                
           
                

            
            <body className="body-about"/>
                <div className="about-us">
                <div className="title">
                    <h1>About </h1>
                </div>
                <div className="form">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br></br>
                    <img src={location} />
                    </div>
                </div>
              

        </div>
                  
        
    )
}

export function Events () {
    return (
        <div>
            
            <div className="topnav">
                        <nav className="navbar"> 
                            
                               
                                    <Link to="../about" className="active">About</Link>
                                   <Link to="../events" className="active">Events</Link>
                                    <Link to="../contact" className="active">Contact</Link>
                                    
                                
                        </nav>    
                        
                </div>

            <html lang="en"/>
            <head/>
                <meta charset="UTF-8"/>
                
                
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"/>

            <body className="body-contact">
            <nav>
                <Link to="../about">About</Link>
                <Link to="../events">Events</Link>
                <Link to="../contact">Contact</Link>
            </nav>    
            
            <div className="about-us">
            <img src={logo} class="image1"/>
            <div className="title">
                <h1>Event Form</h1>
    
            </div>
            <div className="form">
                
                <div className="form-items">
                <input type="text" className="input" placeholder="Full name"/>
                
                <i className="fas fa-user"></i>
                </div>
                <div className="form-items">
                <input type="text" className="input" placeholder="Email"/>
                <i className="fas fa-envelope"></i>
                </div>
                <div className="form-items">
                <input type="text" className="input" placeholder="Address"/>
                <i className="fa-solid fa-house"></i> 
                </div>
                
            </div>
            
            <div className="btn">
                Submit
                <i className="fas fa-arrow-right"></i>
            </div>
            
            
            <div className="social-icons">
                <div className="facebook">
                <i className="fab fa-facebook-f"></i>
                </div>
                <div className="twitter">
                <i className="fab fa-twitter"></i>
                </div>
                <div className="google">
                <i className="fab fa-google-plus-g"></i>
                </div>
            </div>
            
            </div>
           

            </body>
        </div>
    )
}

export function Contact () {
    return (

        <div>   
            
            <div className="topnav">
                        <nav className="navbar"> 
                            
                               
                                    <Link to="../about" className="active">About</Link>
                                   <Link to="../events" className="active">Events</Link>
                                    <Link to="../contact" className="active">Contact</Link>
                                    
                                
                        </nav>    
                        
                </div>
           
            <html lang="en"/>
            <head/>
                <meta charset="UTF-8"/>
                <title>Simple Contact Us form</title>
                
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"/>
            <style>
                
            </style>
            <body className="body-contact">
                

            <div className="contact-us">
            <div className="title">
                <h1>Contact us</h1>
    
            </div>
            <div className="form">
                <div className="form-items">
                <input type="text" className="input" placeholder="Username"/>
                <i className="fas fa-user"></i>
                </div>
                <div className="form-items">
                <input type="text" className="input" placeholder="Email"/>
                <i className="fas fa-envelope"></i>
                </div>
                <div className="form-items">
                <textarea className="input message" cols="30" rows="10" placeholder="Message....."></textarea>
                </div>
            </div>
            
            <div className="btn">
                Submit
                <i className="fas fa-arrow-right"></i>
            </div>
            
            
            <div className="social-icons">
                <div className="facebook">
                <i className="fab fa-facebook-f"></i>
                </div>
                <div className="twitter">
                <i className="fab fa-twitter"></i>
                </div>
                <div className="google">
                <i className="fab fa-google-plus-g"></i>
                </div>
            </div>
            
            </div>
           

            </body>
            
        </div>
                  
        
    )
}

export function Page404 () {
    let location = useLocation();
    console.log(location);

    return(
        <div>
        <h1>Error PAGE 404 {location.pathname}</h1>
        </div>
    )
}