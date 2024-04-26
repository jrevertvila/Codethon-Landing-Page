import { useEffect, useState } from 'react'
import './VIveExperiencia.css'
import { useLockBodyScroll, useWindowScroll } from "@uidotdev/usehooks";
import { useTranslation } from 'react-i18next';


export default function ViveExperiencia() {
    const { t } = useTranslation();

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    
    return (
        <section className="app__wrapper vive_experiencia">
            <h2 className='vive_experiencia__titulo'>{t('vive_experiencia__titulo')}</h2>
            <span className='vive_experiencia__subtitulo'>{t('vive_experiencia__descripcion')}</span>

            <div className='vive_experiencia__bento_container'>
                <div className={"bento_item bento_item_left" + (show1 ? ' bento_active' : '')} onClick={() => setShow1(!show1)}></div>
                <div className={"bento_item bento_item_middle" + (show2 ? ' bento_active' : '')} onClick={() => setShow2(!show2)}></div>
                <div className={"bento_item bento_item_right" + (show3 ? ' bento_active' : '')} onClick={() => setShow3(!show3)}></div>
                

            </div>
        
        </section>
    )
}