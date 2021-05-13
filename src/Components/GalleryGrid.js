import {React} from 'react';
import Gallery from './Gallery.js';


function GalleryGrid() {
    return (
            <div className="container">
        
                 <div className="gridimage">
                    <Gallery img="momo" name="Momo" price="Rs200"/>
                    <Gallery img="Bugee" name="Burger" price="Rs150"/>
                    <Gallery img="burger" name="Sussage" price="Rs50/piece"/>
                </div>
            
                <div className="gridimage">
                    <Gallery img="pizza" name="Pizza" price="Rs300"/>
                    <Gallery img="thakali" name="Thakali" price="Rs450"/>
                    <Gallery img="chicken" name="Chicken Chilly" price="Rs350"/>
                </div>
                
            </div>
    )
}




export default GalleryGrid
