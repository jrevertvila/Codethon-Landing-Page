import './LangSelector.css'
import cv_flag from '../../assets/images/cv_flag.png'
import es_flag from '../../assets/images/es_flag.png'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function LangSelector() {
    const [t, i18n] = useTranslation()
    const [dropdown, setDropdown] = useState(false);
    const [lang, setLang] = useState(() => JSON.parse(localStorage.getItem("lang")) || "val");

    useEffect(() => {
        // setDropdown(!dropdown)
        localStorage.setItem("lang", JSON.stringify(lang));
    }, [lang]);

    let setLanguage = (language) =>  {
        // console.log("cambiar lang");
        setDropdown(!dropdown)
        i18n.changeLanguage(language)
        setLang(language)
    }

    return (
        <div>
            {
                lang == 'val' ?
                    <div className='lang_selector' onClick={() => setDropdown(!dropdown)}>
                        <img src={cv_flag} alt="bandera comunidad valenciana" />
                        Valencià
                    </div>
                    :
                    <div className='lang_selector' onClick={() => setDropdown(!dropdown)}>
                        <img src={es_flag} alt="bandera españa" />
                        Español
                    </div>
            }

            <div className='full' style={dropdown ? { display: "flex" } : { display: 'none' }} onClick={() => setDropdown(!dropdown)}>

            </div>

            <div className='lang_selector_option' style={dropdown ? { display: "flex" } : { display: 'none' }}>

                <div className={'lang_selector ' + (lang == 'val' ? ' lang_selected' : '')} onClick={() => setLanguage('val')}>
                    <img src={cv_flag} alt="bandera comunidad valenciana" />
                    Valencià
                </div>
                <div className={'lang_selector ' + (lang == 'es' ? ' lang_selected' : '')} onClick={() => setLanguage('es')}>
                    <img src={es_flag} alt="bandera españa" />
                    Español
                </div>
            </div>
        </div>
    )
}