import React from 'react';
import './DoubleImage.css'

function DoubleImage() {
    // Image consts

    const [img1, setImg1] = React.useState("")
    const [img2, setImg2] = React.useState("")
    const [img3, setImg3] = React.useState("")
    const [img4, setImg4] = React.useState("")
    const [img5, setImg5] = React.useState("")
    const [width, setWidth] = React.useState(160)
    const [height, setHeight] = React.useState(160)

    // Configurations in link

    React.useEffect(()=>{
        const img1QueryUrl = new URLSearchParams(window.location.search)
        const img1Query = img1QueryUrl.get("img1")
        setImg1(img1Query)
    }, [])

    React.useEffect(()=>{
        const img2QueryUrl = new URLSearchParams(window.location.search)
        const img2Query = img2QueryUrl.get("img2")
        setImg2(img2Query)
    }, [])

    React.useEffect(()=>{
        const img3QueryUrl = new URLSearchParams(window.location.search)
        const img3Query = img3QueryUrl.get("img3")
        setImg3(img3Query)
    }, [])

    React.useEffect(()=>{
        const img4QueryUrl = new URLSearchParams(window.location.search)
        const img4Query = img4QueryUrl.get("img4")
        setImg4(img4Query)
    }, [])

    React.useEffect(()=>{
        const img5QueryUrl = new URLSearchParams(window.location.search)
        const img5Query = img5QueryUrl.get("img5")
        setImg5(img5Query)
    }, [])

    React.useEffect(()=>{
        const widthQueryUrl = new URLSearchParams(window.location.search)
        const widthQuery = widthQueryUrl.get("width")
        setWidth(widthQuery)
    }, [])

    React.useEffect(()=>{
        const heightQueryUrl = new URLSearchParams(window.location.search)
        const heightQuery = heightQueryUrl.get("height")
        setHeight(heightQuery)
    }, [])

    return (
        img1 ? (
            <div className="di1">
                <img src={img1} width={width} height={height}/>
                <img src={img2} width={width} height={height}/>
                <img src={img3} width={width} height={height}/>
                <img src={img4} width={width} height={height}/>
                <img src={img5} width={width} height={height}/>
                <p>You can use a screenshoter for screenshot the 5 or other count images.</p>
            </div>
        ) : (
            <div className="di-1">
                <p>You must type the first image in the link.</p>
                <p>Page in development, you can type the link of the image.</p>
            </div>
        )
    )
}

export default DoubleImage;