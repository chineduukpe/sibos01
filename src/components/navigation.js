import React from 'react'

const navigation = (props) => {
    return (
        <nav className="navbar fixed-top">
         <a  className="menu-button d-none d-md-block">
             <svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17" onClick={props.toggleMenu}>
                 <rect x="0.48" y="0.5" width="7" height="1" />
                 <rect x="0.48" y="7.5" width="7" height="1" />
                 <rect x="0.48" y="15.5" width="7" height="1" />
             </svg>
             <svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" onClick={props.toggleMenu} >
                 <rect x="1.56" y="0.5" width="16" height="1" />
                 <rect x="1.56" y="7.5" width="16" height="1" />
                 <rect x="1.56" y="15.5" width="16" height="1" />
             </svg>
         </a>

         <a  className="menu-button-mobile d-xs-block d-sm-block d-md-none">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17" onClick={props.toggleMenu}>
                 <rect x="0.5" y="0.5" width="25" height="1" />
                 <rect x="0.5" y="7.5" width="25" height="1" />
                 <rect x="0.5" y="15.5" width="25" height="1" />
             </svg>
         </a>

         <div className="search" data-search-path="Layouts.Search.html?q=">
             <input placeholder="Search..."/>
             <span className="search-icon">
                 <i className="simple-icon-magnifier"></i>
             </span>
         </div>

         <a className="navbar-logo" >
             <span className="logo d-none d-xs-block"></span>
             <span className="logo-mobile d-block d-xs-none"></span>
         </a>

         <div className="ml-auto">
             <div className="header-icons d-inline-block align-middle">

                 <div className="position-relative d-none d-sm-inline-block">
                     <button className="header-icon btn btn-empty" type="button" id="iconMenuButton" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                     <i className="simple-icon-grid"></i>
                 </button>
                 <div className="dropdown-menu dropdown-menu-right mt-3  position-absolute" id="iconMenuDropdown">
                     <a  className="icon-menu-item">
                         <i className="iconsmind-Equalizer d-block"></i>
                         <span>Settings</span>
                     </a>

                     <a  className="icon-menu-item">
                         <i className="iconsmind-MaleFemale d-block"></i>
                         <span>Users</span>
                     </a>

                     <a  className="icon-menu-item">
                         <i className="iconsmind-Puzzle d-block"></i>
                         <span>Components</span>
                     </a>

                     <a  className="icon-menu-item">
                         <i className="iconsmind-Bar-Chart d-block"></i>
                         <span>Profits</span>
                     </a>

                     <a  className="icon-menu-item">
                         <i className="iconsmind-File-Chart d-block"></i>
                         <span>Surveys</span>
                     </a>

                     <a  className="icon-menu-item">
                         <i className="iconsmind-Suitcase d-block"></i>
                         <span>Tasks</span>
                     </a>

                 </div>
             </div>

             <div className="position-relative d-inline-block">
                 <button className="header-icon btn btn-empty" type="button" id="notificationButton" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                 <i className="simple-icon-bell"></i>
             </button>
             <div className="dropdown-menu dropdown-menu-right mt-3 scroll position-absolute" id="notificationDropdown">

                 <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                     <a >
                         <img src="img/profile-pic-l-2.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                     </a>
                     <div className="pl-3 pr-2">
                         <a >
                             <p className="font-weight-medium mb-1">Joisse Kaycee just sent a new comment!</p>
                             <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                         </a>
                     </div>
                 </div>

                 <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                     <a >
                         <img src="img/notification-thumb.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                     </a>
                     <div className="pl-3 pr-2">
                         <a >
                             <p className="font-weight-medium mb-1">1 item is out of stock!</p>
                             <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                         </a>
                     </div>
                 </div>


                 <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                     <a >
                         <img src="img/notification-thumb-2.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                     </a>
                     <div className="pl-3 pr-2">
                         <a >
                             <p className="font-weight-medium mb-1">New order received! It is total $147,20.</p>
                             <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                         </a>
                     </div>
                 </div>
                
                 <div className="d-flex flex-row mb-3 pb-3 ">
                     <a >
                         <img src="img/notification-thumb-3.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                     </a>
                     <div className="pl-3 pr-2">
                         <a >
                             <p className="font-weight-medium mb-1">3 items just added to wish list by a user!</p>
                             <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                         </a>
                     </div>
                 </div>

             </div>
         </div>

         <button className="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton">
             <i className="simple-icon-size-fullscreen"></i>
             <i className="simple-icon-size-actual"></i>
         </button>

        </div>

        <div className="user d-inline-block">
         <button className="btn btn-empty p-0" type="button" data-toggle="dropdown" aria-haspopup="true"
         aria-expanded="false">
         <span className="name">Sarah Kortney</span>
         <span>
             <img alt="Profile Picture" src="img/profile-pic-l.jpg" />
         </span>
        </button>

        <div className="dropdown-menu dropdown-menu-right mt-3">
         <a className="dropdown-item" >Account</a>
         <a className="dropdown-item" >Features</a>
         <a className="dropdown-item" >History</a>
         <a className="dropdown-item" >Support</a>
         <a className="dropdown-item" >Sign out</a>
        </div>
        </div>
        </div>
        </nav>
    )
}

export default navigation;