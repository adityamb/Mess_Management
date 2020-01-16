// import React, { Component } from 'react'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import  './messcutstyle.css'
// import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { displyMesscuts } from "../../actions/messAction";

// class MesscutDetail extends Component {
//      createData(Slno, From, To) {
//         return { Slno, From, To};
//       }
      
    
//       render(){
//         const rows = [
//             createData(1,'21/10/2012','04/04/2015'),
//             createData(2,'21/10/2012','04/04/2015'),
//             createData(2,'21/10/2012','04/04/2015'),
//             createData(2,'21/10/2012','04/04/2015'),
    
          
//           ];
//     return (
//         <div classname="messtable container">
//                         <Paper classname="root">
//                     <Table classname="tablem" aria-label="simple table">
//                         <TableHead>
//                         <TableRow>
//                             <TableCell>Sl No</TableCell>
//                             <TableCell align="right">From</TableCell>
//                             <TableCell align="right">To</TableCell>
                    
//                         </TableRow>
//                         </TableHead>
//                         <TableBody>
//                         {rows.map(row => (
//                             <TableRow key={row.Slno}>
//                             <TableCell component="th" scope="row">
//                                 {row.Slno}
//                             </TableCell>
//                             <TableCell align="right">{row.From}</TableCell>
//                             <TableCell align="right">{row.To}</TableCell>

//                             </TableRow>
//                         ))}
//                         </TableBody>
//                     </Table>
//                     </Paper>
//         </div>
//     )}
// }

// MesscutDetail.propTypes = {
//   displyMesscuts: PropTypes.func.isRequired,
  
//   };
//   const mapStateToProps = state => ({
//     auth: state.auth,
//     mess:state.mess
//   });
  
//   export default connect(
//     mapStateToProps,
//     { displyMesscuts}
//   )(MesscutDetail);
  
