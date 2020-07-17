import React from 'react'
import DisplayContent from './DisplayContent';
export default function DisplayData(props) {
    return (
        <>
        <section id="header" className=" d-flex align-items-center">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto">
                <h1>{props.title}</h1> 
                <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="row ">
                 {
                    props.allData.map(data => 
                  
                        <div key={data.id} className = "col-3">
                        <DisplayContent data = {data}  />
                        </div>
                    )       
                 }
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}
