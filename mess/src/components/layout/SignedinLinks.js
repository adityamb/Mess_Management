import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";



class SignedinLinks extends Component {
    onLogout = e => {
        e.preventDefault();
        this.props.history.push("/signup");
        this.props.logoutUser();
        console.log(this.props)
      };
      render(){
    return (
        
        <ul className="right hide-on-med-and-down">
        <li><NavLink to="/messcut">MessCut </NavLink></li>
          <li><NavLink to="/bill">Bill</NavLink></li>
          <li><NavLink to="/menus">Menu</NavLink></li>
          
           <li><div  onClick={this.onLogout}  >Logout</div></li>
           <li><NavLink to="/" className="btn btn-floating grey lighten-1">AB</NavLink></li>
       </ul>
        
    )
}
}

SignedinLinks.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(SignedinLinks));
