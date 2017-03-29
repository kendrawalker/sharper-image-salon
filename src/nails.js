import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function Nails (props) {
    console.log(props.children);
    return (
        <div id="specific-services-menu">
            <h2>NAIL SERVICES</h2>
            <ul><h3>Hands</h3>
                <li>Manicure</li>
                <li>Polish Change</li>
                <li>Shellac Manicure</li>
                <li>Shellac Removal</li>
                <li>French Tips</li>
            </ul>
            <ul><h3>Feet</h3>
                <li>Pedicure</li>
                <li>Shellac Pedicure</li>
            </ul>
        </div>
    )
}
