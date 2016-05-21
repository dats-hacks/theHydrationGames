import React, { Component } from 'react'


export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>REGISTER</h1>
		<form action = "/register" method="POST">
		    <input type="text" name="username" placeholder = "username">
		    <input type="password" name="password" placeholder = "password">
		    <button>Sign up</button>
		</form>
      </div>
    );
  }
}