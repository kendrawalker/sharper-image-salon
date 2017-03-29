import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

export function Products (props) {
    console.log(props.children);
    return (
        <div id="specific-services-menu">
            <h2>PRODUCTS</h2>
            <h5>Let us know if you do not see what you are looking for! We can order it!</h5>
            <ul><h3>Equipment</h3>
                <li>Styling Wands</li>
                <li>Straighteners</li>
            </ul>
            <ul><h3>Shampoos, Conditioners, Sprays, Gels</h3>
                <li><a href="http://www.redken.com/">RedKen</a></li>
                <li><a href="https://www.matrix.com/">Matrix</a></li>
                <li><a href="https://www.paulmitchell.com/">Paul Mitchell</a></li>
                <li><a href="https://www.matrix.com/biolage">Biolage</a></li>
                <li><a href="https://www.wella.com/professional/countryselector">Wella</a></li>
                <li><a href="http://www.schwarzkopf.com/skus/en/home.html">Schwartzkopf</a></li>
                <li><a href="http://www.rusk1.com/">Rusk</a></li>
                <li><a href="http://www.kenraprofessional.com/#sm.0004zeajxvtxe5e11qb1z98haifb9">Kenra</a></li>
            </ul>
        </div>
    )
}
