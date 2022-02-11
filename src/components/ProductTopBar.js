import React from 'react'
import '../styles/ProductTopBar.css'
import SelectButton from './SelectButton'

function ProductTopBar(props) {
    return (
        <div className="ProductTopBar">
            <div>
                <p>{props.title}</p>
            </div>

            <div>
                <SelectButton title='Sort' option={['Best Selling','Alphabetically, A-Z','Alphabetically, Z-A','Price, low to high','Price, high to low','Date, new to old', 'Date, old to new']}/>
            </div>
            
        </div>
    )
}

export default ProductTopBar
