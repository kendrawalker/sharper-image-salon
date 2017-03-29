import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function LocationContact (props) {
    console.log(props.children);
    return (
        <div id="contact">
            <Link id="titles-div" to="/">
                <div id="sharper-logo-div"><img className="about-scissors" src="/whitescissorsleft.png" /><h1 id="about-title">Sharper Image Salon</h1><img className="about-scissors" src="/whitescissors.png" /></div>
            </Link>
            <div id="contactus-menu">
                <div id="contact-loc">
                    <div id="phone">
                        <h2>Contact Us Today!</h2>
                        <a href="tel:18129343000"><h3>(812)934-3000</h3></a>
                    </div>
                    <div id="address">
                        <h2>Find Us Here:</h2>
                        <h3>209 S. Main Street, Batesville, IN 47006</h3>
                        <a href="https://goo.gl/maps/xehxumSJFKH2">
                            <img id="location-map" src="/images/sharperimage-maplocation.jpg"/>
                        </a>
                    </div>
                </div>
            </div>
            <div id="quote-bar"></div>
            <div id="salon-div">
                <img className="salon-outside" src="/salon_sideangle.jpg" />
                <img className="salon-outside" src="/porch.jpg" />
                <img className="salon-outside" src="/sharper_image_sign.jpg" />
                <img className="salon-outside" src="/salon_front.jpg" />
            </div>
            <div id="quote-bar"></div>
        </div>
    )
}
