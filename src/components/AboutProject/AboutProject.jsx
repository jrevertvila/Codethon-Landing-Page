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
// import LogoPrueba from '../../assets/images/Memòries en Cendra.png'
import Logo from '../../assets/LOGOS/logoSinFondo/logoCircularNaranja.png'
import { FaRegFileCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";






export function AboutProject() {
    const { t } = useTranslation();
    let secciones = ["en_que_consiste", "tecnologias", "seccion3"]
    const [section, setSection] = useState(secciones[0]);

    let change_section = (s) => {
        if (s != section) setSection('s')
    }
    return (
        <div className="app__wrapper about_project" id='aboutproject'>
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
                                <h4 className='section_objetivos'>{t('sobre_proyecto__objetivos_titulo')}</h4>
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
                                <iframe width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/jJ2rsG3D_po?si=NeYWapIFh9lkd3Un" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen></iframe>
                            </div>

                        </article>
                        if (section == secciones[1]) return <article className='about_project__tabs_container__section'>
                            <div className='about_project__tabs_container__section_left'>
                                <h3 className='section_title'>{t('sobre_proyecto__seccion2')}</h3>
                                <p className='section_description'>
                                    {t('sobre_proyecto__seccion2_descripcion')}

                                </p>
                                <h4 className='section_objetivos'>{t('sobre_proyecto__tecnologias_titulo')}</h4>
                                <p className='section_objetivos_item'><BsUnity /><strong>{t('sobre_proyecto__seccion2_tecnologia1_nombre')}</strong>{t('sobre_proyecto__seccion2_tecnologia1')}</p>
                                <p className='section_objetivos_item'><SiCsharp /><strong>{t('sobre_proyecto__seccion2_tecnologia2_nombre')}</strong>{t('sobre_proyecto__seccion2_tecnologia2')}</p>
                                <p className='section_objetivos_item'><SiAutodeskmaya /><strong>{t('sobre_proyecto__seccion2_tecnologia3_nombre')}</strong>{t('sobre_proyecto__seccion2_tecnologia3')}</p>
                                <div className='separator'></div>
                                <div className='button_next_section' onClick={() => { setSection(secciones[2]) }}>
                                    <div className='button_next_section__text'>{t('sobre_proyecto__boton')}</div>
                                    <div className='button_next_section__icon'>
                                        <FaArrowRightLong />
                                    </div>

                                </div>
                            </div>

                            <div className='about_project__tabs_container__section_right'>
                                <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/VkJHwuK0NC8?si=UT1i1vUq9HphowTy"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen></iframe>
                            </div>
                        </article>
                        if (section == secciones[2]) return <article className='about_project__tabs_container__section'>
                            <div className='about_project__tabs_container__section_left rols_en_equip'>
                                <h3 className='section_title'>{t('sobre_proyecto__seccion3')}</h3>
                                <p className='section_description'>{t('sobre_proyecto__seccion3_descripcion')}</p>
                                <p className='section_objetivos_item'><FaRegFileCode /><strong>{t('sobre_proyecto__seccion3_desarrollo_titulo')}</strong>
                                    {t('sobre_proyecto__seccion3_desarrollo')}           </p>
                                <p className='section_objetivos_item'><MdDesignServices /><strong>{t('sobre_proyecto__seccion3_diseño_titulo')}</strong>
                                    {t('sobre_proyecto__seccion3_diseño')}</p>
                                <div className='separator'></div>
                                {/* <div className='button_next_section'>
                                    <div className='button_next_section__text'>{t('sobre_proyecto__boton')}</div>
                                    <div className='button_next_section__icon'>
                                        <FaArrowRightLong />
                                    </div>

                                </div> */}
                            </div>

                            <div className='about_project__tabs_container__section_right'>
                                <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/VkJHwuK0NC8?si=UT1i1vUq9HphowTy"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen></iframe>
                            </div>
                        </article>
                    })()
                }
            </div>
        </div>
    )
}