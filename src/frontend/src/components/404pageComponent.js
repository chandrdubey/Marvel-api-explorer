import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="margin-page">
      <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <Link to ="/comics" className="btn btn-link" >
                BacktoHome
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
