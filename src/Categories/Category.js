import React from 'react'
import { SelectedStyle } from '../Store/StateManagement'
import "./styles.css"

function Category() {
    const renderSvgs = SelectedStyle((state) => state.renderSvgs)
    const selectedOption = SelectedStyle((state) => state.selectedOption)
    const setCustomizebg = SelectedStyle((state) => state.setCustomizebg)
    const setMaintainView = SelectedStyle((state) => state.setMaintainView)
    const maintainView = SelectedStyle((state) => state.maintainView)
    return (
        <div className='row flex-wrap animate__animated animate__backInUp'>
            {renderSvgs[0]?.[selectedOption]?.map((item, index) => {
                return (
                    // <button key={index}
                    //     onClick={() => {
                    //         setCustomizebg(item)
                    //         if (maintainView?.length > 0) {
                    //             let filterArr = maintainView?.filter((item) => item?.category !== selectedOption)
                    //             let obj = {
                    //                 category: selectedOption,
                    //                 selectedSvg: item?.leftSideSvg
                    //             }
                    //             setMaintainView([...filterArr, obj])
                    //         }
                    //         else {
                    //             let obj = [{
                    //                 category: selectedOption,
                    //                 selectedSvg: item?.leftSideSvg
                    //             }]
                    //             setMaintainView(obj)
                    //         }
                    //     }}
                    //     class="Btn mx-2 col-md-4">
                    //     <span class="svgContainer">
                    //         <img style={{ width: "inherit", height: "inherit" }} src={item?.rightSideSvg} alt={`svg${index}`} />
                    //     </span>
                    //     <span class="BG"></span>
                    // </button>
                    <div key={index}
                        onClick={() => {
                            setCustomizebg(item)
                            if (maintainView?.length > 0) {
                                let filterArr = maintainView?.filter((item) => item?.category !== selectedOption)
                                let obj = {
                                    category: selectedOption,
                                    selectedSvg: item?.leftSideSvg
                                }
                                setMaintainView([...filterArr, obj])
                            }
                            else {
                                let obj = [{
                                    category: selectedOption,
                                    selectedSvg: item?.leftSideSvg
                                }]
                                setMaintainView(obj)
                            }
                        }}
                        style={{
                            height: selectedOption === "Background" ? "120px" : "",
                            backgroundColor: selectedOption === "Background" ? item?.leftSideSvg : ""
                        }}
                        className={selectedOption === "Background" ? "d-flex justify-content-center m-2 btnonBG col-md-2" : 'd-flex justify-content-center m-2 button2 col-md-2'}>
                        {selectedOption !== "Background" &&
                            <img className='px-2' style={{ width: "100%", height: "120px" }} src={item?.rightSideSvg} alt={`svg${index}`} />}
                    </div>
                )
            })}
        </div>
    )
}

export default Category