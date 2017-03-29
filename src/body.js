import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function Body (props) {
    console.log(props.children);
    return (
        <div id="specific-services-menu">
            <h2>BODY SERVICES</h2>
            <ul><h3>Maintenance</h3>
                <li>Waxing</li>
                <li>Piercing</li>
            </ul>
            <ul><h3>Wellness</h3>
                <li>Massage</li>
                <li>Facials</li>
                <li>Reflexology</li>
                <li>Detox</li>
                <li>Wraps</li>
            </ul>
        </div>
    )
}
