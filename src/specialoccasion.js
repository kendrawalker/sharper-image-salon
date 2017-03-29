import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function SpecialOccasion (props) {
    console.log(props.children);
    return (
        <div id="specific-services-menu">
            <h2>SPECIAL OCCASIONS SERVICES</h2>
            <h5>Brides! You pay for the Trial and your hairstyle is FREE on your Wedding Day!</h5>
            <ul><h3>Bridal</h3>
                <li>Bridal Hair</li>
                <li>Makeup Services</li>
                <li>Trial Hair Style for the Bride</li>
                <li>Free Mimosas for the Bridal Party</li>
            </ul>
            <ul><h3>Other</h3>
                <li>Prom Hair</li>
            </ul>
        </div>
    )
}
