import React from 'react'
import Loader from 'react-loaders'

const TriBallsLoader = (props) => {
    return (
        <div className='loader-container'>
            <Loader 
                type="ball-triangle-path" 
                color='#42b0f5'
                active 
            />
        </div>
    )
}

export default TriBallsLoader