import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function Hair (props) {
    console.log(props.children);
    return (
        <div id="specific-services-menu">
            <h2>HAIR SERVICES</h2>
            <ul><h3>Coloring</h3>
                <li>Full Head Coloring</li>
                <li>Bleach and Tone</li>
                <li>Highlights</li>
                <li>Partial Highlights</li>
                <li>Ombre</li>
                <li>Balayage</li>
                <li>Foil</li>
                <li>Partial Foil</li>
                <li>Color Correction</li>
                <li>Mens Grey Blending</li>
            </ul>
            <ul><h3>Design and Styling</h3>
                <li>Cut and Style</li>
                <li>Blowdry and Style</li>
                <li>Hair Extensions</li>
                <li>Bridal Hair</li>
                <li>Feather Extensions</li>
            </ul>
            <ul><h3>Retexturing</h3>
                <li>Permanent Wave</li>
                <li>Straightening</li>
                <li>Smoothing Treatment</li>
            </ul>
        </div>
    )
}
