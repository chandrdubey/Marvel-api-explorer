import React from 'react'
import DisplayContent from './DisplayContent';
export default function DisplayData(props) {
    return (
                <div className="row mx-auto">
                 {
                  props.allData.length  && props.allData.map(data => 
                  
                        <div key={data.id} className =  "card-len">
                        <DisplayContent data = {data} reqParams = {props.reqParams} />
                        </div>
                    )       
                 }
                </div>
    )
}
