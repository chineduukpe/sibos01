import React from 'react'

import SettingsRightSubmenu from './settings-right-submenu'

function changeAvatarSetting() {
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
                                aria-controls="first" aria-selected="true">Select Avatar | Upload Profile Picture.</a>
                        </li>
                    </ul>

					<div className="row">
						<div className="col-lg-2 col-12 mb-4"></div>

						<div className="col-12 col-lg-8">

							<div className="card mb-4">
								<div className="card-body">

									<div className="row">
										<div className="col-lg-4 col-12 mb-4">
											<div className="card mb-4">
												<img src="img/detail.jpg" alt="Detail Picture" className="card-img-top" />
											</div>

										</div>

										<div className="col-12 col-lg-8">
											<form action="/file-upload">
												<div className="dropzone"></div>

												<button type="submit" className="btn btn-primary mb-0" >Update Avatar Now</button>
											</form>
										</div>
									</div>

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

export default changeAvatarSetting;