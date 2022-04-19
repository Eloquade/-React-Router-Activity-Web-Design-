import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import picture from './picture1.jpg';
import picture2 from './picture2.jpg';

// import './styles.css';


export function Home () {
    return (
        <div>
             <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function About () {
    return (
        <div>
            <nav>
                <Link to="../about">About</Link>
                <Link to="../events">Events</Link>
                <Link to="../contact">Contact</Link>
            </nav>
            
            <body className="body-about">
                <div className="about-us">
                <div className="title">
                    <h1>About </h1>
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
                    <img src={picture} />
                    </div>
                </div>
              

                </div>
                </body>  
         </div>
    )
}

export function Events () {
    return (
        <div>
            <h1>[lawrenec]</h1>
        </div>
    )
}

export function Contact () {
    return (

        <div>   
           
            <html lang="en"/>
            <head/>
                <meta charset="UTF-8"/>
                <title>Simple Contact Us form</title>
                <link rel="stylesheet" href="styles.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"/>
            <style>
                
            </style>
            <body src={picture2}>
                

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