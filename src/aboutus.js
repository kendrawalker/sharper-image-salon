import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function AboutUs (props) {
    console.log(props.children);
    return (
        <div id="aboutus">
            <div id="aboutus-div">
                <div id="about-titles-div">
                    <div id="sharper-logo-div"><img className="about-scissors" src="/whitescissorsleft.png" /><h1 id="about-title">Sharper Image Salon</h1><img className="about-scissors" src="/whitescissors.png" /></div>
                    <div id="about-subtitle">Look Your Best with Our HairCuts and Colors for All Ages</div>
                </div>
            </div>
            <div id="about-about-div">
                <h3>As a full service salon, Sharper Image Salon prides itself in customer satisfaction for the whole family.</h3>
                <h3>With services ranging from Hair Maintenance to Massage to Laser Hair Removal, we are here for your beauty needs.</h3>
            </div>
            <div id="olderwoman">
                <h2>We CARE about YOUR HAIR</h2>
                <h4>"Remember, It is not the Box or the Bottle that does the Work, It is the Hands and the Mind using the Color that is Key"-Rick Wellman</h4>
            </div>
            <div id="about-about-div">
            </div>
            <div id="family">
                <img className="about-pic" id="family-pic" src="/family.jpg" />
                <img className="about-pic" id="phrase-pic" src="/perfecthairphrase.jpg" />
            </div>
        </div>
    )
}
