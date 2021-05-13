import React from 'react';
import './Components.scss';
import Contact from './Contact';
import ContentSlider from './ContentSlider.js';
import GalleryGrid from './GalleryGrid';
import Testimonial from './Testimonial.js';
import Navbar from './Navbar.js'


function Home() {
   
    return (
        <div>
           <Navbar/>
           <ContentSlider/>
           <h2 className="todaySpecial">Today's Special</h2>
           <GalleryGrid/>
           <Testimonial/>
           <Contact/>
        </div>
    )
}

export default Home
