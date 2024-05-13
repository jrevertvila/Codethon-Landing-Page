import { useEffect, useState } from 'react'
import './EnfoqueSAS.css'
import { useTranslation } from 'react-i18next';
import sostenibilidad from '../../assets/images/sostenibilidad2.png'
import accesibilidad from '../../assets/images/accesibilidad.png'
import smartcity from '../../assets/images/smartcity.jpg'
import smartcity_sostenible from '../../assets/images/smartcity_sostenible.png'
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function EnfoqueSAS() {
    const { t } = useTranslation();
    const { height, width } = useWindowDimensions();

    return (
        <section className="app__wrapper enfoqueSAS">
            <h2 className='enfoqueSAS__titulo'>{t('enfoqueSAS__titulo')}</h2>
            <p className='enfoqueSAS__subtitulo'>{t('enfoqueSAS__subtitulo')}</p>
            <section className='enfoqueSAS__section'>
                <div className='enfoqueSAS__section__main'>
                    <h3 className='enfoqueSAS__section__main_title'>{t('enfoqueSAS__sostenibilidad_titulo')}</h3>
                    <div className='enfoqueSAS__section__main_separador'></div>
                    <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__sostenibilidad_p1')}</p>
                    <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__sostenibilidad_p2')}</p>
                </div>
                <div className='enfoqueSAS__section__img'>
                    <img src={sostenibilidad} alt="sostenibilidad" className='img_sostenibilidad' />
                </div>
            </section>
            <section className='enfoqueSAS__section'>
                {
                    width > 1000 ? (() => {
                        return (
                            <>
                                <div className='enfoqueSAS__section__img'>
                                    <img src={accesibilidad} alt="accesibilidad" className='img_accesibilidad' />
                                </div>
                                <div className='enfoqueSAS__section__main'>
                                    <h3 className='enfoqueSAS__section__main_title'>{t('enfoqueSAS__accesibilidad_titulo')}</h3>
                                    <div className='enfoqueSAS__section__main_separador'></div>
                                    <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__accesibilidad_p1')}</p>
                                    <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__accesibilidad_p2')}</p>
                                </div>
                            </>

                        )
                    })()
                        : (() => {
                            return (
                                <>
                                    <div className='enfoqueSAS__section__main'>
                                        <h3 className='enfoqueSAS__section__main_title'>{t('enfoqueSAS__accesibilidad_titulo')}</h3>
                                        <div className='enfoqueSAS__section__main_separador'></div>
                                        <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__accesibilidad_p1')}</p>
                                        <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__accesibilidad_p2')}</p>
                                    </div>
                                    <div className='enfoqueSAS__section__img'>
                                        <img src={accesibilidad} alt="accesibilidad" className='img_accesibilidad' />
                                    </div>
                                </>

                            )
                        })()
                }


            </section>
            <section className='enfoqueSAS__section'>
                <div className='enfoqueSAS__section__main'>
                    <h3 className='enfoqueSAS__section__main_title'>{t('enfoqueSAS__smartcity_titulo')}</h3>
                    <div className='enfoqueSAS__section__main_separador'></div>
                    <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__smartcity_p1')}</p>
                    <p className='enfoqueSAS__section__main_text'>{t('enfoqueSAS__smartcity_p2')}</p>
                </div>
                <div className='enfoqueSAS__section__img'>
                    <img src={smartcity_sostenible} alt="accesibilidad" className='img_smartcity' />

                </div>
            </section>

        </section>
    )
}