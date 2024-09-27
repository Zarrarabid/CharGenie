import { create } from "zustand";
import {
    accessory1,
    accessory2,
    accessory3,
    accessory4,
    accessory5,
    ears1,
    ears2,
    ears3,
    ears4,
    ears5,
    eyes1,
    eyes2,
    eyes3,
    eyes4,
    eyes5,
    eyes6,
    hair1,
    hair2,
    hair3,
    hair4,
    hair5,
    hair6,
    mouth1,
    mouth2,
    mouth3,
    mouth4,
    mouth5,
    mouth6,
    nose1,
    nose2,
    nose3,
    nose4,
    nose5,
    nose6,
} from "../assets/customize-look-preview-icons-right-side/index"
import {
    leftsideaccessory1,
    leftsideaccessory2,
    leftsideaccessory3,
    leftsideaccessory4,
    leftsideaccessory5,
    leftsideears1,
    leftsideears2,
    leftsideears3,
    leftsideears4,
    leftsideears5,
    leftsideeyes1,
    leftsideeyes2,
    leftsideeyes3,
    leftsideeyes4,
    leftsideeyes5,
    leftsideeyes6,
    leftsidehair1,
    leftsidehair2,
    leftsidehair3,
    leftsidehair4,
    leftsidehair5,
    leftsidehair6,
    leftsidemouth1,
    leftsidemouth2,
    leftsidemouth3,
    leftsidemouth4,
    leftsidemouth5,
    leftsidemouth6,
    leftsidenose1,
    leftsidenose2,
    leftsidenose3,
    leftsidenose4,
    leftsidenose5,
    leftsidenose6,
} from "../assets/character-images-left-side/index"


const RenderSvgsArr = [{
    Hair: [
        {
            leftSideSvg: leftsidehair1,
            rightSideSvg: hair1
        },
        {
            leftSideSvg: leftsidehair2,
            rightSideSvg: hair2
        },
        {
            leftSideSvg: leftsidehair3,
            rightSideSvg: hair3
        },
        {
            leftSideSvg: leftsidehair4,
            rightSideSvg: hair4
        },
        {
            leftSideSvg: leftsidehair5,
            rightSideSvg: hair5
        },
        {
            leftSideSvg: leftsidehair6,
            rightSideSvg: hair6
        }],
    Eyes: [
        {
            leftSideSvg: leftsideeyes1,
            rightSideSvg: eyes1
        },
        {
            leftSideSvg: leftsideeyes2,
            rightSideSvg: eyes2
        },
        {
            leftSideSvg: leftsideeyes3,
            rightSideSvg: eyes3
        },
        {
            leftSideSvg: leftsideeyes4,
            rightSideSvg: eyes4
        },
        {
            leftSideSvg: leftsideeyes5,
            rightSideSvg: eyes5
        },
        {
            leftSideSvg: leftsideeyes6,
            rightSideSvg: eyes6
        }],
    Ears: [
        {
            leftSideSvg: leftsideears1,
            rightSideSvg: ears1
        },
        {
            leftSideSvg: leftsideears2,
            rightSideSvg: ears2
        },
        {
            leftSideSvg: leftsideears3,
            rightSideSvg: ears3
        },
        {
            leftSideSvg: leftsideears4,
            rightSideSvg: ears4
        },
        {
            leftSideSvg: leftsideears5,
            rightSideSvg: ears5
        }],
    Nose: [
        {
            leftSideSvg: leftsidenose1,
            rightSideSvg: nose1
        },
        {
            leftSideSvg: leftsidenose2,
            rightSideSvg: nose2
        },
        {
            leftSideSvg: leftsidenose3,
            rightSideSvg: nose3
        },
        {
            leftSideSvg: leftsidenose4,
            rightSideSvg: nose4
        },
        {
            leftSideSvg: leftsidenose5,
            rightSideSvg: nose5
        },
        {
            leftSideSvg: leftsidenose6,
            rightSideSvg: nose6
        }],
    Mouth: [
        {
            leftSideSvg: leftsidemouth1,
            rightSideSvg: mouth1
        },
        {
            leftSideSvg: leftsidemouth2,
            rightSideSvg: mouth2
        },
        {
            leftSideSvg: leftsidemouth3,
            rightSideSvg: mouth3
        },
        {
            leftSideSvg: leftsidemouth4,
            rightSideSvg: mouth4
        },
        {
            leftSideSvg: leftsidemouth5,
            rightSideSvg: mouth5
        },
        {
            leftSideSvg: leftsidemouth6,
            rightSideSvg: mouth6
        }],
    Background: [
        {
            leftSideSvg: "#FF8A8A",
            rightSideSvg: "#FF8A8A"
        },
        {
            leftSideSvg: "#D1E9F6",
            rightSideSvg: "#D1E9F6"
        },
        {
            leftSideSvg: "#987D9A",
            rightSideSvg: "#987D9A"
        },
        {
            leftSideSvg: "#FFE9D0",
            rightSideSvg: "#FFE9D0"
        },
        {
            leftSideSvg: "#91DDCF",
            rightSideSvg: "#91DDCF"
        },
        {
            leftSideSvg: "#B5C0D0",
            rightSideSvg: "#B5C0D0"
        }],
    Accessories: [
        {
            leftSideSvg: leftsideaccessory1,
            rightSideSvg: accessory1
        },
        {
            leftSideSvg: leftsideaccessory2,
            rightSideSvg: accessory2
        },
        {
            leftSideSvg: leftsideaccessory3,
            rightSideSvg: accessory3
        },
        {
            leftSideSvg: leftsideaccessory4,
            rightSideSvg: accessory4
        },
        {
            leftSideSvg: leftsideaccessory5,
            rightSideSvg: accessory5
        }],
}]

let random = 0

const RenderSvgs = () => {
    return RenderSvgsArr
}
const handleRandomize = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    if (random === randomNumber) {
        if (randomNumber === 5) {
            randomNumber = 4
        }
        else {
            randomNumber++
        }
    }
    random = randomNumber <= 5 ? randomNumber : randomNumber - 1
    return [
        {
            category: "Hair",
            selectedSvg: RenderSvgsArr[0]["Hair"]?.[randomNumber]?.leftSideSvg
        },
        {
            category: "Eyes",
            selectedSvg: RenderSvgsArr[0]["Eyes"]?.[randomNumber]?.leftSideSvg
        },
        {
            category: "Ears",
            selectedSvg: RenderSvgsArr[0]["Ears"]?.[randomNumber]?.leftSideSvg
        },
        {
            category: "Nose",
            selectedSvg: RenderSvgsArr[0]["Nose"]?.[randomNumber]?.leftSideSvg
        },
        {
            category: "Mouth",
            selectedSvg: RenderSvgsArr[0]["Mouth"]?.[randomNumber]?.leftSideSvg
        },
        {
            category: "Background",
            selectedSvg: RenderSvgsArr[0]["Background"]?.[randomNumber]?.leftSideSvg
        },
        {
            category: "Accessories",
            selectedSvg: RenderSvgsArr[0]["Accessories"]?.[randomNumber]?.leftSideSvg
        },
    ]
}

const SelectedStyle = create((set) => ({
    selectedOption: "",
    styleOptions: ["Hair", "Eyes", "Ears", "Nose", "Mouth", "Background", "Accessories"],
    renderSvgs: [],
    customizebg: "#FF8A8A",
    maintainView: [
        {
            category: "Hair",
            selectedSvg: leftsidehair1
        },
        {
            category: "Eyes",
            selectedSvg: leftsideeyes1
        },
        {
            category: "Ears",
            selectedSvg: leftsideears1
        },
        {
            category: "Nose",
            selectedSvg: leftsidenose1
        },
        {
            category: "Mouth",
            selectedSvg: leftsidemouth1
        },
        {
            category: "Accessories",
            selectedSvg: leftsideaccessory1
        },
    ],
    screen: 0,
    setSelectedOption: (option) => set(() => ({ selectedOption: option })),
    setRenderOption: () => set(() => ({ renderSvgs: RenderSvgs() })),
    setCustomizebg: (image) => set(() => ({ customizebg: image })),
    setMaintainView: (value) => set(() => ({ maintainView: value })),
    setRandomView: () => set(() => ({ maintainView: handleRandomize() })),
    setScreen: (value) => set(() => ({ screen: value }))
}))

export {
    SelectedStyle
}