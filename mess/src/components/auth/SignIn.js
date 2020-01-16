import React, { Component } from 'react'
// import axios from 'axios'
import './auth.css'
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import { registerUser, loginUser } from "../../actions/authActions";


class SignIn extends Component {
  constructor(){
      super();
      this.state={
          email:"",
          password:""
      }
  }

    handleChange = (e) => {
       this.setState ({
            [e.target.id]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       const userData={
           email:this.state.email,
           password:this.state.password          
       }
       this.props.loginUser(userData, this.props.history);
    }
  
    render() {
        return (
            <div>
            <nav className="nav-wrapper grey darken-3 Mynav" >
            <div className="InNav">
                 <Link to=" /" className="brand-logo " >Mess</Link>
            </div>
        

            <ul className="right">
                <li><NavLink to="/signup">SignUp </NavLink></li>
                <li><NavLink to="/signin">Login</NavLink></li>
                
            </ul>

                
            </nav>
            <div className="container acontainer">
                <form onSubmit={this.handleSubmit} className="white signinform">
                    <h3 className="black-text text-darken-3">Sign In</h3>
                    <div className="row ">
                    <div className="input-field col s10">
                     <label htmlFor="email">E-mail</label>
                     <input type="email"  id="email" value={this.state.email} onChange={this.handleChange} required/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s10">
                     <label htmlFor="password">Password</label>
                     <input type="password"  id="password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>
                    </div>
                    <div className="input-field">
                       <button className="btn pink lighten-1">Login</button>
                    </div>
                    
                </form>

                </div>
            </div>
        )
    }
}
SignIn.propTypes = {
    registerUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
    { registerUser, loginUser }
  )(withRouter(SignIn));

