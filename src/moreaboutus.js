import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function MoreAboutUs (props) {
    console.log(props.children);
    return (
        <div id="moreaboutus">
            <Link id="titles-div" to="/">
                <div id="sharper-logo-div"><img className="about-scissors" src="/whitescissorsleft.png" /><h1 id="about-title">Sharper Image Salon</h1><img className="about-scissors" src="/whitescissors.png" /></div>
            </Link>
            <div id="moreabout">
                <div id="moreabout-text">
                    <p>Established in 2007 by Debra Walker Russell and April Jordan, our salon has over 10 years of commitment to its customers and their families.</p>
                    <p>When we opened the salon, our main goal was to establish a comfortable place where the whole family and people of all ages could feel comfortable.</p>
                    <p>We want our customers to leave happy with their hair.</p>
                </div>
            </div>
            <div id="moreabout-pics">
                <img className="debaprilpics" src="/april.jpg" />
                <div id="owners-text">
                    <h4>The owners come with many years of experience.</h4>
                    <p>Debbie has been in the beauty industry for almost 40 years. In the past, she has taught Cosmetology for 10 years as well as spent several years as a Hair Product Consultant for salons in the region. She has also worked as an Esthetician in Cincinnati.</p>
                    <p>April has been in the beauty industry for almost 20 years.</p>
                    <p>Both owners have taken extensive classes in coloring and cutting hair.</p>
                </div>
                <img className="debaprilpics" src="/deb.jpg" />
            </div>
        </div>
    )
}
