import {Link} from 'react-router-dom'
import { useContext } from 'react'
import Button from '../Button/Button'

// Assets
import './Footer.css'
import DncLogo from '../../assets/DNC.svg'
import brasilLogo from '../../assets/brasil.svg'
import usaLogo from '../../assets/usa.svg'
import facebookLogo from '../../assets/facebook.svg'
import instagramLogo from '../../assets/instagram.svg'
import linkedinLogo from '../../assets/Linkedin.svg'
import xLogo from '../../assets/X.svg'

// Context
import { AppContext } from '../../contexts/appContext'

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country);
    }
    return (
        <footer>
            <div className="container footer">
                <div className='d-flex jc-space-between mobile-fd-column'>
                    <div className='footer-logo-col'>
                        <img src={DncLogo} className='footer-logo'></img>
                        <p className='gray-1-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className='d-flex social-links'>
                            <a href="https://google.com" target='_blank'>
                                <img src={facebookLogo} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={xLogo} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={linkedinLogo} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={instagramLogo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul className=''>
                                <li><Link to={"/"}>{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to={"/about"}>{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to={"/projects"}>{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to={"/contact"}>{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                            <p className='grey-1-color'>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <Button className='button-unstyled' onClick={() => changeLanguage('br')}>
                            <img src={brasilLogo} alt="" height="29px"/>
                        </Button>
                        <Button className='button-unstyled' onClick={() => changeLanguage('en')}>
                            <img src={usaLogo} alt="" height="29px"/>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer