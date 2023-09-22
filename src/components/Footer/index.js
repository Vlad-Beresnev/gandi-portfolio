import "./index.scss"
import React, {useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import AnimatedLetters from '../AnimatedLetters';


const Footer = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
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
        <div className="footer">
            <div className=''>
                    <section >
                        <div className='contact-page'>
                            <div className='text-zone'>
                                <h1>
                                    <AnimatedLetters 
                                    letterClass={letterClass}
                                    strArray={["G", "e", "t", " ", "i", "n", " ", "t", "o", "u", "c", "h"]}
                                    idx={15} />
                                </h1>
                                <div className='contact-form'>
                                    <form ref={refForm} onSubmit={sendEmail}>
                                        <ul>
                                            <li className='half' style={{color: "#000"}}>
                                                <input type="text" name="name" placeholder="Name" required/>
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
                                                 <br />
                                                <button type="submit" className="flat-button button-53" role="button" >SEND</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    )
}

export default Footer;