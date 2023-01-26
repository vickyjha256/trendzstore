import React from 'react'
import { Link } from 'react-router-dom'

const WomenShoes = (props) => {
    return (
        <>
            <div id='divItem' className='container-fluid'>
                <div className='row'>
                    {props.shoetype.map((element) => {
                        return <div className='col-xxl-3 col-6 my-4' key={element.id}>
                            {/* <img style={{height: "100%", width: "100%"}} src={element.image} alt="" /> */}
                            <div style={{ height: "100%", width: "100%" }} className="card">
                                <img style={{ height: "100%", width: "100%" }} src={element.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.brand}</h5>
                                    <p className="card-text">{element.price}</p>
                                    <Link to="/devinfo" className="btn btn-info buybtn">Buy</Link>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default WomenShoes