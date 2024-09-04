import React from 'react'
import AvatarImage from "../assets/character-images-left-side/default/basic-character.png"
import { SelectedStyle } from '../Store/StateManagement'
function Avatar() {
    let maintainView = SelectedStyle((state) => state.maintainView)
    return (
        <div style={{ width: "500px", height: "500px", position: "relative" }}>
            <img style={{ width: "500px", height: "500px" }} src={AvatarImage} alt="sample" />
            {maintainView?.filter((ele) => ele?.category !== "Background")?.map((item, index) => {
                return (
                    <img key={index}
                        className='animate__animated animate__fadeIn'
                        style={{
                            width: "500px",
                            height: "500px",
                            position: "absolute",
                            left: "0px",
                            right: "0px",
                            zIndex: item?.category === "Accessories" || item?.category === "Ears" ? "2" : "1",
                        }}
                        src={item?.selectedSvg} alt='test' />
                )
            })
            }
        </div>
    )
}

export default Avatar