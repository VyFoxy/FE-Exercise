
import './App.css';
import { useState } from 'react'
import { setUser } from './store/actions/setUser';

import {connect, useDispatch, useSelector} from 'react-redux'
import NavBar from "./components/navbar"
import LoginForm from './components/loginForm';


function App() {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = useSelector((state) => state.isLogin)
  
    if (isLoggedIn) {
      return( 
        <div>
          <NavBar >
          </NavBar>
        </div>
    )}
      return(
        <LoginForm/>
      )
}

function mapStateToProps(state) {
  return {
      dataRedux: state.user
  };
}



export default connect(mapStateToProps)(App);
