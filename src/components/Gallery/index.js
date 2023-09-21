import "./index.scss"
import React from "react"
import ReactPlayer from "react-player"



const Gallery = () => {


    return (
        <div className="box">
        <div className="gallery gallery-youtube">
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/Cxfu_mc2SnI?si=J2-x-Cie_BDqdN5F" youtube width="100%" />
            </div>
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/6YuwooKgmDE?si=7i3MsjQUj2mHpBzb" width="100%"/>
            </div>
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/PI5vSs3NZhA?si=gs5fSa8yoUWUS5Jv" width="100%"/>
            </div>
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/Eju8bb5a8lo?si=xQGExJyacD9vJRSy" width="100%"/>
            </div>
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/PmSjOF8cWPY?si=Bf6h3NiPHMg2zN0c" width="100%"/>
            </div>
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/Nrp8nMBNY4o?si=jh6psLWNeylUrJJA" width="100%"/>
            </div>
        </div>
        <h2 className="container title title-instagram">Instagram</h2>
        <div className="gallery gallery-intagram">
            
        </div>
    </div>
    )
}

export default Gallery