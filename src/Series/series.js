import React from 'react'
import '../Home/home.css'
import Loading from'../Componenets/loading'
import { useState, useEffect } from 'react';


const Series = ({data:  { entries}}) => {
    if(!entries){
        return <Loading/>;
    }
    // const [count, setCount] = useState(0);
    // const [newEntries, setNewEntries] = useState([]);
    
    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }

 
   

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
                            
                            return <div className="card">
                            <img src= "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" alt="" />
                            <p>{entry.title}</p>
                        </div>
                            
                        }
                        
                    }
                })
               
                
            } 
            <div className="margin"></div>
                
            </div>
        </div>
    )
}

export default Series;