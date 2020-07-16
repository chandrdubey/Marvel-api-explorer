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
                <div className="row ">
                 {
                    props.allData.map(data => 
                  
                        <div key={data.id} className = "col-4">
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
