import React, {} from 'react';
// import logo from './logo.svg';
import './App.css';
// import wallpaper from './wallpaper.jpg';
import {Home, About, Events, Contact, Page404} from './pages';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/About' element={<About />} />
            <Route path='About' element={<About />} />
        

          <Route path='/Events' element={<Events />} />
            <Route path='/Events' element={<Events />} />
          
            

          <Route path='/Contact' element={<Contact />} />

          <Route path='/*' element={<Page404 />} />

          
      </Routes>
    </div> 
    

  );
}

export default App;
