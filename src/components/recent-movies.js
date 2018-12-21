import React from 'react'

function recentMovies() {
    return (
        <div className='row'>
            <div className="col-12">

                <h1>Recent Movies</h1>
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
            <div className="col-xl-6 col-lg-12 mb-4">
                <div className="card">
                    <div className="position-absolute card-top-buttons">
                        <button className="btn btn-header-light icon-button">
                            <i className="simple-icon-refresh"></i>
                        </button>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Recent Movies</h5>
                        <div className="scroll dashboard-list-with-thumbs">
                            <div className="d-flex flex-row mb-3">
                                <a className="d-block position-relative" href="#">
                                    <img src="img/marble-cake-thumb.jpg" alt="Marble Cake" className="list-thumbnail border-0" />
                                    <span className="badge badge-pill badge-theme-2 position-absolute badge-top-left">NEW</span>
                                </a>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    <a href="#">
                                        <p className="list-item-heading">Marble Cake</p>
                                        <div className="pr-4 d-none d-sm-block">
                                            <p className="text-muted mb-1 text-small">Latashia Nagy - 100-148 Warwick
                                            Trfy, Kansas City, USA</p>
                                        </div>
                                        <div className="text-primary text-small font-weight-medium d-none d-sm-block">09.04.2018</div>
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-row mb-3">
                                <a className="d-block position-relative" href="#">
                                    <img src="img/fruitcake-thumb.jpg" alt="Fruitcake" className="list-thumbnail border-0" />
                                    <span className="badge badge-pill badge-theme-2 position-absolute badge-top-left">NEW</span>
                                </a>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    <a href="#">
                                        <p className="list-item-heading">Fruitcake</p>
                                        <div className="pr-4 d-none d-sm-block">
                                            <p className="text-muted mb-1 text-small">Marty Otte - 166-156 Rue de
                                            Varennes, Gatineau, QC J8T 8G4, Canada</p>
                                        </div>
                                        <div className="text-primary text-small font-weight-medium d-none d-sm-block">09.04.2018</div>
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-row mb-3">
                                <a className="d-block position-relative" href="#">
                                    <img src="img/chocolate-cake-thumb.jpg" alt="Chocolate Cake" className="list-thumbnail border-0" />
                                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">PROCESS</span>
                                </a>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    <a href="#">
                                        <p className="list-item-heading">Chocolate Cake</p>
                                        <div className="pr-4 d-none d-sm-block">
                                            <p className="text-muted mb-1 text-small">Linn Ronning - Rasen 2-14, 98547
                                            Kühndorf, Germany</p>
                                        </div>
                                        <div className="text-primary text-small font-weight-medium d-none d-sm-block">09.04.2018</div>
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-row mb-3">
                                <a className="d-block position-relative" href="#">
                                    <img src="img/fat-rascal-thumb.jpg" alt="Fat Rascal" className="list-thumbnail border-0" />
                                    <span className="badge badge-pill badge-theme-3 position-absolute badge-top-left">DONE</span>
                                </a>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    <a href="#">
                                        <p className="list-item-heading">Fat Rascal</p>
                                        <div className="pr-4 d-none d-sm-block">
                                            <p className="text-muted mb-1 text-small">Rasheeda Vaquera - 37 Rue des
                                            Grands Prés, 03100 Montluçon, France</p>
                                        </div>
                                        <div className="text-primary text-small font-weight-medium d-none d-sm-block">09.04.2018</div>
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-row mb-3">
                                <a className="d-block position-relative" href="#">
                                    <img src="img/streuselkuchen-thumb.jpg" alt="Streuselkuchen" className="list-thumbnail border-0" />
                                    <span className="badge badge-pill badge-theme-3 position-absolute badge-top-left">DONE</span>
                                </a>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    <a href="#">
                                        <p className="list-item-heading">Streuselkuchen</p>
                                        <div className="pr-4 d-none d-sm-block">
                                            <p className="text-muted mb-1 text-small">Mimi Carreira - 36-71 Victoria
                                            St, Birmingham, UK</p>
                                        </div>
                                        <div className="text-primary text-small font-weight-medium d-none d-sm-block">09.04.2018</div>
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-row mb-3">
                                <a className="d-block position-relative" href="#">
                                    <img src="img/cremeschnitte-thumb.jpg" alt="Cremeschnitte" className="list-thumbnail border-0" />
                                    <span className="badge badge-pill badge-theme-3 position-absolute badge-top-left">DONE</span>
                                </a>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    <a href="#">
                                        <p className="list-item-heading">Cremeschnitte</p>
                                        <div className="pr-4 d-none d-sm-block">
                                            <p className="text-muted mb-1 text-small">Lenna Majeed - 6 Hertford St
                                            Mayfair, London, UK</p>
                                        </div>
                                        <div className="text-primary text-small font-weight-medium d-none d-sm-block">09.04.2018</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default recentMovies;