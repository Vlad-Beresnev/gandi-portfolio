import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Work1 from "../../assets/images/work-1.png"
import Work2 from "../../assets/images/work-2.png"
import Work3 from "../../assets/images/work-3.png"
import Work4 from "../../assets/images/gandi-artist3.jpeg"
import Work5 from "../../assets/images/work-5.png"
import Work6 from "../../assets/images/work-6.png"
import Work7 from "../../assets/images/work-7.png"
import Work8 from "../../assets/images/work-8.png"
import Work9 from "../../assets/images/work-9.png"
import Work10 from "../../assets/images/work-10.png"
import Footer from "../../components/Footer"


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    

    return (
        <div id="work" className='work'>
            <div className='logo logo-black'>
                    <a className='logo-home' href="/" style={{color: "#fff"}}>Sugandi Moenthe</a>
                    <p className='logo-about' href="/work" style={{color: "#fff"}}>Work</p>
            </div>
            <h1 className='title'><AnimatedLetters letterClass={letterClass} strArray={['S', 'o', 'n', 'g', 's', ' ', '&', ' ', 'C', 'o', 'v', 'e', 'r', 's']} idx={15} /></h1>
            <div className='work-container'>
                <div className='work-item work-item-1'>
                    <img src={Work4} />
                </div>
                <div className='work-item work-item-2'>
                <a href="https://youtu.be/ecsxEAx4aM4?si=Gm7-dTl5ndt8vA_B"><button class="uiverse">
    <div class="wrapper">
        <span>Listen now!</span>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
    </div>
</button></a>
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-2'>
                <a href="https://youtu.be/9nZFCH81TOU?si=CV3Ht6aTldGHlEUb"><button className="button-89" role="button">Listen now!</button></a>
                </div>
                <div className='work-item work-item-1'>
                    <img src={Work1} />
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-2'>
                    <img src={Work2} />
                </div>
                <div className='work-item work-item-1'>
                <a href="https://youtu.be/tjS8dwVy45g?si=VC-0-webOpRI8BEY"><button className="button-56" role="button">Listen now!</button></a>
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-2'>
                <a href="https://youtu.be/p4RAbw_iLL0?si=kZ7eM_HOHghlGANK"><button className="button-74" role="button">Listen now!</button></a>
                </div>   
                <div className='work-item work-item-1'>
                    <img src={Work3} />
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'>
                    <img src={Work5} />
                </div>
            <div className='work-item work-item-2'>
            <a href="https://youtu.be/CneJXW9chhM?si=2hOUJgJ28lCtR8M-"><button className="button-74" role="button">Listen now!</button></a></div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'>
                <a href="https://youtu.be/d4AQPJy0YXM?si=y3GJZOzVgYp6AJ3I"><button className="button-53" role="button">Listen now!</button></a>
                </div>
                <div className='work-item work-item-2'>
                <img src={Work6} />
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'>
                <img src={Work7} />
                </div>
                <div className='work-item work-item-2'>
                <a href="https://youtu.be/PmSjOF8cWPY?si=f0zf_gOEcPiupoAD"><button className="button-89" role="button">Listen now!</button></a>
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'>
                <a href="https://youtu.be/V1UT17hSflo?si=YLwCQF3PG0Ic2kl6"><button class="uiverse">
    <div class="wrapper">
        <span>Listen now!</span>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
    </div>
</button></a>
                </div>
                <div className='work-item work-item-2'>
                <img src={Work8} />
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'>
                <img src={Work9} />
                </div>
                <div className='work-item work-item-2'>
                <a href="https://youtu.be/6YuwooKgmDE?si=bSCtXMcJ1ApLXA9S"><button className="button-53" role="button" >Listen now!</button></a>
                </div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'>
                <a href="https://youtu.be/Cxfu_mc2SnI?si=TWatdvSvCwMMSs18"><button className="button-89" role="button">Listen now!</button></a>
                </div>
                <div className='work-item work-item-2'>
                <img src={Work10} alt='work 10' />
                </div>
            </div>
            <Loader type="line-scale-pulse-out" />
            <section id="contact" className='container footer'>
                <Footer />
            </section>
        </div>
    )
}

export default Contact