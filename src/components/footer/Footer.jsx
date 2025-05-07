import './Footer.css';
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; 2025 bridgepoint. All rights reserved.</p>
            <div className='social-icons'>
                <CiLinkedin size={22}/>
                <RiTwitterXFill size={22} />
                <IoLogoFacebook size={22}/>
            </div>
            <div className='footer-links'>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;