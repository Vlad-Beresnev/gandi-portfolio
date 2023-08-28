import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
        const [letterClass, setLetterClass] = useState('text-animate');
        const nameArray = ['S', 'u', 'g', 'a', 'n', 'd', 'i', '', 'M', 'o', 'e', 'n', 't', 'h', 'e'];
        const jobArray = [ 's', 'a', 'l', 'e', 'r'];
    
       

    return (
        <>
        
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                
                </h1>
                <h2>All the time God is very good!</h2>
                <Link to="/contact" className='flat-buttom'>CONTACT ME</Link>
            </div>
            
        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    );

}

export default Home