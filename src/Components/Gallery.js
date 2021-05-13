import React from 'react';
import {useDisptachCart} from './Cart.js';



const Gallery = ({ img, name, price }) => {
    const dispatch = useDisptachCart();
    const  addToCart = (item) => {
        dispatch({ type:"ADD" , item });    
    };
    
    let image = `./image/${img}.jpg`
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card">
                        <img className="card-galleryImage" src={image} alt="noImage" />
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-text">{price}</h6>
                                <button className="btn btn" onClick={()=>addToCart(name)} >Add to cart</button>
                            </center>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Gallery
