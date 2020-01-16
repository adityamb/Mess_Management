import React, { Component } from 'react'
import {BrowserRouter , Switch ,Route} from 'react-router-dom'
// import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Footer from './components/layout/Footer'
// import Student from './components/dashboard/Student'
import Messcut from './components/projects/Messcut'
// import Admin from './components/admin/Admin'
// import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import Bill from './components/bill/Bill'
import Menu from './components/menus/Menu'


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to Register page
    window.location.href = "/";
  }
} 

class App extends Component {
  render() {
    return (  
      <Provider store={store}>
      <BrowserRouter >
      <div className="App">
       
        <div className="main">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/messcut" component={Messcut} />
          <Route exact path="/bill" component={Bill} />
          <Route exact path="/menus" component={Menu} />
          
        </Switch>
        </div>
     
        
        <div className="appFooter"><Footer /></div>
      </div>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App
