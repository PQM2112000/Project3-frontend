import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import './Login.css'
import axios from 'axios';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleChange= this.handleChange.bind(this)
  }
  handleChange=(event)=>{
    
    this.setState({
      [event.target.name]:event.target.value,
    })
    
  }
  handleSubmit=async()=>{
    console.log(this.state.username+" "+this.state.password);
    const res =  await axios.post("https://localhost:44373/api/User/Login",
      {userName:this.state.username,
      password:this.state.password,}
    );
    if(res.data.success){
      localStorage.setItem("login", true);
      window.location.href ="/home"
    }else{
      window.location.href = "/login"
    } 
    alert(res.data.message); 
  }
  render() {
    return (
      <Container>
        <div className="form-signin">
          <form>
            <h1 className="h3 mb-3 font-weight-normal">
              Mời bạn đăng nhập tại đây
            </h1>
            <label htmlFor="inputEmail" className="sr-only">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="user"
              defaultValue=""
              onChange={this.handleChange}
              required
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              defaultValue=""
              className="form-control"
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.handleSubmit}
            >
              Đăng Nhập
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
          </form>
        </div>
      </Container>
    );
  }
}