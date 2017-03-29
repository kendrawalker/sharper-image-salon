import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import * as io from 'socket.io-client';
import {Welcome} from './welcome';
import {AboutUs} from './aboutus';
import {NewCustomer} from './newcustomer';
import {LocationContact} from './locationcontact';
import {Services} from './services';
import {Hair} from './hair';
import {Nails} from './nails';
import {Body} from './body';
import {SpecialOccasion} from './specialoccasion';
import {Products} from './products';
import {Inspirations} from './inspirations';
import {MoreAboutUs} from './moreaboutus';
var pinterest=document.getElementById('pinterest');

window.addEventListener('hashchange', function() {
    console.log(location.hash);
    if(location.hash == '#/inspirations') {
        console.log(pinterest);
        document.getElementById('pinterest').style.display="flex";
    } else {
        document.getElementById('pinterest').style.display="none";
    }
});


let router;
if (location.pathname == '/welcome') {
    // const socket = io.connect();
    // socket.on('connect', function() {
    //     axios.get('/present/' + socket.id);
    // });
    router = (
        <Router history={hashHistory}>
            <Route path="/" component={Welcome}>
                <IndexRoute component={AboutUs} />
                <Route path="/moreaboutus" component={MoreAboutUs} />
                <Route path="/services" component={Services}>
                    <IndexRoute component={Hair}/>
                    <Route path="/services/hair" component={Hair}/>
                    <Route path="/services/nails" component={Nails}/>
                    <Route path="/services/body" component={Body}/>
                    <Route path="/services/specialoccasion" component={SpecialOccasion}/>
                    <Route path="/services/products" component={Products} />
                </Route>
                <Route path="/inspirations" component={Inspirations} />
                <Route path="/newcustomer" component={NewCustomer} />
                <Route path="/locationcontact" component={LocationContact} />
            </Route>
        </Router>
    )
} else {
 console.log("hello");
}

alert(location.pathname);

ReactDOM.render(
    router,
    document.querySelector('main')
);
