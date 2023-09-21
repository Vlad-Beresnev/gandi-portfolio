import './index.scss'
import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Tour = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div className='tour'>
            <div className='logo logo-black'>
                    <a className='logo-home' href="/" style={{color: "#fff"}}>Sugandi Moenthe</a>
                    <p className='logo-about' href="/contact" style={{color: "#fff"}}>Work</p>
            </div>
            <h1 className='title'><AnimatedLetters letterClass={letterClass} strArray={['L', 'i', 'v', 'e', ' ', 'D', 'a', 't', 'e', 's']} idx={15} /></h1>
            <div className='tour-container'>
                <div className='tour-item tour-item-1'></div>
                <div className='tour-item tour-item-2'></div>
            </div>
        </div>
    )
}

export default Tour;