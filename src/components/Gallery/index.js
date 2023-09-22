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
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/3A5kAeqn9Z8?si=9AU9Pa-D-xeQFtft" width="100%"/>
            </div>
            <div className="video">
                <ReactPlayer className="videor" url="https://youtu.be/LSGbEabIs84?si=plIPfcz7gKBrpOlP" width="100%"/>
            </div>
        </div>
        <h2 className="container title title-instagram">Instagram</h2>
        <div className="gallery gallery-instagram">
            <a href="https://www.instagram.com/p/Cq0RiKuIxCY/"><img src={Insta1} /></a>
            <a href="https://www.instagram.com/p/Cq3oGFQItlH/"><img src={Insta2} /></a>
            <a href="https://www.instagram.com/p/CseEgI4o9Kb/"><img src={Insta3} /></a>
            <a href="https://www.instagram.com/p/Cu7snToswur/"><img src={Insta4} /></a>
            <a href="https://www.instagram.com/p/CvR44JHoDv5/?img_index=1"><img src={Insta5} /></a>
            <a href="https://www.instagram.com/p/Cwa52ZjoDpL/"><img src={Insta6} /></a>
            <a href="https://www.instagram.com/p/CnV4tiwPGWG/"><img src={Insta7} /></a>
            <a href="https://www.instagram.com/p/CoUna-nDuvN/"><img src={Insta8} /></a>
            <a href="https://www.instagram.com/p/CMtZa02DHKq/"><img src={Insta9} /></a>
            <a href="https://www.instagram.com/p/CV-n5qqj1yv/"><img src={Insta10}  /></a>
            <a href="https://www.instagram.com/p/CgZwBxCDES5/"><img src={Insta11}  /></a>
            <a href="https://www.instagram.com/p/Cj5fk9FjqQn/?img_index=1"><img src={Insta12}  /></a>
        </div>
    </div>
    )
}

export default Gallery