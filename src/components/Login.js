import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div class="dropdown">
        <button class="login">login</button>
        <div class="dropdown-content">
          <a href="https://www.facebook.com">facebook</a>
          <a href="#">Gmail</a>
          <a href="#">Guest</a>
        </div>
      </div>
            </div>
        )
    }
}
