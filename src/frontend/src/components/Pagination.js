import React from "react";

function Pagination({totalData, dataPerPage}) {
  return (
    <div id="paginate">
      <nav aria-label="...">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
