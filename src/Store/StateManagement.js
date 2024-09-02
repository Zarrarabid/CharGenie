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

const RenderSvgs = () => {
    return [{
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
        // Background: [bac, hair2, hair3, hair4, hair5, hair6],
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
}
const handleMaintainView = (value) => {
    return value
}

const SelectedStyle = create((set) => ({
    selectedOption: "",
    styleOptions: ["Hair", "Eyes", "Ears", "Nose", "Mouth", "Background", "Accessories"],
    renderSvgs: [],
    customizeImage: "",
    maintainView: [],
    setSelectedOption: (option) => set(() => ({ selectedOption: option })),
    setRenderOption: () => set(() => ({ renderSvgs: RenderSvgs() })),
    setCustomizeImage: (image) => set(() => ({ customizeImage: image })),
    setMaintainView: (value) => set(() => ({ maintainView: handleMaintainView(value) }))
}))

export {
    SelectedStyle
}