import React from 'react'
import '../Home/home.css'
import { useState, useEffect } from 'react';


const Series = ({data:  { entries}}) => {
    const [count, setCount] = useState(0);


    console.log(entries);

    return (
        
        <div>
            <div className="header2">
                <p>Popular Series</p>
            </div>

            <div className="container">
            {
               
                entries.map((entry) => {
                        if(entry.releaseYear>=2010 ){
                            if(entry.programType==='series'){
                                console.log(entry.title);
                                // console.log(count);
                                // setCount(count+1);
                                return <p>{entry.title}</p>
                            }
                }
            
        
                }) 
                
            } 
                
            </div>
        </div>
    )
}

export default Series;