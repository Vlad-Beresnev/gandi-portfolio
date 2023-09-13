import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import GandiPhoto from "../../assets/images/gandi-2.png"
import JohnSmith from "../../assets/images/john-smith.jpeg"
import Gallery from "../../components/Gallery"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"


const Home = () => {
        const [letterClass, setLetterClass] = useState('text-animate');
        const nameArray = ['G', 'a', 'n', 'd', 'i', '', 'M', 'o', 'e', 'n', 't', 'h', 'e'];
        const jobArray = [ 's', 'a', 'l', 'e', 'r'];
        const calculatePages = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1157 & screenWidth > 799 ) {
                return 3;
            } if (screenWidth < 777) {
                return 4;
            } else {
                return 2;
            }
        }
    
        useEffect(() => {
            const handleResize = () => {
                setPages(calculatePages());
            };
    
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }, []);

    const [pages, setPages] = useState(calculatePages());
        
    return (
        <>
            <div className='home'>
                <section className="container home-page">
                    <div className='main-photo'>
                        <img src={GandiPhoto} alt="gandi" />
                    </div>
                    <div className="text-zone">
                        <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}/>
                        
                        </h1>
                        {/*<h2>All the time God is very good!</h2>*/}
                        <Link to="/contact" className='flat-buttom'>CONTACT ME</Link>
                    </div>
                </section>
                <section className='container gallery'>
                    <Gallery />
                </section>
                <section className='container about'>
                    <h1 className='title'>About</h1>
                    <p>John Smith is a seasoned entrepreneur and visionary 
                        leader with a passion for innovation and technology. 
                        Born in a small town in the heartland of America, 
                        he always dreamed of making a big impact on the world.
                        His journey began with a curiosity about computers at an early age, 
                        leading him to pursue a degree in computer science.
                    </p>
                    <img src={JohnSmith} alt="John Smith"/>
                </section>
                <Loader type="line-scale-pulse-out" />
            </div>
        </>
    );

}

export default Home