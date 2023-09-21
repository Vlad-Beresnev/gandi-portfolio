import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    

    return (
        <div className='work'>
            <div className='logo'>
                    <a className='logo-home' href="/" style={{color: "#fff"}}>Sugandi Moenthe</a>
                    <p className='logo-about' href="/contact" style={{color: "#fff"}}>Work</p>
            </div>
            <h1 className='title'><AnimatedLetters letterClass={letterClass} strArray={['S', 'o', 'n', 'g', 's', ' ', '&', ' ', 'C', 'o', 'v', 'e', 'r', 's']} idx={15} /></h1>
            <div className='work-container'>
                <div className='work-item work-item-1'></div>
                <div className='work-item work-item-2'></div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'></div>
                <div className='work-item work-item-2'></div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'></div>
                <div className='work-item work-item-2'></div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'></div>
                <div className='work-item work-item-2'></div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'></div>
                <div className='work-item work-item-2'></div>
            </div>
            <div className='work-container'>
                <div className='work-item work-item-1'></div>
                <div className='work-item work-item-2'></div>
            </div>
            <Loader type="line-scale-pulse-out" />
        </div>
    )
}

export default Contact