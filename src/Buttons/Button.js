import React from 'react'
import { SelectedStyle } from '../Store/StateManagement'

function Button() {
    const setSelectedVal = SelectedStyle((state) => state.setSelectedOption)
    const setRenderOption = SelectedStyle((state) => state.setRenderOption)
    const styleOptions = SelectedStyle((state) => state.styleOptions)
    return (
        <div className='d-flex flex-wrap gap-3'>
            {styleOptions?.map((item, index) => {
                return (
                    <button onClick={() => {
                        setSelectedVal(item)
                        setRenderOption(item)
                    }} key={index} className='OptionBtn rounded-5 mx-2'>
                        {item}
                    </button>
                )
            })}
        </div>
    )
}

export default Button