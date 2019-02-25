import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Contact from './Contact';
import AiseKaise from './AiseKaise';
import cookies from 'react-cookies';

class About extends Component {
    constructor(props){
        super(props);
        if(cookies.load('access_token') === undefined){
            this.props.history.push('/');
        }
    }
    logout = () => {
        cookies.remove('access_token');
        this.props.history.push('/');
    }

    openContact = () => {
        this.props.history.push('/about/contact');
    }

    render(){
        return (
            <div>You are logged in now.

                <button onClick={() => this.logout()}>Logout</button>
                <button onClick={() => this.openContact()}>Contact</button>
                <Route path={this.props.match.url + '/contact'} component={Contact}/>
                <AiseKaise history={this.props.history} />
            </div>
        );
    }
}

export default About;