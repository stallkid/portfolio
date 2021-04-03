import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './Footer.scss'

const Footer = (props) => {
    const socialMedia = [
        {name: "facebook", url: "https://www.facebook.com/renan.luisbianchini", icon: faFacebookSquare},
        {name: "linkedIn", url: "https://www.linkedin.com/in/renan-luis-bianchini-347737a7/", icon: faLinkedin},
        {name: "github", url: "https://github.com/stallkid?tab=repositories", icon: faGithubSquare}
    ];

    let socialMediaReferrer = null;
    socialMediaReferrer = (
        socialMedia.map( media => {
            return (
                <div className={`${media.name}-icon-container`}>
                    <a href={media.url} rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon className={`${media.name}-icon`} icon={media.icon} />
                    </a>
                </div>
            )
        })
    )
    

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-text">
                    Portfolio hub developed by Renan L. Bianchini @2020
                </div>
                <div className="social-media-container">
                    {socialMediaReferrer}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
