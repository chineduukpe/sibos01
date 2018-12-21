import React from 'react'

import SettingsRightSubmenu from './settings-right-submenu'

function accountPasswordSetting() {
  return (
    <div>

        <div class="container-fluid">
            <div class="row app-row">
                <div class="col-12 list" data-check-all="checkAll">
                    <div class="mb-2">
                        <h1>User Account Setting</h1>
                    </div>
                    
					<ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                                aria-controls="first" aria-selected="true">Change your password</a>
                        </li>
                    </ul>

					<div class="row">
						<div class="col-lg-2 col-12 mb-4"></div>

						<div class="col-12 col-lg-8">
							<div class="row">
								<div class="col-12 col-lg-3"></div>
								<div class="col-12 col-lg-6">
									<div class="card mb-4">
										<div class="card-body">

											<form>
												<div class="form-group">
													<label for="exampleInputEmail1">Username </label>
													<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
														placeholder="Username or Email Address" />
													<small id="emailHelp" class="form-text text-muted">We'll never share your email
														with anyone else.</small>
												</div>
												<div class="form-group">
													<label for="exampleInputPassword1">Current Password</label>
													<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
												</div>

												<div class="form-group">
													<label for="exampleInputPassword1">New Password</label>
													<input type="password" class="form-control" id="exampleInputPassword2" placeholder="New Password" /> 
												</div>

												<div class="form-group">
													<label for="exampleInputPassword1">Confirm Password</label>
													<input type="password" class="form-control" id="exampleInputPassword3" placeholder="New Password" /> 
												</div>


												<button type="submit" class="btn btn-primary mb-0">Update Now</button>
											</form>

										</div>
									</div>

								</div>
								<div class="col-12 col-lg-3"></div>
							</div>

						</div>

						<div class="col-lg-2 col-12 mb-4"></div>
					</div>

                </div>
            </div>
        </div>

        <SettingsRightSubmenu />


    </div>
  )
}

export default accountPasswordSetting;