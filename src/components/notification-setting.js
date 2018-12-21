import React from 'react'

import SettingsRightSubmenu from './settings-right-submenu'

function notificationSetting() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row app-row">
                <div className="col-12 list" data-check-all="checkAll">
                    <div className="mb-2">
                        <h1>User Account Setting</h1>
                    </div>

                    <ul className="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                                aria-controls="first" aria-selected="true">Manage your Notifications.</a>
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

												<div className="form-group row mb-1">
													<label className="col-9 col-form-label">Send me email notification for the latest update on Sibos Stream</label>
													<div className="col-3">
														<div className="custom-switch custom-switch-primary-inverse mb-2">
															<input className="custom-switch-input" id="switch1" type="checkbox" checked />
															<label className="custom-switch-btn" for="switch1"></label>
														</div>
													</div>
												</div>
												<div className="form-group row mb-1">
													<label className="col-9 col-form-label">Send me email notification of new releases and feature releases </label>
													<div className="col-3">
														<div className="custom-switch custom-switch-primary-inverse mb-2">
															<input className="custom-switch-input" id="switch2" type="checkbox" checked />
															<label className="custom-switch-btn" for="switch2"></label>
														</div>
													</div>
												</div>
												<div className="form-group row mb-1">
													<label className="col-9 col-form-label">Receive our monthly newsletter</label>
													<div className="col-3">
														<div className="custom-switch custom-switch-primary-inverse mb-2">
															<input className="custom-switch-input" id="switch5" type="checkbox" checked />
															<label className="custom-switch-btn" for="switch5"></label>
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

                </div>
            </div>
        </div>
        <SettingsRightSubmenu />
    </div>
  )
}

export default notificationSetting;