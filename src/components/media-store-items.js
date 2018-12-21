import React from 'react'

export default function mediaStoreItems(props) {
  return (
    <div className="container-fluid">
            <div className="row  ">
                <div className="col-12">
                    <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol className="breadcrumb pt-0">
                            <li className="breadcrumb-item active" aria-current="page">MEDIA STORE | {props.store_type.replace(/_/g, ' ')}</li>
                        </ol>
                    </nav>
                    <div className="separator mb-5"> </div>
                </div>
                <div className="col-12">
                    Content Here!
                </div>
            </div>
        </div>
  )
}
