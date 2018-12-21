import React from 'react'

const dashboard = () => {
    return (
        <div className="row  ">
            <div className="col-12">

                <h1>Instant Video</h1>
                <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                    <ol className="breadcrumb pt-0">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Library</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <div className="separator mb-5"></div>


            </div>
            <div className="col-lg-12 col-xl-6">

                <div className="icon-cards-row">
                    <div className="owl-container">
                        <div className="owl-carousel dashboard-numbers">
                            <a href="#" className="card">
                                <div className="card-body text-center">
                                    <i className="iconsmind-Start-3"></i>
                                    <p className="card-text mb-0">Instant Videos</p>
                                    <p className="lead text-center">1</p>
                                </div>
                            </a>
                            
                            <a href="#" className="card">
                                <div className="card-body text-center">
                                    <i className="iconsmind-Monitor-Tablet"></i>
                                    <p className="card-text mb-0">TV Channels</p>
                                    <p className="lead text-center">2</p>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card-body text-center">
                                    <i className="iconsmind-Shopping-Cart"></i>
                                    <p className="card-text mb-0">Media Store</p>
                                    <p className="lead text-center">3</p>
                                </div>
                            </a>
                            
                            <a href="#" className="card">
                                <div className="card-body text-center">
                                    <i className="iconsmind-Administrator"></i>
                                    <p className="card-text mb-0">My Files | Medias</p>
                                    <p className="lead text-center">4</p>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card-body text-center">
                                    <i className="iconsmind-Gear-2"></i>
                                    <p className="card-text mb-0">Account Setting</p>
                                    <p className="lead text-center">5</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="card">
                            <div className="position-absolute card-top-buttons">

                                <button className="btn btn-header-light icon-button" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="simple-icon-refresh"></i>
                            </button>

                            <div className="dropdown-menu dropdown-menu-right mt-3">
                                <a className="dropdown-item" href="#">Sales</a>
                                <a className="dropdown-item" href="#">Orders</a>
                                <a className="dropdown-item" href="#">Refunds</a>
                            </div>

                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Currently Showing</h5>
                            <div className="dashboard-line-chart">
                                <canvas id="salesChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default dashboard;