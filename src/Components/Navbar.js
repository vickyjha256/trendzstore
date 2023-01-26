import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();

    return (
        <>
            <div className="">
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className='container-fluid d-flex justify-content-around'>
                        <Link style={{color: `${location.pathname === "/" ? "aqua": "white"}`, fontWeight: "bolder"}} className="navbar-brand" to="/"><b> Trendz </b></Link>
                        <div className='d-flex justify-content-center'>
                            <Link style={{color: `${location.pathname === "/" ? "aqua": "white"}`, fontWeight: "bolder"}} className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            <Link style={{color: `${location.pathname === "/men" ? "aqua": "white"}`, fontWeight: "bolder"}} className={`nav-link ${location.pathname === "/men" ? "active" : ""}`} aria-current="page" to="/men">Men</Link>
                            <Link style={{color: `${location.pathname === "/women" ? "aqua": "white"}`, fontWeight: "bolder"}} className={`nav-link ${location.pathname === "/women" ? "active" : ""}`} aria-current="page" to="/women">Women</Link>
                            {/* <Link className={`nav-link ${location.pathname === "/kids" ? "active" : ""}`} aria-current="page" to="/kids">Kids</Link> */}
                        </div>
                        <div className='d-flex justify-content-center'>
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </div>
                    </div>
                </nav>


            </div >
        </>
    )
}

export default Navbar;