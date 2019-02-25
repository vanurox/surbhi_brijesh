import React, { Component } from 'react';
import cookies from 'react-cookies';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInupt = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  login = () =>{
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    fetch("http://35.175.245.127/api/v1/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      console.log(res);
      if(res.access_token !== undefined){
        cookies.save('access_token', res.access_token);
        this.props.history.push('/about');
      }
    })
    .catch((err)=>{
      console.log(`Error while logging into the app ${err}`);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" name="email" onChange={(e) => this.handleInupt(e)} /> <br />
          <input type="password" name="password" onChange={(e) =>this.handleInupt(e)}/> <br/>
          <button onClick={this.login}>Login</button>
        </header>
      </div>
    );
  }
}

export default App;
