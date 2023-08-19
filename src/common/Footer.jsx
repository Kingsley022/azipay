import React from 'react';
import '../styles/Footer.css';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineCopyright} from 'react-icons/ai';
import {FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF,} from 'react-icons/fa';
import {BsSend} from 'react-icons/bs';


const quickLinks = [
    {id: '1', collection: 'Product', links: ['Individual', 'Business', 'Request Demo', 'Priceing']},
    {id: '2', collection: 'Legal', links: ['Privacy Policy', 'Terms and Services']},
    {id: '3', collection: 'Resources', links: ['FAQs', 'Blog', 'Career', 'Customer Stories']},
    {id: '4', collection: 'Contact Us', links: ['eazipay@gmail.com', '+234 9129131925',], input: 'Your email address'}
];

const socials = [FaInstagram, FaTwitter, FaLinkedinIn,FaFacebookF]

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="contacts">
                <div className="logo">
                    <FiMenu/>
                    <p>azipay</p>
                </div>
                <p>Copyright <AiOutlineCopyright/> 2023 Eazipay.</p>
                <p>All rights reserved</p>

                <div className="socials">
                    {socials.map((social, index) => (
                        <div key={index} className="social">{React.createElement(social)}</div>
                    ))}
                </div>
            </div>
            {quickLinks.map(links => (
                <div className="link">
                    <p className="link-title">{links.collection}</p>
                    {links.links.map((link, index) => (
                        <p key={index}>{link}</p>
                    ))}
                    {links.input && (
                        <div className="input-container">
                            <input placeholder={links.input}/> 
                            <BsSend/>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );
}
 
export default Footer;