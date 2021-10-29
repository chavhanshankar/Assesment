import React from 'react'
import {useState} from 'react'

function DigitalItems() {
    const [background,setBackground] = useState("EA1919")

    const setStyle = (background) => {
        setBackground(background)
    }

    return (
        <div>
            <div className="wrapper">
                <button className="digital-numbers" style={{backgroundColor:background}} onClick={() => setStyle("33EA19")}>01</button>
                <div className="digital-items">Digital Input-1</div>
            </div>
        </div>
    )
}

export default DigitalItems
