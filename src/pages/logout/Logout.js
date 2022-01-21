import React, { Component } from 'react';
export default class Logout extends Component {
    componentDidMount(){
        localStorage.clear();
        window.location.href = "/login";
    }
  render() {
    return <div><h1>Mời bạn đăng nhập lại</h1></div>;
  }
}
