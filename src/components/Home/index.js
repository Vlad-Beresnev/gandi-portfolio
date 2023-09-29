import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './index.scss';
import "./index-contact.scss"
import Loader from 'react-loaders';
import GandiPhoto from "../../assets/images/gandi-2-crop.png"
import GandiArtist from "../../assets/images/gandi-artist.jpeg"
import GandiArtist2 from "../../assets/images/gandi-artist2.jpeg"
import GandiArtist3 from "../../assets/images/gandi-artist3.jpeg"
import GandiArtist4 from "../../assets/images/gandi-artist4.jpeg"
import GandiArtist5 from "../../assets/images/gandi-artist5.jpeg"
import Gallery from "../../components/Gallery"
import Footer from "../../components/Footer"
import emailjs from "@emailjs/browser"
import AnimatedLetters from '../AnimatedLetters';



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
            <div className='home'>
                <section id="home" className="container home-page">
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
                        <a href="/#contact" className='flat-buttom'>CONTACT ME</a>
                    </div>
                </section>
                <section className='container gallery'>
                    <Gallery />
                </section>
                <section id="about" className='container about'>
                    <h1 className='title'>The Life and Artistry of Gandi Moenthe</h1>
                    <div className='desktop-images'>
                        <img className='image-desktop' width={800} src={GandiArtist} alt="image desktop" />
                        <img className='image-desktop' src={GandiArtist4} alt="image desktop" />
                        <img className='image-desktop' src={GandiArtist3} alt="image desktop" />
                    </div>
                    <p>
                        In the grand tapestry of artistic brilliance, few names shine as brightly as 
                        [Artist's Name], a multifaceted artist and singer whose life story is a mesmerizing 
                        journey through the realms of creativity and innovation. With a voice that resonates 
                        like a celestial melody and an artistic vision that transcends boundaries, 
                        [Artist's Name] has captivated the world with their unparalleled talent.
                    </p>
                    <img className='virgin-images' src={GandiArtist} alt="gandi artist" />
                    <p>
                        Born on [Birth Date] in the picturesque town of [Birthplace], [Artist's Name] showed an early 
                        proclivity for the arts. From their earliest days, the world of music and artistic expression 
                        was an inseparable part of their identity. Surrounded by the enchanting beauty of their hometown, 
                        [Artist's Name] drew inspiration from the natural world, weaving it into their artistic tapestry.
                    </p>
                    <p>
                        [Artist's Name]'s ascent to stardom was a remarkable odyssey marked by 
                        perseverance and an unyielding commitment to their craft. In their formative 
                        years, they honed their musical skills through tireless practice, immersing 
                        themselves in the melodies of classical masters and the avant-garde creations 
                        of contemporary artists.
                    </p>
                    <p>
                        It was in the intimate confines of local talent shows and school choir 
                        performances that [Artist's Name]'s extraordinary vocal prowess first began 
                        to shine. Audiences were spellbound by the sheer power and emotion that emanated 
                        from every note they sang. Encouraged by their early successes, [Artist's Name] 
                        decided to take the leap of faith and pursue a career in the music industry.
                    </p>
                    <img className='virgin-images' src={GandiArtist2} alt="gandi artist 2" />
                    <p>
                        The journey to recognition was not without its challenges. [Artist's Name] faced 
                        countless rejections, but they remained undeterred. Their unwavering determination 
                        led them to a pivotal moment when they caught the attention of a renowned music 
                        producer. This serendipitous encounter served as the catalyst for [Artist's Name]'s 
                        meteoric rise to fame.
                    </p>
                    <p>
                        [Artist's Name]'s debut album, released in [Year], was an instant sensation, 
                        capturing the hearts of music lovers around the globe. With a voice that could 
                        traverse the entire emotional spectrum, [Artist's Name] delivered songs that 
                        resonated with listeners on a deeply personal level. Hits like "[Song Title 1]" 
                        and "[Song Title 2]" became anthems of a generation, cementing [Artist's Name]'s 
                        status as an artistic luminary.
                    </p>
                    <p>
                        Beyond their vocal prowess, [Artist's Name] is a visionary artist who continuously 
                        pushes the boundaries of creativity. Their artistic portfolio extends far beyond the 
                        realm of music, encompassing painting, sculpture, and multimedia installations. 
                        Each piece of their artwork is a reflection of their boundless imagination and an 
                        exploration of the human condition.
                    </p>
                    <img className='virgin-images' src={GandiArtist3} alt ="gandi artist 3" />
                    <p>
                        [Artist's Name]'s artistry has the unique ability to evoke profound emotions, 
                        challenging the viewer to contemplate life's mysteries. Their exhibitions have 
                        graced prestigious galleries worldwide, and their work has earned critical acclaim 
                        for its depth, complexity, and the profound questions it raises.
                    </p>
                    <img className='virgin-images' src={GandiArtist4} alt="gandi artist 4" />
                    <p>
                        As [Artist's Name] continues to evolve and expand their artistic horizons, 
                        their legacy grows ever stronger. Their contribution to the world of music and 
                        art is immeasurable, leaving an indelible mark on the cultural landscape of our 
                        time. Their unwavering dedication to their craft serves as an inspiration to 
                        aspiring artists and singers worldwide.
                    </p>
                    <p>
                        In an era defined by fleeting fame and ephemeral trends, [Artist's Name] stands 
                        as a beacon of authenticity and artistic integrity. Their music and art transcend 
                        generations, bridging the gap between the past and the future, reminding us all 
                        of the enduring power of creativity.
                    </p>
                    <img className='virgin-images' src={GandiArtist5} alt="gandi artist 5" />
                    <p>
                        [Artist's Name] has not only captured our hearts but also our souls, reminding 
                        us that art and music have the unparalleled ability to heal, inspire, and unite. 
                        Their journey from a small town to international acclaim is a testament to the 
                        transformative power of passion, talent, and relentless dedication to the pursuit 
                        of artistic excellence.
                    </p>
                    <p>
                        In the grand symphony of life, [Artist's Name]'s melody will forever resonate,
                        an everlasting testament to the timeless power of artistry and the human spirit.
                    </p>
                    <br />
                    <section id="contact" className='container footer'>
                        <Footer />
                    </section>
                </section>
                <Loader type="line-scale-pulse-out" />
            </div>

        </>
    );

}

export default Home