import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
    var settings = {
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
      };

    return (
        <div>
             <div className="container mt-5">
                <h4 className="mt-4 text-center testimonial">Testimonials</h4>

                <Slider {...settings} className="mt-4">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                    <div className="fa fa-quote-left" style={{color:"red"}}></div>
                                    <p> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                    <div className="fa fa-quote-right float-right"style={{color:"red"}}></div>
                                    <footer className="blockquote-footer text-center" style={{fontWeight:"bold"}}>Deep Kumar Maharjan</footer>
                                    </blockquote>
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                    <div className="fa fa-quote-left" style={{color:"red"}}></div>
                                    <p> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                    <div className="fa fa-quote-right float-right"style={{color:"red"}}></div>
                                    <footer className="blockquote-footer text-center" style={{fontWeight:"bold"}}>Maharjan deep</footer>
                                    </blockquote>
                                </div>
                            
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial
