import { Link, NavLink } from "react-router-dom"
import './index.scss'
import "../../components/Home/index.scss"
import LogoS from "../../assets/images/logo.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faEnvelope, faBars, faXmark, } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram, faYoutube, faFacebook, faTwitter, faSpotify, faApple } from "@fortawesome/free-brands-svg-icons"
import React, { useState, useEffect, useRef } from "react"
import Loader from "react-loaders"


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(true);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return(
    <div className={`nav-bar ${isSidebarOpen ? "close" : "open"}`} ref={sidebarRef}>
        {isSidebarOpen ? (
            <div className={`menu ${isSidebarOpen ? "" : "openmenu"}`} onClick={toggleSidebar}>
                <div>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                </div>
            </div>
        ) : (
            <div className={`menu ${isSidebarOpen ? "" : "openmenu"}`} onClick={toggleSidebar}>
            <div>
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
            </div>
        </div>
        )}
        <nav className="menu-trigger">
        <a className="contact-link" exact="true" activeclassname="active" to="/home" href="#home" onClick={toggleSidebar}>Home</a>
        <a className="contact-link" href="#about" onClick={toggleSidebar}>About</a>
        <NavLink exact="true" 
                activeclassname="active" 
                className="contact-link"
                to="/contact"
                onClick={toggleSidebar}>
            <p>Get in touch</p>
        </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/sugandi-putra-ginting-94ba9b55/">
                    <FontAwesomeIcon icon={faLinkedin} color="#000" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.instagram.com/gandimoenthe/">
                    <FontAwesomeIcon icon={faInstagram} color="#000" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.youtube.com/@GandiMoenthe">
                    <FontAwesomeIcon icon={faYoutube} color="#000" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.youtube.com/@GandiMoenthe">
                    <FontAwesomeIcon icon={faTwitter} color="#000" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.youtube.com/@GandiMoenthe">
                    <FontAwesomeIcon icon={faSpotify} color="#000" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.youtube.com/@GandiMoenthe">
                    <FontAwesomeIcon icon={faFacebook} color="#000" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.youtube.com/@GandiMoenthe">
                    <FontAwesomeIcon icon={faApple} color="#000" />
                </a>
            </li>
        </ul>

    </div>
    )
    }

export default Sidebar