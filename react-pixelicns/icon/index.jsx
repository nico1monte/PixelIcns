import React from 'react';

// Configurations

const width = React.useState(160)
const height = React.useState(160)
const titleProp = React.useState("")
const altProp = React.useState("")

// Icons that exists in the repository
// GitHub

export default function GitHub() {
    return (
        <div className="GitHubIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/github.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 1

export default function One() {
    return (
        <div className="OneIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/1.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 2

export default function Two() {
    return (
        <div className="TwoIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/2.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 3

export default function Three() {
    return (
        <div className="ThreeIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/3.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 4

export default function Four() {
    return (
        <div className="FourIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/4.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 5

export default function Five() {
    return (
        <div className="FiveIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/5.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 6

export default function Six() {
    return (
        <div className="SixIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/6.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 7

export default function Seven() {
    return (
        <div className="SevenIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/7.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 8

export default function Eight() {
    return (
        <div className="EightIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/8.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 9

export default function Nine() {
    return (
        <div className="NineIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/9.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// 0

export default function Zero() {
    return (
        <div className="ZeroIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/0.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// Ableton Live 12

export default function AL12() {
    return (
        <div className="AL12Icon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/abletonlive12.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// Microsoft

export default function Microsoft() {
    return (
        <div className="MicrosoftIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/refs/heads/main/icons/png/microsoft.png" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// Void

export default function Void() {
    return (
        <div className="NullIcon">
            <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/ae8d65c55be8c330ff370c21d72c9c544dd070c4/icons/svg/void.svg" width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}

// Custom

export default function CustomIcon(icon) {
    return (
        <div className="CustomIcon">
            <img src={icon} width={width} height={height} title={titleProp} alt={altProp}/>
        </div>
    )
}