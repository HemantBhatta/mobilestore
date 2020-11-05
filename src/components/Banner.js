import React from 'react'
import ButtonContainer from './ButtonContainer'

function Banner({title, description,children}) {
    return (
        <div className='outBanner'>
            <div className="inBanner">
                <h4>{title}</h4>
                <div/>
                <p>{description}</p>
                {children}
   
            </div>
        </div>
    )
}

export default Banner
