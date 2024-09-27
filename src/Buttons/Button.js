import React, { useEffect, useState } from 'react'
import { SelectedStyle } from '../Store/StateManagement'

function Button() {
    const setSelectedVal = SelectedStyle((state) => state.setSelectedOption)
    const selectedVal = SelectedStyle((state) => state.selectedOption)
    const setRenderOption = SelectedStyle((state) => state.setRenderOption)
    const styleOptions = SelectedStyle((state) => state.styleOptions)

    return (
        <div className='d-flex flex-wrap gap-3'>
            {styleOptions?.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => {
                            setSelectedVal(item)
                            setRenderOption(item)
                        }}
                        className='OptionBtn rounded-5 mx-2 col-md-3 col-sm-3 col-12'
                        style={{
                            backgroundColor: selectedVal === item ? "#CCA8E9" : ""
                        }}
                    >
                        {item}
                    </button>
                )
            })}
        </div>
    )
}

export default Button