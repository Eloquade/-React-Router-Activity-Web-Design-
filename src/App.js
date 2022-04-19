import React, {} from 'react';
// import logo from './logo.svg';
import './App.css';
// import wallpaper from './wallpaper.jpg';
import {Home, About, Events, Contact, Page404} from './pages';
import {Routes, Route} from 'react-router-dom';

// https://api.github.com/users/mojombo

// API Key (v3 auth)
// f2297b552195e5da39e4bc85cc39385a

// https://api.themoviedb.org/3/movie/550?api_key=f2297b552195e5da39e4bc85cc39385a
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjI5N2I1NTIxOTVlNWRhMzllNGJjODVjYzM5Mzg1YSIsInN1YiI6IjYyNTk1MjE4ZDIzNmU2MDA2NmFjZWI2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DqO3516QzXL0vKcFvHrKHfxgGP86c0TQZE5QEkG-GNk
function App() {

  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/*' element={<Page404 />} />
          
      </Routes>
    </div> 
    

  );
}

export default App;
