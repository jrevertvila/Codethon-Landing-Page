import './AboutProject.css'
// import unityIMG from '../../assets/images/unity_programa.png'
import unity_icon from '../../assets/images/unity_icon.png'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { IoBuildSharp } from "react-icons/io5";
import { IoMdCut } from "react-icons/io";
import { FaBrush } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


export function AboutProject() {
    const { t } = useTranslation();
    let secciones = ["en_que_consiste","tecnologias","seccion3"]
    const [section, setSection] = useState(secciones[0]);

    let change_section = (s) => {
        if (s != section) setSection('s')
    }
    return (
        <div className="app__wrapper about_project">
            <h2 className='about_project__title'>{t('sobre_proyecto__titulo')}</h2>
            <span className='about_project__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            <div className='about_project__tabs_container'>
                <header className='about_project__tabs_container__header'>
                    <div className={"about_project__tabs_container__header__section" + (section == secciones[0] ? " section_active" : '')} onClick={() => { setSection(secciones[0]) }}>¿En que consiste?</div>


                    <div className={"about_project__tabs_container__header__section" + (section == secciones[1] ? " section_active" : '')} onClick={() => { setSection(secciones[1]) }}>¿Que tecnologías utilizamos?</div>

                    
                    <div className={"about_project__tabs_container__header__section" + (section == secciones[2] ? " section_active" : '')} onClick={() => { setSection(secciones[2]) }}>Seccion 3</div>
                </header>

                {
                    (() => {
                        if (section == secciones[0]) return <article className='about_project__tabs_container__section'>
                            <div className='about_project__tabs_container__section_left'>
                                <h3 className='section_title'>¿En que consiste el proyecto?</h3>
                                <p className='section_description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                                <h4 className='section_objetivos'>Objetivos:</h4>
                                <p className='section_objetivos_item'><IoMdCut /> Coger el cuchillo para tallar la falla</p>
                                <p className='section_objetivos_item'><FaBrush /> Pintar la falla con el aerógrafo </p>
                                <p className='section_objetivos_item'><IoBuildSharp /> Montar la falla en el ayuntamiento de Valencia</p>
                                <p className='section_objetivos_item'><FaFire /> Quemar la falla!</p>
                                <div className='separator'></div>
                                <div className='button_next_section' onClick={() => { setSection(secciones[1]) }}>
                                    <div className='button_next_section__text'>Más información</div>
                                    <div className='button_next_section__icon'>
                                        <FaArrowRightLong />
                                    </div>

                                </div>
                            </div>

                            <div className='about_project__tabs_container__section_right'>
                                <img src={unity_icon} alt="" />
                            </div>

                        </article>
                        if (section == secciones[1]) return <article className='about_project__tabs_container__section'>
                            <div className='about_project__tabs_container__section_left'>
                                <h3 className='section_title'>¿Que tecnologías utilizamos?</h3>
                                <p className='section_description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                                {/* <h4 className='section_objetivos'>Objetivos:</h4>
                                <p className='section_objetivos_item'><IoMdCut /> Coge el cuchillo para tallar la falla</p>
                                <p className='section_objetivos_item'><FaBrush /> Pintar la falla con el aerógrafo </p>
                                <p className='section_objetivos_item'><IoBuildSharp /> Montar la falla en el ayuntamiento de Valencia</p>
                                <p className='section_objetivos_item'><FaFire /> Quemar la falla!</p> */}
                                <div className='separator'></div>
                                <div className='button_next_section' onClick={() => { setSection(secciones[2]) }}>
                                    <div className='button_next_section__text'>Más información</div>
                                    <div className='button_next_section__icon'>
                                        <FaArrowRightLong />
                                    </div>

                                </div>
                            </div>

                            <div className='about_project__tabs_container__section_right'>
                                <img src={unity_icon} alt="" />
                            </div>
                        </article>
                        if (section == secciones[2]) return <article className='about_project__tabs_container__section'>
                            <div className='about_project__tabs_container__section_left'>
                                <h3 className='section_title'>Seccion 3</h3>
                                <p className='section_description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                                {/* <h4 className='section_objetivos'>Objetivos:</h4>
                                <p className='section_objetivos_item'><IoMdCut /> Coge el cuchillo para tallar la falla</p>
                                <p className='section_objetivos_item'><FaBrush /> Pintar la falla con el aerógrafo </p>
                                <p className='section_objetivos_item'><IoBuildSharp /> Montar la falla en el ayuntamiento de Valencia</p>
                                <p className='section_objetivos_item'><FaFire /> Quemar la falla!</p> */}
                                <div className='separator'></div>
                                <div className='button_next_section'>
                                    <div className='button_next_section__text'>Más información</div>
                                    <div className='button_next_section__icon'>
                                        <FaArrowRightLong />
                                    </div>

                                </div>
                            </div>

                            <div className='about_project__tabs_container__section_right'>
                                <img src={unity_icon} alt="" />
                            </div>
                        </article>
                    })()
                }
            </div>
        </div>
    )
}