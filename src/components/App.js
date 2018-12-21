import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'

// CONSTANTS
import {DASHBOARD,RECENT_MOVIES, INSTANT_VIDEO, USER_PROFILE,
     ACCOUNT_SETTING, MEDIA_STORE, MY_FILES_AND_MEDIA, TV_CHANNELS
    } from './constants/constants'

import {changeMainView} from '../actions/action-navigations'

import {
    VIEW_MAIL_BOX, VIEW_PROFILE, USER_PROFILE_SETTING, 
    SOCIAL_MEDIA_SETTING, NOTIFICATION_SETTING,CHANGE_AVATAR, CHANGE_PASSWORD, MOVIE_STORE, MUSIC_STORE, PUBLICATION_STORE,
    TV_SHOW_STORE,ACCOUNT_PASSWORD_SETTING
} from '../actions/action-types'


// COMPONENTS IMPORT
import Navigation from './navigation'
import Sidemenu from './sidebar-menu'
import Dashboard from './dashboard'
import RecentMovies from './recent-movies'
import AccountSetting from './account-setting'
import SocialMediaSetting from './social-media-setting'
import UserProfile from './user-profile'
import MediaStore from './media-store'
import MediaStoreItems from './media-store-items'
import AccountPasswordSetting from './account-password-setting'
import NotificationSetting from './notification-setting'
import UserProfileSetting from './user-profile-setting'
import ChangeAvatar from './change-avatar'

// STYLES
require('../styles/main.css')

// CONSTANTS DECLARATION

class App extends Component {
    state = {
        showMenu: true,
        isLoading: true,
        mainView: DASHBOARD
    }

    toggleMenu = () =>{
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    decideView(){
        console.log(this.props.mainContentDisplay)
        switch(this.props.mainContentDisplay){
            case DASHBOARD:
                return <Dashboard />
            case MY_FILES_AND_MEDIA:
                return <RecentMovies />
            case ACCOUNT_SETTING:
                return <AccountSetting />
            case SOCIAL_MEDIA_SETTING:
                return <SocialMediaSetting />
            case VIEW_PROFILE:
                return <UserProfile />
            case MEDIA_STORE:
                return <MediaStore />
            case ACCOUNT_PASSWORD_SETTING:
                return <AccountPasswordSetting />
            case NOTIFICATION_SETTING:
                return <NotificationSetting />
            case USER_PROFILE_SETTING:
                return <UserProfileSetting />
            case CHANGE_AVATAR:
                return <ChangeAvatar />
            case TV_SHOW_STORE:
                return <MediaStoreItems store_type={TV_SHOW_STORE} />
            case MOVIE_STORE:
                return <MediaStoreItems store_type={MOVIE_STORE} />
            case MUSIC_STORE:
                return <MediaStoreItems store_type={MUSIC_STORE} />
            case PUBLICATION_STORE:
                return <MediaStoreItems store_type={PUBLICATION_STORE} />
            default:
                return <Dashboard />
        }
    }

    changeMainContentDisplay =  (view) =>{
        this.setState({
            mainView: view
        })
    }


    render() {
        return (
            <mainbody>
                <Navigation toggleMenu={this.toggleMenu} />
                <Sidemenu 
                 isVisible={this.state.showMenu}
                 changeMainContentDisplay = {this.changeMainContentDisplay}
                />

                <main>
                    <div className="container-fluid">
                        {this.decideView()}
                    </div>
                </main>

            </mainbody>
            );
    }
}

const mapStateToProps = (state) =>{
    return {
        mainContentDisplay: state.mainContent
    }
}

const matchDispatchToProp = (dispatch) => {
    return bindActionCreators({
        changeMainContentDisplay: changeMainView
    },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProp)(App);
