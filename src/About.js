import React, { Component } from 'react';
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
    render(){
        return (
            <div>You are logged in now.

                <button onClick={() => this.logout()}>Logout</button>
            </div>
        );
    }
}

export default About;