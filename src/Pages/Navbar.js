import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand">KTM<span>  Fast Food</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
