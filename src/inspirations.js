import React from 'react';
import axios from './axios';
import {Router, Route, Link, IndexRoute} from 'react-router';


export class Inspirations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="inspiration">
                <Link id="titles-div" to="/">
                    <div id="sharper-logo-div"><img className="about-scissors" src="/whitescissorsleft.png" /><h1 id="about-title">Sharper Image Salon</h1><img className="about-scissors" src="/whitescissors.png" /></div>
                </Link>
                <div id="inspiration-div">
                    <div id="insp-phrase">
                        <h3>We can help you find Inspiration!</h3>
                        <p>Looking for an idea? Come to us and get a free Consultation.</p>
                        <p>Or check out some of the Sites below!</p>
                    </div>
                </div>
            </div>
        )
    }
}
