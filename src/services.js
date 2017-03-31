import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function Services (props) {
    console.log(props.children);
    return (
        <div id="services">
            <Link id="titles-div" to="/">
                <div id="sharper-logo-div"><img className="about-scissors" src="/images/whitescissorsleft.gif" /><h1 id="about-title">Sharper Image Salon</h1><img className="about-scissors" src="/images/whitescissors.gif" /></div>
            </Link>
            <div id="services-menu">
                <Link className="service-type-link" to="/services/hair">Hair</Link>
                <Link className="service-type-link" to="/services/body">Body</Link>
                <Link className="service-type-link" to="/services/nails">Nails</Link>
                <Link className="service-type-link" to="/services/products">Products</Link>
                <Link className="service-type-link" to="/services/specialoccasion">Special Occasions</Link>
            </div>
            <div id="services-list">
                {props.children}
            </div>
        </div>
    )
}
