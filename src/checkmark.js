import React from "react";
import { useEffect, useState } from 'react';

function MultipleSelectCheckmarks({datas,addfilter}){

    const [value,setvalue]=useState([])
    const [ischecked ,setcheck]=useState(true)

    useEffect(()=>{
        addfilter(value)
    },[value])

    function senddata(e) {
        if(e.target.checked){
            setvalue([...value,[e.target.getAttribute("content"),e.target.getAttribute("data")]])
        }
        else {
            setvalue(value.filter(id=>id[1]!==e.target.getAttribute("data")))
        }
        // do whatever you want with isChecked value
      }

    return(
        <div>
            {datas.map(data=>{
                return(
                    <div>
                        <input name="scales" class="form-check-input" type="checkbox" content={data[0]} data={data[1]} value={ischecked} onChange={e=>{senddata(e);setcheck(e.target.checked)}} ></input>
                        <label for="scales" className="property" id={data}>{data[1]}({data[2]})</label>
                    </div>
                )
            })}
        </div>
        
    )
}

export default MultipleSelectCheckmarks;