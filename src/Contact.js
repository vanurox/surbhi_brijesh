import React, { Component } from 'react';

class Contact extends Component {
 
    render(){
        return (
            <div>Contact me on cto.varun@gmail.com <br/>
                {
                    this.props.match.url
                }

            </div>
        );
    }
}

export default Contact;