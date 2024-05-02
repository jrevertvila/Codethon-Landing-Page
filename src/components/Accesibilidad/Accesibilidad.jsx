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




                </div>

                <div className='accesibilidad_container_right'>




                </div>

            </div>
        
        </section>
    )
}