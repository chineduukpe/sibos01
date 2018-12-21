import React from 'react'

import SettingsRightSubmenu from './settings-right-submenu'

function socialMediaSetting() {
  return (
    <div className="row app-row">
                <div className="col-12 list" data-check-all="checkAll">
                    <div className="mb-2">
                        <h1>User Account Setting</h1>
                    </div>

                    <ul className="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                                aria-controls="first" aria-selected="true">SOCIAL MEDIA LINKS : Talk about your viewing to your friends on social media</a>
                        </li>
                    </ul>

						<div className="row">
							<div className="col-lg-2 col-12 mb-4"></div>

							<div className="col-12 col-lg-8">
								<div className="row">
									<div className="col-lg-2 col-12 mb-4"></div>

									<div className="col-lg-8 col-12 mb-4">
										<div className="card mb-4">
											<div className="card-body">

												<form className="needs-validation mb-5" novalidate>

													<div className="form-row">


														<div className="col-md-12 mb-3">
															<label for="validationTooltip014"> Facebook</label>
															<input type="text" className="form-control" id="validationTooltip014" placeholder="www.facebook.com/Mark.Andre"
																required />
															<div className="invalid-tooltip">
																Please provide a url address.
															</div>
														</div>

														<div className="col-md-12 mb-3">
															<label for="validationTooltip015"> Twitter</label>
															<input type="text" className="form-control" id="validationTooltip015" placeholder="www.twitter.com/Mark.Andre"
																required />
															<div className="invalid-tooltip">
																Please provide a url address.
															</div>
														</div>

														<div className="col-md-12 mb-3">
															<label for="validationTooltip016"> Instagram</label>
															<input type="text" className="form-control" id="validationTooltip016" placeholder="www.instagram.com/Mark.Andre"
																required />
															<div className="invalid-tooltip">
																Please provide a url address.
															</div>
														</div>

														<div className="col-md-12 mb-3">
															<label for="validationTooltip017"> Linkedin</label>
															<input type="text" className="form-control" id="validationTooltip017" placeholder="www.linkedin.com/Mark.Andre"
																required />
															<div className="invalid-tooltip">
																Please provide a url address.
															</div>
														</div>
													</div>

													<button className="btn btn-primary" type="submit">Save Account Setting</button>
												</form>

											</div>
										</div>
									</div>
									<div className="col-lg-2 col-12 mb-4"></div>
								</div>

							</div>

							<div className="col-lg-2 col-12 mb-4"></div>
						</div>
						<SettingsRightSubmenu />
                </div>
            </div>
  )
}

export default socialMediaSetting;
