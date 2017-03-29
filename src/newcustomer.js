import React from 'react';
import axios from './axios';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

export class NewCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            phone: "",
            email: "",
            note: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(e) {
        axios({
            method: 'post',
            url: '/newcustomeremail',
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender,
                phoneNumber: this.state.phone,
                email: this.state.email,
                note: this.state.note,
            }
        }).then((res) => {
            if(res.data.success) {
                alert("You're information was submitted");
                this.setState({
                    firstName: "",
                    lastName: "",
                    gender: "",
                    phone: "",
                    email: "",
                    note: "",
                });
            } else {
                alert("There is something wrong with the data. Please try again.");
                this.setState({
                    success: false
                })
            }
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div id="new-customer">
                <Link id="titles-div" to="/">
                    <div id="sharper-logo-div"><img className="about-scissors" src="/whitescissorsleft.png" /><h1 id="about-title">Sharper Image Salon</h1><img className="about-scissors" src="/whitescissors.png" /></div>
                </Link>
                <div id="new-customer-form">
                    <div id="submit-data">
                        <div className="textbox-div" id="first" >
                            <input type="text" className="text-input" id="text-input-first" name="firstName" onChange={this.handleChange} value={this.state.firstName} /><p>First Name</p>
                        </div>
                        <div className="textbox-div" id="last">
                            <input type="text" className="text-input" id="text-input-last" name="lastName" onChange={this.handleChange} value={this.state.lastName} /><p>Last Name</p>
                        </div>
                        <div className="textbox-div" id="gender">
                            <input type="text" className="text-input" id="text-input-gender" name="gender" onChange={this.handleChange} value={this.state.gender} /><p>Gender</p>
                        </div>
                        <div className="textbox-div" id="phonenum">
                            <input type="text" className="text-input" id="text-input-phone" name="phone" onChange={this.handleChange} value={this.state.phone}  /><p>Phone</p>
                        </div>
                        <div className="textbox-div" id="email">
                            <input type="text" className="text-input" id="text-input-email" name="email" onChange={this.handleChange} value={this.state.email} /><p>Email Address</p>
                        </div>
                        <div className="textbox-div" id="note">
                            <textarea type="text" className="text-input" id="text-input-note" name="note" onChange={this.handleChange} value={this.state.note} ></textarea><p>Comments-What Services Are You Interested In?</p>
                        </div>
                        <button onClick={(e) => this.handleClick(e)} type="submit" id="submit-button" >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
