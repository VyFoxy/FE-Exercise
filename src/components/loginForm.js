import "./loginForm.css";
import { setUser } from '../store/actions/setUser';
import React, {useEffect, useState} from "react"
import {connect, useDispatch, useSelector} from 'react-redux'
import {} from 'react-i18next'
import {useTranslation} from 'react-i18next'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function LoginForm() {
  const { i18n } = useTranslation();
  const { t } = useTranslation()
    const dispatch = useDispatch();
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [sePassword, setSePassword]= useState('')

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //useEffect( () =>
    //changeLanguage()
  //)

  

  const onUsernameChange = e => {
    setUsername(e.target.value)
  }
  const onPassWordChange = e => {
    setPassword(e.target.value)
  }
  const onSePassWordChange = e => {
    setSePassword(e.target.value)
  }

  const fetchUserList = async(e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/core/account/v1/authentication`, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify({
          username: username,
          password: password,
          type: 'EMPLOYEE'
      }),

  })

  const responseJSON = await response.json()
  if (responseJSON.status=='OK')
  {
    //setIsLoggedIn(true);
    let currentUser = responseJSON.data;
    dispatch(setUser(currentUser));
  }



}
const changeLanguage = () => {
  const lng= localStorage.getItem('language')
  i18n.changeLanguage(lng);
}

  return(
    <div className="cointainer">
      <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="LogIn"  value={0}/>
        <Tab label="SignUp" value={1}/>
      </Tabs>
    </Paper>
      <div className="content-tabs">
          <div
              className={value === 0 ? "content  active-content" : "content"} >

              <form className='form-cointainer' onSubmit={(e) => fetchUserList(e)}>

                    <div class="f-container">
                        <label for="uname"><b>{t('username')}</b></label><br/>
                        <input type="text" placeholder="Enter Username"  onChange={(e) => onUsernameChange(e)} name="uname" required/>
                        <br/>
                        <label for="psw"><b>{t('password')}</b></label><br/>
                        <input type="password" placeholder="Enter Password" onChange={(e) => onPassWordChange(e)} name="psw" required/>
                        <br/>
                        <br/>
                        <button type="submit">{t('login')}</button>
                    </div>
                </form>
          </div>
          <div
          className={value === 1 ? "content  active-content" : "content"}
        >
           <form className='form-cointainer' onSubmit={(e) => fetchUserList(e)}>
                <div class="f-container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"  onChange={(e) => onUsernameChange(e)} name="uname" required/>
                    <br/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onChange={(e) => onPassWordChange(e)} name="psw" required/>
                    <br/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password again" onChange={(e) => onSePassWordChange(e)} name="psw" required/>
                    <br/>
                    <button type="submit">SignUp</button>
                </div>
          </form> 
        </div>

        </div>
      </div>
  )
}

function mapStateToProps(state) {
  return {
      dataRedux: state.user
  };
}



export default connect(mapStateToProps)(LoginForm);
