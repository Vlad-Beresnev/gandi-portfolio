import { Link, NavLink } from "react-router-dom"
import './index.scss'
import LogoS from "../../assets/images/logo.jpeg"
import LogoSubtitle from "../../assets/images/logo-subtitle.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="ministeri" />
        </Link>
        <nav>
        <NavLink exact="true" 
                activeclassname="active" 
                to="/">
            <FontAwesomeIcon icon={faHome} color="#4b4b4e" />
        </NavLink>
        <NavLink exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" 
                activeclassname="active" 
                className="contact-link"
                to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/sugandi-putra-ginting-94ba9b55/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.instagram.com/gandimoenthe/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                    rel="noreferrer" 
                    href="https://www.youtube.com/@GandiMoenthe">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    )

export default Sidebar