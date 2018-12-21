import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeMainView } from '../actions/action-navigations'

// IMPORTING ACTION TYPES
import { 
	VIEW_MAIL_BOX, VIEW_PROFILE, USER_PROFILE_SETTING, 
	SOCIAL_MEDIA_SETTING, NOTIFICATION_SETTING,CHANGE_AVATAR, ACCOUNT_PASSWORD_SETTING 
} from '../actions/action-types'

const link_list = [
	// {
	// 	name: VIEW_PROFILE,
	// 	icon_class: 'iconsmind-Eye-Visible'
	// },
	{
		name: USER_PROFILE_SETTING,
		icon_class: 'iconsmind-Administrator'
	},
	{
		name: CHANGE_AVATAR,
		icon_class: 'iconsmind-Photos'
	},
	{
		name: ACCOUNT_PASSWORD_SETTING,
		icon_class: 'iconsmind-Security-Settings'
	},
	{
		name: VIEW_MAIL_BOX,
		icon_class: 'iconsmind-Mail-Unread'
	},
	{
		name: SOCIAL_MEDIA_SETTING,
		icon_class: 'iconsmind-Globe'
	},
	{
		name: NOTIFICATION_SETTING,
		icon_class: 'iconsmind-Speach-Bubble4'
	},
]

class AccountSetting extends Component {
	
	arrangeMenuItems = (props) => link_list.map((item,index,props) => (
		<div className="col-md-3 col-lg-3 col-sm-4 col-6 mb-2" key={index}>
			<a onClick={() => this.props.changeView(item.name)} className="card" >
				<div className="card-body text-center">
					<i className={item.icon_class}></i>
					<p className="card-text font-weight-semibold mb-0">{item.name.replace(/_/g,' ')}</p>
				</div>
			</a>
		</div>
	))

  render() {
	return (
	      <div className="row  ">
                <div className="col-12">
                   	
                    <nav className="breadcrumb-container" aria-label="breadcrumb">
                        <ol className="breadcrumb pt-0">
                            <li className="breadcrumb-item active" aria-current="page" >ACCOUNT SETTING </li>
                        </ol>
                    </nav>
                    <div className="separator mb-5"> </div>
                </div>
                <div className="col-12">
                    <div className="tab-content">
                        <div className="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                            <div className="row">
                                <div className="col-lg-2 col-12 mb-4"></div>

                                <div className="col-12 col-lg-8">
									<div className="row icon-cards-row mb-4 sortable">

										<div className="col-md-6 col-lg-6 col-sm-4 col-6 mb-2">
											<a  className="card" onClick={() => this.props.changeView(VIEW_PROFILE)}>
												<div className="card-body text-center">
													<i className="iconsmind-Eye-Visible"></i>
													<p className="card-text font-weight-semibold mb-0">View Profile</p>
												</div>
											</a>
										</div>
										{/*	DISPLAY ITEM LIST  */}
										{ this.arrangeMenuItems() }

									</div>
                                </div>
                                
                                <div className="col-lg-2 col-12 mb-4"></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
	)
  }
}


	// POPULATE MENU ITEM LIST DYNAMICALLY


const matchDispatchToActions = dispatch => {
	return bindActionCreators({
		changeView: changeMainView
	},dispatch)
}


export default connect(null, matchDispatchToActions)(AccountSetting);
// connect(null, matchDispatchToActions)(arrangeMenuItems);