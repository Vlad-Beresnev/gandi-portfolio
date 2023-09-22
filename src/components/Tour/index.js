import './index.scss'
import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Footer from "../../components/Footer"

const Tour = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div id="tour" className='tour'>
            <div className='logo logo-black'>
                    <a className='logo-home' href="/" style={{color: "#fff"}}>Sugandi Moenthe</a>
                    <p className='logo-about' href="/contact" style={{color: "#fff"}}>Work</p>
            </div>
            <h1 className='title-tour title'><AnimatedLetters letterClass={letterClass} strArray={['L', 'i', 'v', 'e', ' ', 'D', 'a', 't', 'e', 's']} idx={15} /></h1>
            <div className='tour-box'>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>29</h1>
                        <h1 className='date'>Sep</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Leader Bank Pavilion</p>
                        <p className='place city'>Boston, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>2</h1>
                        <h1 className='date'>Oct</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>The Anthem</p>
                        <p className='place city'>Washington, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>5</h1>
                        <h1 className='date'>Oct</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Td Pavilion At The Mann</p>
                        <p className='place city'>Philadephia, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>7</h1>
                        <h1 className='date'>Oct</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Madison Square Garden</p>
                        <p className='place city'>New York, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>11</h1>
                        <h1 className='date'>Oct</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Sound On Sound 2023</p>
                        <p className='place city'>Bridgeport, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>22</h1>
                        <h1 className='date'>Oct</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Red Hat Amphitheater</p>
                        <p className='place city'>Raleigh, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>25</h1>
                        <h1 className='date'>Oct</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Austin City Limits Music</p>
                        <p className='place city'>Austin, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>27</h1>
                        <h1 className='date'>Oct</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>The Criteriun</p>
                        <p className='place city'>Oklahome City, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>3</h1>
                        <h1 className='date'>Nov</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Rogers Arena</p>
                        <p className='place city'>Vancouver, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>9</h1>
                        <h1 className='date'>Nov</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Wamu Theater</p>
                        <p className='place city'>Seattle, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>15</h1>
                        <h1 className='date'>Nov</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Bill Graham Civic Audition</p>
                        <p className='place city'>San Francisco, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
                <div className='tour-container'>
                    <div className='tour-item tour-item-1'>
                        <h1 className='date'>18</h1>
                        <h1 className='date'>Nov</h1>
                    </div>
                    <div className='tour-item tour-item-2'>
                        <p className='place'>Santa Barbara Bowl </p>
                        <p className='place city'>Santa Barbara, United States</p>
                    </div>
                    <div className='tour-item tour-item-3'>
                    <a href="https://www.lippu.fi/en/city/helsinki-22/"><button className="button-89" role="button">Tickets</button></a>
                    </div>
                </div>
            </div>
            <section id="contact" className='container footer'>
                <Footer />
            </section>
        </div>
    )
}

export default Tour;