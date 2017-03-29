import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import {AboutUs} from './aboutus';
import {NewCustomer} from './newcustomer';
import {LocationContact} from './locationcontact';
import {Services} from './services';
import {ThankYou} from './thankyou';
import {Inspirations} from './inspirations';
import {MoreAboutUs} from './moreaboutus';

export function Welcome(props) {
    console.log(props.children);
    return (
        <div id="welcome-div">
            <div id="link-section">
                <Link className="salon-links" to="/moreaboutus">About Us</Link>
                <Link className="salon-links" to="/services">Services</Link>
                <Link className="salon-links" to="/inspirations">Inspirations</Link>
                <Link className="salon-links" to="/newcustomer">New Customer Inquiry</Link>
                <Link className="salon-links" to="/locationcontact">Contact Us</Link>
                <Link className="salon-links" to="/locationcontact">Location</Link>
            </div>
            {props.children}
        </div>
    )
}
