import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    MOVIE_STORE, TV_SHOW_STORE, MUSIC_STORE, PUBLICATION_STORE
} from '../actions/action-types'

import {changeMainView} from '../actions/action-navigations'

function mediaStore(props) {
  return (
    
        <div className="container-fluid">

            <div className="row  ">
                <div className="col-12">
                   	
                    <nav className="breadcrumb-container" aria-label="breadcrumb">
                        <ol className="breadcrumb pt-0">
                            <li className="breadcrumb-item active" aria-current="page">MEDIA STORE </li>
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
											<a  className="card" onClick={() => props.changeView(MOVIE_STORE)}>
												<div className="card-body text-center">
													<i className="iconsmind-Start-3"></i>
													<p className="card-text font-weight-semibold mb-0">MOVIES STORE</p>
													<p className="lead text-center">14</p>
												</div>
											</a>
										</div>
										<div className="col-md-6 col-lg-6 col-sm-4 col-6 mb-2">
											<a  className="card" onClick={() => props.changeView(TV_SHOW_STORE)}>
												<div className="card-body text-center">
													<i className="iconsmind-Movie"></i>
													<p className="card-text font-weight-semibold mb-0">TV SHOWS STORE</p>
													<p className="lead text-center">32</p>
												</div>
											</a>
										</div>
										<div className="col-md-6 col-lg-6 col-sm-4 col-6 mb-2">
											<a  className="card" onClick={() => props.changeView(MUSIC_STORE)}>
												<div className="card-body text-center">
													<i className="iconsmind-Music-Player"></i>
													<p className="card-text font-weight-semibold mb-0">MUSIC STORE</p>
													<p className="lead text-center">74</p>
												</div>
											</a>
										</div>
										<div className="col-md-6 col-lg-6 col-sm-4 col-6 mb-2">
											<a  className="card" onClick={() => props.changeView(PUBLICATION_STORE)}>
												<div className="card-body text-center">
													<i className="iconsmind-Books-2"></i>
													<p className="card-text font-weight-semibold mb-0">PUBLICATION STORE</p>
													<p className="lead text-center">25</p>
												</div>
											</a>
										</div>
									</div>

                                </div>
                                
                                <div className="col-lg-2 col-12 mb-4"></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            
        </div>

  )
}

const matchDispatchToActions = dispatch => {
    return bindActionCreators({
        changeView: changeMainView
    },dispatch)
}

export default connect(null, matchDispatchToActions)(mediaStore)