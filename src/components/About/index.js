import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faHtml5, faCss3, faGitAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { NavLink } from 'react-router-dom'
const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

   

    return (
        <>
        <div className='logo'>
                <a className='logo-home' href="/">Sugandi Moenthe</a>
                <a className='logo-about' href="/about">About</a>
        </div>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Fast learner, working with a variety of personalities, nationalities, and backgrounds. Hard working, persistent, self-motivated, honest and tough.</p>
                <p>Quick to grasp new concepts, adept at collaborating with individuals from diverse personalities, nationalities, and backgrounds. Diligent in effort, showing unwavering determination and intrinsic motivation, maintaining a strong sense of integrity and resilience.</p>
                <p>Rapidly adaptive to new information, skilled in harmonizing with a multitude of characters, cultures, and experiences. Displaying dedicated industriousness, consistent perseverance, internal drive, unquestionable honesty, and remarkable strength.</p>
            </div>  

            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className='facel'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

        </div>
        <Loader type="pacman" />
        </>

    )


}

export default About