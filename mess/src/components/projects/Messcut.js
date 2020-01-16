import 'date-fns';
import React, { Component } from 'react';
import Navbar from '../layout/Navbar'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  
  
} from '@material-ui/pickers';
// import MesscutDetail from'./MesscutDetail'
import './messcutstyle.css'
import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addMesscut,displyMesscuts } from "../../actions/messAction";
import Moment from 'react-moment';

 class Messcut extends Component {
      constructor(){
        super();
        this.state={
          from:"",
          to:"",
          messcuts:{}
        }
      }
      componentDidMount(){
        this.props.displyMesscuts();
        console.log(this.props)
      }
      componentWillReceiveProps(newProps){
        // if(newProps.mess.messcuts!=null){
          this.setState({
            messcuts:newProps.mess
          })
        // }
        // console.log(newProps.mess.messcuts)
        console.log(newProps)
        console.log(this.state.messcuts)


      }
 
      onMesscut=e=>{
        e.preventDefault()
        const data={
          from:this.state.from,
          to:this.state.to
        }
        this.props.addMesscut(data)
      }
      handleChange = (e) => {
        this.setState ({
             [e.target.name]: e.target.value
        })
     }
  // The first commit of Material-UI
  render(){
 let messcutData=this.state.messcuts.messcuts!=null?
   
       this.state.messcuts.messcuts.map((item,index)=>{
         return  <tr>
         <th scope="row">{index+1}</th>
         <td>
         <Moment format="DD/MM/YYYY">
         {item.from}
            </Moment>
           </td>
         <td><Moment format="DD/MM/YYYY">
         {item.to}
            </Moment></td>
       </tr>
       })
    :<h1>Loading....</h1>

  return (

    <div className="messcutapp">
    <Navbar />
    <h2 className="Messcut-header">
            MessCut 
        </h2>
       <div className="container white">
        
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around" >
            <TextField
        id="date"
        label="From"
        type="date"
        name="from"
        onChange={this.handleChange}
        value={this.state.from}
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="To"
        type="date"
        name="to"
        onChange={this.handleChange}
        value={this.state.to}
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
               
                <button onClick={this.onMesscut} className="btn btn-sml">Submit</button>
                
            </Grid>
            </MuiPickersUtilsProvider>
            {/* <div className="tablemess">
              
            </div> */}
            
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
    </tr>
  </thead>
  <tbody>
   {messcutData}
  </tbody>
</table>


     </div>
    </div>

    
  )}
}
Messcut.propTypes = {
  addMesscut: PropTypes.func.isRequired,
  displyMesscuts:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  mess:state.mess
});

export default connect(
  mapStateToProps,
  { addMesscut,displyMesscuts}
)(Messcut);
