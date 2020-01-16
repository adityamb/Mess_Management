import React, { Component } from 'react'
// import Messcut from '../projects/Messcut'
// import axios from 'axios'
import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";
import Navbar from '../layout/Navbar'
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { displyUser } from "../../actions/authActions";
import './studentmain.css'

class Dashboard extends Component {
   
    componentDidMount(){
      this.props.displyUser()
    
             console.log(this.props)
     }
    render() {
        let userData=this.props.auth.userData!=null?
         
             <div className="container white acontainer">
                 <h3 className="black-text">Details</h3>
                 <div >
                    
                     <p><strong>E-mail :</strong> {this.props.auth.userData.email} </p>

                </div>
                <div >
                    
                     <p><strong>Name :</strong> {this.props.auth.userData.name} </p>

                </div>
                <div >
                    
                     <p><strong>Mess Number: </strong> {this.props.auth.userData.messnumber} </p>

                </div>
                <div >
                    
                     <p><strong>Branch: </strong> {this.props.auth.userData.branch} </p>

                </div>
                <div >
                    
                     <p><strong>Year: </strong> {this.props.auth.userData.year} </p>

                </div>

             </div>:<h1>Loading</h1>
        return (
            <div>
                <Navbar />
                <h2 >Welcome To the Mess!!</h2>
                
                <h1>{userData}</h1>

                   
            </div>
            
        )
        
    }
}

Dashboard.propTypes = {
    displyUser: PropTypes.func.isRequired,
  
  };
  const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
    { displyUser}
  )(Dashboard);
