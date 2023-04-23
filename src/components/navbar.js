import React, { useState } from "react";
import logo from "../images/logo.png";
import User from "./User";
import App from "../App";
import Header from "./Header";
import Todo from './TodoList'
import { connect, useDispatch } from "react-redux";
import { Router, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { deleteUser } from "../store/actions/deleteUser";
import { useTranslation } from "react-i18next";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { locales } from "../i18n/i18n.ts";

function Navbar() {
  
  
  const { i18n } = useTranslation();
  const currentLanguage = locales[i18n.language] 
  console.log(currentLanguage);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const handleLogoutClick = (e) => {
    dispatch(deleteUser());
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lng)
  }
    //LocalStorage.setItem('language', {lng})
  };
  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        

        <ul>
          <li>
            <Link to="/a">{t('home')}</Link>
          </li>
          <li>
            <Link to="/user">{t('user')}</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/logout" onClick={(e) => handleLogoutClick(e)}>
              {t('logout')}
            </Link>
          </li>
          <PopupState variant="popover"  popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="outlined" color="primary" size="small" {...bindTrigger(popupState)}>
            {currentLanguage}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => changeLanguage("vi")} >Tiếng Việt</MenuItem>
            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
        </ul>
        
      </nav>
      <Routes>
        <Route exact path="/user" element={<User />} />
        <Route path="/a" Component={Header} />
        <Route path="/logout" Component={App} />
        <Route path="/todo" Component={Todo} />
      </Routes>
      
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dataRedux: state.user,
  };
}

export default connect(mapStateToProps)(Navbar);
