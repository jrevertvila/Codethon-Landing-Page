import { useEffect, useState } from 'react'
import './Accesibilidad.css'
import { useLockBodyScroll, useWindowScroll } from "@uidotdev/usehooks";
import { useTranslation } from 'react-i18next';


export default function Accesibilidad() {
    const { t } = useTranslation();

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    
    return (
        <section className="app__wrapper accesibilidad">
            <h2 className='accesibilidad__titulo'>{t('accesibilidad__titulo')}</h2>
            <span className='accesibilidad__subtitulo'>{t('accesibilidad__descripcion')}</span>
            <div className='accesibilidad_container'>
                <div className='accesibilidad_container_left'>
                <h3 className="accesibilidad_container_titulo">{t('accesibilidad__left_titulo')}</h3>
                <p> 
                {t('accesibilidad__accesibilidad_descripcion_p1')} <br /> <br />
                </p>
                {t('accesibilidad__accesibilidad_descripcion_p2')}
                </div>

                <div className='accesibilidad_container_right'>
                <h3 className='accesibilidad_container_titulo'>{t('accesibilidad__right_titulo')}</h3>
                <p> 
                {t('accesibilidad__smartcity_descripcion_p1')} <br /> <br />
                </p>
                {t('accesibilidad__smartcity_descripcion_p2')}
                </div>



                </div>

            
        
        </section>
    )
}