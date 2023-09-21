import "./index.scss"
import React from "react"
import ReactPlayer from "react-player"
import Insta1 from "../../assets/images/insta-1.jpeg"
import Insta2 from "../../assets/images/insta-2.jpeg"
import Insta3 from "../../assets/images/insta-3.jpeg"
import Insta4 from "../../assets/images/insta-4.jpeg"
import Insta5 from "../../assets/images/insta-5.jpeg"
import Insta6 from "../../assets/images/insta-6.jpeg"
import Insta7 from "../../assets/images/insta-7.jpeg"
import Insta8 from "../../assets/images/insta-8.jpeg"
import Insta9 from "../../assets/images/insta-9.jpeg"
import Insta10 from "../../assets/images/insta-10.jpeg"
import Insta11 from "../../assets/images/insta-11.jpeg"
import Insta12 from "../../assets/images/insta-12.jpeg"


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
        <div className="gallery gallery-instagram">
            <img src={Insta1} />
            <img src={Insta2} />
            <img src={Insta3} />
            <img src={Insta4} />
            <img src={Insta5} />
            <img src={Insta6} />
            <img src={Insta7} />
            <img src={Insta8} />
            <img src={Insta9} />
            <img src={Insta10}  />
            <img src={Insta11}  />
            <img src={Insta12}  />
        </div>
    </div>
    )
}

export default Gallery