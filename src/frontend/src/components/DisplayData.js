import React from 'react'
import DisplayContent from './DisplayContent';
export default function DisplayData(props) {
    return (
                <div className="row ">
                 {
                  props.allData.length  && props.allData.map(data => 
                  
                        <div key={data.id} className = "col-2">
                        <DisplayContent data = {data} reqParams = {props.reqParams} />
                        </div>
                    )       
                 }
                </div>
    )
}
