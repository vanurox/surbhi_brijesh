import React, { Component } from 'react';

class User extends Component {
    
    constructor(){
        super();
        this.state = {
            users: []
        };
    }
    componentWillMount(){

    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=50")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            this.setState({
                users: res.results
            });
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return (
            <div>User me on cto.varun@gmail.com <br/>
                <ul>
                    {
                        this.state.users.map((v,i)=>{
                            return (
                                <li key={i}>
                                    {
                                        v.gender
                                    }
                                    <button >Delete</button>
                                    <button >Edit</button>
                                </li>
                            );
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default User;