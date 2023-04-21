import React from "react";
import {connect, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'

function User() {
    const {t} = useTranslation();
    const dataUser = useSelector((state) => state.user[0]);
    //console.log(dataUser)
    return (
        <div id="main">
        <div  className="a-box">

            <div className="s-b-text">
            <h2></h2> <br></br>
            <h2></h2> <br></br>

            <p><b>{t('username')}:</b> {dataUser.username}<br></br><b> bearerToken:</b> {dataUser.bearerToken}<br></br><b> {t('type')}:</b> {dataUser.type}
            <br></br><b> {t('expiredTime')}:</b> {dataUser.expiredTime}<br></br><b> {t('time')}:</b> {dataUser.time}</p>
            <br></br>
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

export default connect(mapStateToProps)(User);