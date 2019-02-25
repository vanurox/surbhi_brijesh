import React, { Component } from 'react';

class AiseKaise extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.history);
        // this.props.history.push("/");
    }
    render(){
        return (
            <div>Aise kaise chalega ?</div>
        );
    }
}

export default AiseKaise;