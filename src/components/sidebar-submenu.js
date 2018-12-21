import React from 'react'
import posed from 'react-pose'

const Wrapper = posed.div({
    visible:{
        opacity: 1,
    },
    invisible:{
        opacity: 0
    }
})
const sidebarSubMenu = (props) => (
        <Wrapper 
            pose={props.inVisible ? 'visible' : 'invisible'}
        >
        <div className="sub-menu">
            <div className="scroll">
                <ul className="list-unstyled" data-link="dashboard">
                    <li className="active">
                        <span>
                            <i className="simple-icon-briefcase"></i> Default
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-pie-chart"></i>Analytics
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-basket-loaded"></i> Ecommerce
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-doc"></i> Content
                        </span>
                    </li>
                </ul>

                <ul className="list-unstyled" data-link="layouts">
                    <li>
                        <span>
                            <i className="simple-icon-credit-card"></i> Data List
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-list"></i> Thumb List
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-grid"></i> Image List
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-book-open"></i> Details
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-magnifier"></i> Search
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-user-following"></i> Login
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-user-follow"></i> Register
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-user-unfollow"></i> Forgot Password
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-exclamation"></i> Error
                        </span>
                    </li>
                </ul>
                
                <ul className="list-unstyled" data-link="applications">
                    <li>
                        <span>
                            <i className="simple-icon-check"></i> Todo
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-calculator"></i> Survey
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-bubbles"></i> Chat
                        </span>
                    </li>
                </ul>
                
                <ul className="list-unstyled" data-link="ui">
                    <li>
                        <span>
                            <i className="simple-icon-bell"></i> Alerts
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-badge"></i> Badges
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-control-play"></i> Buttons
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-layers"></i> Cards
                        </span>
                    </li>

                    <li>
                        <span>
                            <i className="simple-icon-picture"></i> Carousel
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-chart"></i> Charts
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-arrow-up"></i> Collapse
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-arrow-down"></i> Dropdowns
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-book-open"></i> Editors
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-check mi-forms"></i> Forms
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-puzzle"></i> Form Components
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-star"></i> Icons
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-note"></i> Input Groups
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-screen-desktop"></i> Jumbotron
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-docs"></i> Modal
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-cursor"></i> Navigation
                        </span>
                    </li>

                    <li>
                        <span>
                            <i className="simple-icon-pin"></i> Popover & Tooltip
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-shuffle"></i> Sortable
                        </span>
                    </li>
                </ul>

                <ul className="list-unstyled" data-link="menu">
                    <li>
                        <span>
                            <i className="simple-icon-control-pause"></i> Default
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-arrow-left mi-subhidden"></i> Subhidden
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="simple-icon-control-start mi-hidden"></i> Hidden
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        </Wrapper>
    )

export default sidebarSubMenu;