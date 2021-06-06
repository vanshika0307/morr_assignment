import React from 'react'
import './home.css'
import series from '../Assests/images/series.png'
import movies from '../Assests/images/movies.png'
import { Link } from "react-router-dom";

export default function home() {
    return (
        <div>
            <div className="header2">
                <p>Popular Titles</p>
            </div>

            <div className="container">
                <Link to="/series">
                    <div className="series">
                        <img src= {series} alt="" />
                        <p>Popular Series</p>
                    </div>
                </Link>
                <Link to="/movies">
                    <div className="movies">
                        <img src= {movies} alt="" />
                        <p>Popular Movies</p>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
