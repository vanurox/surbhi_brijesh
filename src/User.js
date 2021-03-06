import React, { Component } from 'react';
import Loader from './Loader';

class User extends Component {
    
    constructor(){
        super();
        this.state = {
            users: [],
            loader: false
        };
    }
    componentWillMount(){

    }

    componentDidMount(){
        this.setState({
            loader: true
        });
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
        .finally(() => {
            this.setState({
                loader: false
            });
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
                    <Loader loader={this.state.loader}/>
            </div>
        );
    }
}

export default User;