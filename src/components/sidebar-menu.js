import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import posed from 'react-pose'

// OTHER COMPONENTS
import SidebarSubMenu from './sidebar-submenu'
import SidemenuItem from './side-menu-item'

// CONSTANTS
import {DASHBOARD,RECENT_MOVIES, INSTANT_VIDEO, USER_PROFILE,
     ACCOUNT_SETTING, MEDIA_STORE, MY_FILES_AND_MEDIA, TV_CHANNELS
    } from './constants/constants'

import {changeMainView} from '../actions/action-navigations'

const MenuWrapper = posed.div({
    visible:{
        opacity: 1
    },
    invisible:{
        opacity: 0
    }
})

// SIDEMENU ITEMs
const side_menu_items = [
    {
        name: INSTANT_VIDEO,
        icon_class: 'iconsmind-Start-3',
    },
    {
        name: TV_CHANNELS,
        icon_class: 'iconsmind-Monitor-Tablet',
    },
    {
        name: MEDIA_STORE,
        icon_class: 'iconsmind-Shopping-Cart',
    },
    {
        name: MY_FILES_AND_MEDIA,
        icon_class: 'iconsmind-Administrator',
    },
    {
        name: ACCOUNT_SETTING,
        icon_class: 'iconsmind-Gear-2',
    },

]

class Sidebar extends Component{

    state = {
        showSubmenu : false,
        active_menu: INSTANT_VIDEO
    }

    handleClick = (view) =>{
        this.setState({
            active_menu: view
        })
        
        this.props.changeView(view)
        this.props.changeMainContentDisplay(view);
    }

    toggleSubmenu = () =>{
        this.setState({
            showSubmenu: !this.state.showSubmenu,
        })  
    }

    // Dynamically create a list of Menu from array variable of menu items above
    menuList = () => {
        return side_menu_items.map(item => {
            let menu_is_active = '';
            if(this.state.active_menu === item.name)
                menu_is_active = 'active'
            return <SidemenuItem 
                        menu_item={item}
                        menu_is_active = {menu_is_active}
                        eventHandler={this.handleClick}
                    />
                
        })
    }

    render(){
        return (
            <MenuWrapper
                pose={this.props.isVisible ? 'visible' : 'invisible'}
            >
            <div className="sidebar">
                <div className="main-menu">
                    <div className="scroll">
                        <ul className="list-unstyled">
                             {this.menuList()} 
                        </ul>
                    </div>
                </div>
            </div>
             </MenuWrapper>
        )
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeView: changeMainView
    },dispatch)
}

export default connect(null, matchDispatchToProps) (Sidebar);