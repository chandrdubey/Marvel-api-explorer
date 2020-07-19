import React from 'react'
import DisplayContent from './DisplayContent';
export default function DisplayData(props) {
    return (
                <div className="row ">
                 {
                    props.allData.map(data => 
                  
                        <div key={data.id} className = "col-3">
                        <DisplayContent data = {data}  />
                        </div>
                    )       
                 }
                </div>
    )
}
