import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import { registerUser, loginUser } from "../../actions/authActions";
import './auth.css'

class SignUp extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:"",
            phone:"",
            branch:"",
            year:"",
            messnumber:""
        }
    }

    handleChange = (e) => {
       this.setState ({
            [e.target.name]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            phone:this.state.phone,
            branch:this.state.branch,
            year:this.state.year,
            messnumber:this.state.messnumber,


        }
        // console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    }
    render() {
        return (
            <div>
            <nav className="nav-wrapper grey darken-3 Mynav" >
            <div className="InNav">
                 <Link to=" /" className="brand-logo " >Mess</Link>
            </div>
            <div>
    
    <ul className="right">
        <li><NavLink to="/signup">SignUp </NavLink></li>
        <li><NavLink to="/signin">Login</NavLink></li>
        
    </ul>
 </div>
        
  </nav>
            <div className="container acontainer">
                <form onSubmit={this.handleSubmit} className="white aform">
                    <h3 className="black-text text-darken-3 aheader">Sign Up</h3>
                    <div className="input-field">
                     <label htmlFor="messnumber">Mess number</label>
                     <input type="text" name="messnumber"  id="messnumber" value={this.state.messnumber} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field ">
                     <label htmlFor="firstname">Name</label>
                     <input type="text" name="name"  id="firstname" value={this.state.name}  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                     <label htmlFor="email">E-mail</label>
                     <input type="email" name="email"  id="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                     <label htmlFor="phone">Phone</label>
                     <input type="text" name="phone"  id="phone" value={this.state.phone}  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                     <label htmlFor="branch">Branch</label>
                     <input type="text" name="branch"  id="branch" value={this.state.branch}  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                     <label htmlFor="year">Year</label>
                     <input type="text" name="year"  id="year" value={this.state.year}  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field ">
                     <label htmlFor="password">Password</label>
                     <input type="password"  name="password" id="password" value={this.state.password}  onChange={this.handleChange}/>
                    </div>

                   

                   


                    <div className="input-field">
                       <button className="btn pink darken-2 ">Sign Up!</button>
                    </div>
                </form>

                
            </div>
            </div>

        )
    }
}


SignUp.propTypes = {
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
  )(withRouter(SignUp));
