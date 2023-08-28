import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
        const [letterClass, setLetterClass] = useState('text-animate');
        const nameArray = [' ', 'G', 'a', 'n', 'd', 'i'];
        const jobArray = [ 's', 'a', 'l', 'e', 'r'];
    
       

    return (
        <>
        <div className='logo'>
                <a >Sugandi Moenthe</a>
            </div>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Coach / Team Leader / Fundraiser / Saler</h2>
                <Link to="/contact" className='flat-buttom'>CONTACT ME</Link>
            </div>
            
        </div>
        <Loader type="pacman" />
        </>
    );

}

export default Home