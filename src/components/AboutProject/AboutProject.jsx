import './AboutProject.css'
// import unityIMG from '../../assets/images/unity_programa.png'
import unity_icon from '../../assets/images/unity_icon.png'
import maya from '../../assets/images/maya.png'
import Meta_Quest from '../../assets/images/Meta_Quest.png'
import react from '../../assets/images/react.png'
import csharp from '../../assets/images/csharp.png'
import script from '../../assets/images/script_image.png'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { IoBuildSharp } from "react-icons/io5";
import { IoMdCut } from "react-icons/io";
import { FaBrush } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsUnity } from "react-icons/bs";
import { SiCsharp } from "react-icons/si";
import { SiAutodeskmaya } from "react-icons/si";




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
            <span className='about_project__subtitle'>{t('sobre_proyecto__subtitulo')}</span>
            <div className='about_project__tabs_container'>
                <header className='about_project__tabs_container__header'>
                    <div className={"about_project__tabs_container__header__section" + (section == secciones[0] ? " section_active" : '')} onClick={() => { setSection(secciones[0]) }}>{t('sobre_proyecto__seccion1')}</div>


                    <div className={"about_project__tabs_container__header__section" + (section == secciones[1] ? " section_active" : '')} onClick={() => { setSection(secciones[1]) }}>{t('sobre_proyecto__seccion2')}</div>

                    
                    <div className={"about_project__tabs_container__header__section" + (section == secciones[2] ? " section_active" : '')} onClick={() => { setSection(secciones[2]) }}>{t('sobre_proyecto__seccion3')}</div>
                </header>

                {
                    (() => {
                        if (section == secciones[0]) return <article className='about_project__tabs_container__section'>
                            <div className='about_project__tabs_container__section_left'>
                                <h3 className='section_title'>{t('sobre_proyecto__seccion1')}</h3>
                                <p className='section_description'>
                                    {t('sobre_proyecto__descripcion')}
                                </p>
                                <h4 className='section_objetivos'>Objetivos:</h4>
                                <p className='section_objetivos_item'><IoMdCut />{t('sobre_proyecto__objetivo1')}</p>
                                <p className='section_objetivos_item'><FaBrush />{t('sobre_proyecto__objetivo2')}</p>
                                <p className='section_objetivos_item'><IoBuildSharp />{t('sobre_proyecto__objetivo3')}</p>
                                <p className='section_objetivos_item'><FaFire />{t('sobre_proyecto__objetivo4')}</p>
                                <div className='separator'></div>
                                <div className='button_next_section' onClick={() => { setSection(secciones[1]) }}>
                                    <div className='button_next_section__text'>{t('sobre_proyecto__boton')}</div>
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
                                <h3 className='section_title'>{t('sobre_proyecto__seccion2')}</h3>
                                <p className='section_description'>
                                    {t('sobre_proyecto__seccion2_descripcion')}

                                </p>
                                {/* <p className="section_description">
                                    {t('sobre_proyecto__seccion2_descripcion2')}
                                </p> */}
                                <h4 className='section_objetivos'>Tecnologias:</h4>
                                <p className='section_objetivos_item'><BsUnity/><strong>{t('sobre_proyecto__seccion2_tecnologia1_nombre')}</strong>{t('sobre_proyecto__seccion2_tecnologia1')}</p>
                                <p className='section_objetivos_item'><SiCsharp/><strong>{t('sobre_proyecto__seccion2_tecnologia2_nombre')}</strong>{t('sobre_proyecto__seccion2_tecnologia2')}</p>
                                <p className='section_objetivos_item'><SiAutodeskmaya/><strong>{t('sobre_proyecto__seccion2_tecnologia3_nombre')}</strong>{t('sobre_proyecto__seccion2_tecnologia3')}</p>
                                <div className='separator'></div>
                                <div className='button_next_section' onClick={() => { setSection(secciones[2]) }}>
                                    <div className='button_next_section__text'>{t('sobre_proyecto__boton')}</div>
                                    <div className='button_next_section__icon'>
                                        <FaArrowRightLong />
                                    </div>

                                </div>
                            </div>

                            <div className='about_project__tabs_container__section_right'>
                                <img src={maya} alt="maya" />
                                <img src={react} alt="react" />
                                <img src={csharp} className="chsarp_img" alt="csharp" />
                                <img src={Meta_Quest} alt="Meta_Quest" />
                            </div>
                        </article>
                        if (section == secciones[2]) return <article className='about_project__tabs_container__section'>
                            <div className='about_project__tabs_container__section_left'>
                                <h3 className='section_title'>{t('sobre_proyecto__seccion3')}</h3>
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
                                    <div className='button_next_section__text'>{t('sobre_proyecto__boton')}</div>
                                    <div className='button_next_section__icon'>
                                        <FaArrowRightLong />
                                    </div>

                                </div>
                            </div>

                            <div className='about_project__tabs_container__section_right'>
                            <img src={csharp} className="chsarp_img" alt="csharp" />
                            </div>
                        </article>
                    })()
                }
            </div>
        </div>
    )
}