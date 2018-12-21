import React from 'react'

export default function userProfile() {
  return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 list">

                    <div className="mb-2">
                        <h1>User Profile</h1>
                    </div>

                    <ul className="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                                aria-controls="first" aria-selected="true">DETAILS</a>
                        </li>

                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                            <div className="row">
                            
                            	<div className="col-12 col-lg-3">
									<div className="card ">
										<div className="card-body">
											<div className="text-center">
												<img alt="Profile" src="img/profile-pic-l.jpg" className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail" />
												<p className="list-item-heading mb-1">Sarah Kortney</p>
												<p className="mb-4 text-muted text-small"><i className="iconsmind-Lock"></i> FKJ-032440</p>
											</div>
										</div>
									</div>
								</div>
                            
								<div className="col-12 col-lg-6">
									<div className="card mb-4">
										<div className="card-body">
											<div className="row">
												<div className="col-12 col-lg-12">
													<h5 className="mb-4">Personal Details</h5>
													<div className="row">
														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">First name</p>

																   <p >Sarah Kortney</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">Last name</p>

																   <p>Sarah Kortney</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">User ID</p>

																   <p >FKJ-032440</p>

																</div>
															</div>
														</div>

														<div className="col-md-6 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">Address</p>

																   <p >Chocolate Cake exclusively brings classNameic chocolate cake..</p>

																</div>
															</div>
														</div>

														<div className="col-md-6 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">Email Address</p>

																   <p >sibosstudios@gmail.com</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">Date of Birth</p>

																   <p >30-08-2018</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">Phone Number</p>

																   <p >+234(0000000)</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">Country</p>

																   <p >Nigeria</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">State</p>

																   <p >Abuja</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">City</p>

																   <p >Mpape</p>

																</div>
															</div>
														</div>

														<div className="col-md-4 mb-3">
															<div className=" d-flex flex-grow-1 min-width-zero">
																<div className="min-width-zero">
																   <p className="mb-2 text-muted text-small">Zip</p>

																   <p >00217</p>

																</div>
															</div>
														</div>
													</div>
												</div>
												<hr />
												<div className="col-12 col-lg-12">
													<h5 className="mb-4">Social Media Active Links</h5>

														<div className="form-group row mb-1">
															<div className="col-12 col-lg-2"></div>
															<label className="col-6 col-form-label">
																<div className="row">
																	<div className="col-12 col-lg-12">
																		Facebook
																	</div>
																	<div className="col-12 col-lg-12">
																		<p className="mb-2 text-muted text-small"> <i className="iconsmind-Administrator"></i> www.facebook.com/Mark.Andre</p>
																	</div>
																</div>
															</label>
															<div className="col-2">
																<div className="custom-switch custom-switch-primary-inverse mb-2">
																	<input className="custom-switch-input" id="switch1" type="checkbox" checked />
																	<label className="custom-switch-btn" for="switch1"></label>
																</div>
															</div>
															<div className="col-12 col-lg-2"></div>
														</div>
														<div className="form-group row mb-1">
															<div className="col-12 col-lg-2"></div>
															<label className="col-6 col-form-label">
																<div className="row">
																	<div className="col-12 col-lg-12">
																		Twitter
																	</div>
																	<div className="col-12 col-lg-12">
																		<p className="mb-2 text-muted text-small"> <i className="iconsmind-Administrator"></i> www.twitter.com/Mark.Andre</p>
																	</div>
																</div>
															</label>
															<div className="col-2">
																<div className="custom-switch custom-switch-secondary-inverse mb-2">
																	<input className="custom-switch-input" id="switch2" type="checkbox" />
																	<label className="custom-switch-btn" for="switch2"></label>
																</div>
															</div>
															<div className="col-12 col-lg-2"></div>
														</div>
														<div className="form-group row mb-1">
															<div className="col-12 col-lg-2"></div>
															<label className="col-6 col-form-label">
																<div className="row">
																	<div className="col-12 col-lg-12">
																		Instagram
																	</div>
																	<div className="col-12 col-lg-12">
																		<p className="mb-2 text-muted text-small"> <i className="iconsmind-Administrator"></i> www.instagram.com/Mark.Andre</p>
																	</div>
																</div>
															</label>
															<div className="col-2">
																<div className="custom-switch custom-switch-primary-inverse mb-2">
																	<input className="custom-switch-input" id="switch3" type="checkbox" checked />
																	<label className="custom-switch-btn" for="switch3"></label>
																</div>
															</div>
															<div className="col-12 col-lg-2"></div>
														</div>
														<div className="form-group row mb-1">
															<div className="col-12 col-lg-2"></div>
															<label className="col-6 col-form-label">
																<div className="row">
																	<div className="col-12 col-lg-12">
																		Linkdin
																	</div>
																	<div className="col-12 col-lg-12">
																		<p className="mb-2 text-muted text-small"> <i className="iconsmind-Administrator"></i> www.linkdin.com/Mark.Andre</p>
																	</div>
																</div>
															</label>
															<div className="col-2">
																<div className="custom-switch custom-switch-secondary-inverse mb-2">
																	<input className="custom-switch-input" id="switch4" type="checkbox" />
																	<label className="custom-switch-btn" for="switch4"></label>
																</div>
															</div>
															 <div className="col-12 col-lg-2"></div> 
														</div>

												</div>
												
											</div>

										</div>
									</div>
								</div>
										
								<div className="col-12 col-lg-3">
									<div className="card mb-4">
										<div className="card-body">
											<h4 className="mb-4">Current Subscription Plan</h4>
											<h1 className="mb-4">Starter </h1> | <small>FREE A MONTH</small>
											<h5 className="mb-4"><small>Plan Features:</small></h5>
											
											<p className="mb-2 text-muted text-small"> <i className="iconsmind-Arrow-Forward2"></i> 720p Available</p>
											<p className="mb-2 text-muted text-small"> <i className="iconsmind-Arrow-Forward2"></i> Stream only on a single  device </p>
											<p className="mb-2 text-muted text-small"> <i className="iconsmind-Arrow-Forward2"></i> Watch on your laptop, TV, phone and tablet </p>
											<p className="mb-2 text-muted text-small"> <i className="iconsmind-Arrow-Forward2"></i> Unlimited access to Sibos Stream free TV Channels.</p>
											<p className="mb-2 text-muted text-small"> <i className="iconsmind-Arrow-Forward2"></i> Get unlimited access to the Sibos Streaming free library with limited or commercials. Enjoy full seasons of exclusive series, hit movies, Sibos Stream Originals, kids shows, and more</p>
											<p className="mb-2 text-muted text-small"> <i className="iconsmind-Arrow-Forward2"></i> Switch plans or cancel anytime</p>
											
										</div>
									</div>
								</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

  )
}
