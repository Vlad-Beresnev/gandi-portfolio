import "./index.scss"
import GandiArtist from "../../assets/images/gandi-artist.jpeg"
import GandiArtist2 from "../../assets/images/gandi-artist2.jpeg"
import GandiArtist3 from "../../assets/images/gandi-artist3.jpeg"
import GandiArtist4 from "../../assets/images/gandi-artist4.jpeg"
import GandiArtist5 from "../../assets/images/gandi-artist5.jpeg"
import {React, useState} from "react"

const Galleryabout = () => {

    const [activeSlide, setActiveSlide] = useState(1)

    const handleSlideClick = (slideNumber) => {
        setActiveSlide(slideNumber);
    }

    

    return(
    <>
    <div className="slider-wrapper">
        <div className="slider">
            <img id="slide-1" src={GandiArtist} alt="first photo" />
            <img id="slide-2" src={GandiArtist2} alt="second photo"/>
            <img id="slide-3" src={GandiArtist3} alt="third photo"/>
            <img id="slide-4" src={GandiArtist4} alt="fourth photo"/>
            <img id="slide-5" src={GandiArtist5} alt="fith photo"/>
        </div>
        <div className="slider-nav">
            <a href="#slide-1" className={activeSlide === 1 ? "active" : ""} onClick={() => handleSlideClick(1)}></a>
            <a href="#slide-2" className={activeSlide === 2 ? "active" : ""} onClick={() => handleSlideClick(2)}></a>
            <a href="#slide-3" className={activeSlide === 3 ? "active" : ""} onClick={() => handleSlideClick(3)}></a>
            <a href="#slide-4" className={activeSlide === 4 ? "active" : ""} onClick={() => handleSlideClick(4)}></a>
            <a href="#slide-5" className={activeSlide === 5 ? "active" : ""} onClick={() => handleSlideClick(5)}></a>

        </div>
    </div>
    </>
    );
}

export default Galleryabout