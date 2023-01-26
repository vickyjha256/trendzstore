import React from 'react'

const Message = () => {
    let red = (e) => {
        document.body.style.backgroundColor = "red"
    }
    let blue = (e) => {
        document.body.style.backgroundColor = "blue"
    }
    return (
        <>
            <div onMouseOut={blue} onTouchMove={red} onMouseMove={red} id='message' className='container-fluid'>
                <h1>Oops!!<br />App is still in development process.<br />😂</h1>
            </div>
        </>
    )
}

export default Message