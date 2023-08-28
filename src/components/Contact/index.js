import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_k39ea78',
                'template_ydq0o2x',
                refForm.current,
                'qXUoNyhFq_4X966TA'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }

    return (
        <>
        <div className='logo'>
                <a className='logo-home' href="/" style={{color: "#fff"}}>Sugandi Moenthe</a>
                <a className='logo-about' href="/contact" style={{color: "#fff"}}>Contact</a>
        </div>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15} />
                </h1>
                <p>
                    I am interested in concert opportunities - especially ambitious or 
                    large projects. However, if you have other request or question, don't
                    hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" /> 
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Sugandi Moenthe,
                <br />
                Finland,
                Ruutikatu 4, 02650 <br />
                Espoo <br />
                <span>beresnev.explorer@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[60.2239819, 24.8233683]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[60.2239819, 24.8233683]}>
                        <Popup> Gandi lives here, come over for a cup of coffee.</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Contact