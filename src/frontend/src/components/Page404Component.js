import React from "react";

const  Page404=()=> {
  
    return (
      <div className=" page-error">
        <div className="page-wrap d-flex flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center error-text">
                <span className="display-1 d-block color-text">404</span>
                <div className="mb-4 lead">
                  The page you are looking for was not found.
                </div>
                <a href="/" className="btn btn-link">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
  
}

export default Page404;
