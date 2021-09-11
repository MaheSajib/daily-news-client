import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,  faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const personalInfo = [
        {name: "About Us" , link: "/about"},
        {name: "Contact Us" , link: "/contact"},
        {name: "SMS Subscription" , link: "/subscription"}
    ]
    const copyRight = [
        {name: "Any unauthorized use or reproduction of The Daily News content for commercial purposes is strictly prohibited and constitutes copyright infringement liable to legal action." , link: "/"},
    ]
    const archives = [
        {name: "Conference Hall" , link: "/conference"},
        {name: "Archives" , link: "/archives"},
    ]
    const media = [
        {name: "Apps" , link: "/apps"},
        {name: "Comment Policy" , link: "/comment"},
        {name: "RSS" , link: "/rss"},
    ]
    return (
        <footer className="footer-area ">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle="Daily News" menuItems={copyRight}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a to="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        <li className="list-inline-item"><a to="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        <li className="list-inline-item"><a to="//facebook.com"><FontAwesomeIcon className="icon " icon={faFacebookF} /></a></li>
                    </ul>
                </FooterCol>
                <FooterCol key={2} menuTitle="." menuItems={personalInfo}/>
                <FooterCol key={3} menuTitle="." menuItems={media}/>
                <FooterCol key={4} menuTitle="." menuItems={archives}/>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved. Md. Mahe Alam </p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;