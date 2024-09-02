import React from 'react'
import AvatarImage from "../assets/character-images-left-side/default/basic-character.png"
import { SelectedStyle } from '../Store/StateManagement'
function Avatar() {
    const maintainView = SelectedStyle((state) => state.maintainView)
    return (
        <div style={{ width: "500px", height: "500px", position: "relative" }}>
            <img style={{ width: "500px", height: "500px" }} src={AvatarImage} alt="sample" />
            {maintainView?.map((item, index) => {
                return (
                    <img key={index}
                        style={{
                            width: "500px",
                            height: "500px",
                            position: "absolute",
                            left: "0px",
                            right: "0px",
                            zIndex: item?.category === "Accessories" ? "2" : "1",
                        }}
                        src={item?.selectedSvg} alt={`Svg${index}`} />
                )
            })
            }
        </div>
    )
}

export default Avatar