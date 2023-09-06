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
                <a className='logo-home' href='/#' style={{color: "#fff"}}>Sugandi Moenthe</a>
                <p className='logo-about' style={{color: "#fff"}}>About</p>
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
        </div>
        <Loader type="line-scale-pulse-out" />
        </>

    )


}

export default About