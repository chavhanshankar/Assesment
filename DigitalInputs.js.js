import React from 'react'
import './digital-inputs.css'
import DigitalItems from './DigitalItems'

function DigitalInputs() {
    return (
        <React.Fragment>
            <div className="container">
                <DigitalItems/>
                <DigitalItems/>
                <DigitalItems/>
                <DigitalItems/>
                <DigitalItems/>
                <DigitalItems/>
            </div>
        </React.Fragment>
    )
}

export default DigitalInputs
