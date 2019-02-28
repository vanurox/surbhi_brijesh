import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Contact from './Contact';
import User from './User';
import AiseKaise from './AiseKaise';
import cookies from 'react-cookies';

class About extends Component {
    constructor(props){
        super(props);
       
    }
    logout = () => {
        cookies.remove('access_token');
        this.props.history.push('/');
    }

    openComponent = (componentName) => {
        if (componentName === "contact")
            this.props.history.push('/about/contact');
        else if(componentName === "user")
            this.props.history.push('/about/user');
    }
    componentDidMount(){
        if (cookies.load('access_token') === undefined) {
            this.props.history.push('/');
        }
    }

    render(){
        return (
            <div>You are logged in now.

                <button onClick={() => this.logout()}>Logout</button>
                <button onClick={() => this.openComponent('contact')}>Contact</button>
                <button onClick={() => this.openComponent('user')}>User</button>
                <Route path={this.props.match.url + '/contact'} component={Contact}/>
                <Route path={this.props.match.url + '/user'} component={User}/>
                <AiseKaise history={this.props.history} />
            </div>
        );
    }
}

export default About;