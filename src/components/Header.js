import React from "react";
import {connect,useSelector } from "react-redux"
import {useTranslation} from 'react-i18next'
import { Typography } from "@material-ui/core";

function Header () {
    const {t } = useTranslation()
    const dataUser = useSelector((state) => state.user[0]);
    return(
        
        <div id="main">
            
            <div className="name">
                <Typography variant="h2"><span>{t('hello')} {dataUser.username}<br></br> </span>  {t('subtitle')}</Typography>
                
            </div>
            
        </div>
    )
}
function mapStateToProps(state) {
    return {
        dataRedux: state.user
    };
  }
  
export default connect(mapStateToProps)(Header);
