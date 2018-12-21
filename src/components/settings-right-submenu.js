import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeMainView } from '../actions/action-navigations'
import {
     USER_PROFILE_SETTING, CHANGE_AVATAR, SOCIAL_MEDIA_SETTING, NOTIFICATION_SETTING, ACCOUNT_PASSWORD_SETTING
    } from '../actions/action-types'

function settingsRightSideSubmenu(props) {
  return (
    <div className="app-menu">
            <div className="p-4">
                <div className="scroll">
                    <p className="text-muted ">Account Menu</p>
                    <ul className="list-unstyled mb-5">
                        <li onClick={() => props.changeView(USER_PROFILE_SETTING)}>
                            <a >
                                <i className="iconsmind-Administrator"></i>
                                Edit User Profile
                            </a>
                        </li>
                        <li onClick={() => props.changeView(CHANGE_AVATAR)}>
                            <a >
                                <i className="simple-icon-picture"></i>
                                Set Account Avatar
                            </a>
                        </li>
                        <li onClick={() => props.changeView(ACCOUNT_PASSWORD_SETTING)}>
                            <a >
                                <i className="simple-icon-lock"></i>
                                Change Password
                            </a>
                        </li>
                        <li onClick={() => props.changeView(SOCIAL_MEDIA_SETTING)}>
                            <a >
                                <i className="iconsmind-Diamond"></i>
                                Social Media Setting
                            </a>
                        </li>
                        <li onClick={() => props.changeView(NOTIFICATION_SETTING)}>
                            <a >
                                <i className="iconsmind-Envelope"></i>
                                Notification Setting
                            </a>
                        </li>
                    </ul>


                </div>
            </div>
            <a className="app-menu-button d-inline-block d-xl-none" >
                <i className="simple-icon-refresh"></i>
            </a>
        </div>
  )
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({
        changeView: changeMainView
    },dispatch)
}

export default connect(null,matchDispatchToProps) (settingsRightSideSubmenu);