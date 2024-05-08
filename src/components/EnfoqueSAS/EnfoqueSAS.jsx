import { useEffect, useState } from 'react'
import './EnfoqueSAS.css'
import { useLockBodyScroll, useWindowScroll } from "@uidotdev/usehooks";
import { useTranslation } from 'react-i18next';
import sostenibilidad from '../../assets/images/sostenibilidad2.png'
import accesibilidad from '../../assets/images/accesibilidad.png'
import smartcity from '../../assets/images/smartcity.jpg'
import smartcity_sostenible from '../../assets/images/smartcity_sostenible.png'

export default function EnfoqueSAS() {
    const { t } = useTranslation();

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)


    return (
        <section className="app__wrapper enfoqueSAS">
            <h2 className='enfoqueSAS__titulo'>Enfoque S.A.S:</h2>
            <p className='enfoqueSAS__subtitulo'>Sostenibilidad, Acesibilidad y SmartCity</p>
            <section className='enfoqueSAS__section'>
                <div className='enfoqueSAS__section__main'>
                    <h3 className='enfoqueSAS__section__main_title'>Fomentamos la sostenibilidad</h3>
                    <div className='enfoqueSAS__section__main_separador'></div>
                    <p className='enfoqueSAS__section__main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='enfoqueSAS__section__main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='enfoqueSAS__section__img'>
                    <img src={sostenibilidad} alt="sostenibilidad" className='img_sostenibilidad' />
                </div>
            </section>
            <section className='enfoqueSAS__section'>
                <div className='enfoqueSAS__section__img'>
                    <img src={accesibilidad} alt="accesibilidad" className='img_accesibilidad' />

                </div>
                <div className='enfoqueSAS__section__main'>
                    <h3 className='enfoqueSAS__section__main_title'>Apostamos por la accesibilidad</h3>
                    <div className='enfoqueSAS__section__main_separador'></div>
                    <p className='enfoqueSAS__section__main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='enfoqueSAS__section__main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

            </section>
            <section className='enfoqueSAS__section'>
                <div className='enfoqueSAS__section__main'>
                    <h3 className='enfoqueSAS__section__main_title'>Convertimos Valencia en una ciudad más inteligente</h3>
                    <div className='enfoqueSAS__section__main_separador'></div>
                    <p className='enfoqueSAS__section__main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='enfoqueSAS__section__main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='enfoqueSAS__section__img'>
                    <img src={smartcity_sostenible} alt="accesibilidad" className='img_smartcity' />

                </div>
            </section>

        </section>
    )
}