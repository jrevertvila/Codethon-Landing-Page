import './AboutUs.css'
import { useTranslation } from 'react-i18next';

import google from '../../assets/images/google.png'
import etsinf from '../../assets/images/etsinf.png'
import unity_icon from '../../assets/images/unity_icon.png'
import fotur from '../../assets/images/fotur.png'
import img01 from '../../assets/images/01.webp'
import img02 from '../../assets/images/02.jpg'
import img03 from '../../assets/images/03.jpg'
import img04 from '../../assets/images/04.jpg'
import img05 from '../../assets/images/05.jpg'
import avatar from '../../assets/images/avatar.png'
import { useState } from 'react';

export function AboutUs() {
    const [cardActive, setCardActive] = useState("0")
    const { t } = useTranslation();


    let changeCardActive = (num) => num == cardActive ? setCardActive("0") : setCardActive("0")


    return (
        <div className="app__wrapper aboutUs_section">
            <h2 className='aboutUs_title'>{t('sobre_nosotros__titulo')}</h2>
            <p className='aboutUs_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className='container'>
                <div onClick={() => changeCardActive("1")} className={"card" + (cardActive == "1" ? ' active' : '')} >
                    <img className="background" src={img01} alt="" />

                    <div className="card-content" >
                        <div className="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 className="title">GTA 6</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>

                <div onClick={() => changeCardActive("2")} className={"card" + (cardActive == "2" ? ' active' : '')}>
                    <img className="background" src={img02} alt="" />

                    <div className="card-content">
                        <div className="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 className="title">Spider-Man PS5</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>

                <div onClick={() => changeCardActive("3")} className={"card" + (cardActive == "3" ? ' active' : '')}>
                    <img className="background" src={img03} alt="" />

                    <div className="card-content">
                        <div className="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 className="title">God Of War</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>

                <div onClick={() => changeCardActive("4")} className={"card" + (cardActive == "4" ? ' active' : '')}>
                    <img className="background" src={img04} alt="" />

                    <div className="card-content">
                        <div className="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 className="title">The Last of Us</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>

                <div onClick={() => changeCardActive("5")} className={"card" + (cardActive == "5" ? ' active' : '')}>
                    <img className="background" src={img05} alt="" />

                    <div className="card-content">
                        <div className="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 className="title">Elden Ring</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>

                <div onClick={() => changeCardActive("6")} className={"card" + (cardActive == "6" ? ' active' : '')}>
                    <img className="background" src={avatar} alt="" />

                    <div className="card-content">
                        <div className="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 className="title">Elden Ring</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>
            </div>


            {/* <div className='aboutUs_container'>
                <div className='aboutUs_item'>
                    <div className='aboutUs_item_img'>

                    </div>
                    <div className='aboutUs_item_info'>

                    </div>
                </div>

                <div className='aboutUs_item'>
                    <div className='aboutUs_item_img'>

                    </div>
                    <div className='aboutUs_item_info'>

                    </div>
                </div>

                <div className='aboutUs_item'>
                    <div className='aboutUs_item_img'>

                    </div>
                    <div className='aboutUs_item_info'>

                    </div>
                </div>

                <div className='aboutUs_item'>
                    <div className='aboutUs_item_img'>

                    </div>
                    <div className='aboutUs_item_info'>

                    </div>
                </div>
                
            </div> */}
        </div>
    )
}