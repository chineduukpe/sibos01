import React from 'react'

import SettingsRightSubmenu from './settings-right-submenu'

function userProfileSetting() {
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
                                aria-controls="first" aria-selected="true">User Profile Setting</a>
                        </li>
                    </ul>

					<div className="row">
						<div className="col-lg-2 col-12 mb-4"></div>

						<div className="col-12 col-lg-8">

							<div className="card mb-4">
								<div className="card-body">

									<form className="needs-validation mb-5" novalidate>

										<div className="form-row">
											<div className="col-md-5 mb-3">
												<label for="validationTooltip001">First name</label>
												<input type="text" className="form-control" id="validationTooltip001" placeholder="First name"
													value="Mark" required />
												<div className="valid-tooltip">
													Looks good!
												</div>
											</div>

											<div className="col-md-4 mb-3">
												<label for="validationTooltip002">Last name</label>
												<input type="text" className="form-control" id="validationTooltip002" placeholder="Last name"
													value="Otto" required />
												<div className="valid-tooltip">
													Looks good!
												</div>
											</div>

											<div className="col-md-3 mb-3">
												<label for="validationTooltip003">User ID</label>
												<input type="text" className="form-control" id="validationTooltip003" placeholder="FKJ-032440"
												   disabled value="FKJ-032440" required />
												<div className="valid-tooltip">
													Looks good!
												</div>
											</div>
										</div>

										<div className="form-row">
											<div className="col-md-2 mb-3">
												<label for="validationTooltip007"> Date of Birth</label>
												<input type="text" className="form-control" id="validationTooltip007" placeholder="30-08-2018"
													required />
												<div className="invalid-tooltip">
													Please provide a date of birth.
												</div>
											</div>

											<div className="col-md-10 mb-3">
												<label for="validationTooltip011"> Address</label>
												<input type="text" className="form-control" id="validationTooltip011" placeholder="No.3 Off Ajegunle Street"
													required />
												<div className="invalid-tooltip">
													Please provide a home address.
												</div>
											</div>
										</div>

										<div className="form-row">
											<div className="col-md-5 mb-3">
												<label for="validationTooltip004">Email Address</label>
												<input type="text" className="form-control" id="validationTooltip004" placeholder="sibosstudios@gmail.com"
													required />
												<div className="invalid-tooltip">
													Please provide a email address.
												</div>
											</div>

											<div className="col-md-4 mb-3">
												<label for="validationTooltip005">Phone Number</label>
												<input type="text" className="form-control" id="validationTooltip005" placeholder="+234(0000000)"
													required />
												<div className="invalid-tooltip">
													Please provide a phone No..
												</div>
											</div>

											<div className="col-md-3 mb-3">
												<label for="validationTooltip006">Country</label>
												<input type="text" className="form-control" id="validationTooltip006" placeholder="Enter"
													required />
												<div className="invalid-tooltip">
													Please provide a country.
												</div>
											</div>
										</div>

										<div className="form-row">
											<div className="col-md-5 mb-3">
												<label for="validationTooltip008">City</label>
												<input type="text" className="form-control" id="validationTooltip008" placeholder="City"
													required />
												<div className="invalid-tooltip">
													Please provide a city.
												</div>
											</div>

											<div className="col-md-4 mb-3">
												<label for="validationTooltip009">State</label>
												<input type="text" className="form-control" id="validationTooltip009" placeholder="State"
													required />
												<div className="invalid-tooltip">
													Please provide a state.
												</div>
											</div>

											<div className="col-md-3 mb-3">
												<label for="validationTooltip010">Zip</label>
												<input type="text" className="form-control" id="validationTooltip010" placeholder="Zip"
													required />
												<div className="invalid-tooltip">
													Please provide a zip.
												</div>
											</div>
										</div>
										<button className="btn btn-primary" type="submit">Update Account</button>
									</form>

								</div>
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

export default userProfileSetting;