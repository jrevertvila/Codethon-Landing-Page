import './AboutUs.css'
import { useTranslation } from 'react-i18next';

import joel from '../../assets/images/joel.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import { useState } from 'react';

export function AboutUs() {
    const [cardActive, setCardActive] = useState("0")
    const { t } = useTranslation();


    let changeCardActive = (num) => num == cardActive ? setCardActive("0") : setCardActive("0")


    return (
        <div className="app__wrapper aboutUs_section">
            <h2 className='aboutUs_title'>{t('sobre_nosotros__titulo')}</h2>
            <p className='aboutUs_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
            <div className='aboutUs_container'>
                <div className='aboutUs_container_item'>
                    <div className='item_top'>
                        <div className='item_top_img'>
                            <img src={joel} alt="" />
                        </div>
                        <div className='item_top_info'>
                            <span className='info_nombre'>Joel Revert Vila<span>, 23 años</span></span>
                            {/* <span className='info_edad'>23 Años</span> */}
                            <span className='info_titulacion'>Grado Superior en Desarrollo Aplicaciones Web, Cursando Ingeniería Informática UPV</span>
                            <span className='info_rol'><strong>ROL en el proyecto:</strong> Desarrollo de la web y scripting en Unity</span>
                        </div>
                    </div>
                    <div className='item_bottom'>
                        <div className='social_item linkedin_bg'>
                            <FaLinkedin/> Linkedin
                        </div>
                        <div className='social_item github_bg'>
                            <FaSquareGithub/> GitHub
                        </div>
                        <div className='social_item email_bg'>
                            <MdEmail/> Email
                        </div>
                    </div>
                </div>
                <div className='aboutUs_container_item'>
                    
                </div>
                <div className='aboutUs_container_item'>
                    
                </div>
            </div>
        </div>
    )
}