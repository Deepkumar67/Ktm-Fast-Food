import React from 'react';
import './Components.scss';

function ContentSlider() {
    return (
        <div className="container-fluid">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="slide" src="./image/slide 1.jpg" alt="noImage"/>
                    </div>
                    <div className="carousel-item">
                       <img  className="slide" src="./image/slide 1.jpg" alt="noImage"/>
                    </div>
                    <div className="carousel-item">
                     <img  className="slide" src="./image/slide 1.jpg" alt="noImage"/>
                    </div>
                </div>
               
                </div>
        </div>
    )
}

export default ContentSlider
