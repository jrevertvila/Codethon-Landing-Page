import './AboutUs.css'
import { useTranslation } from 'react-i18next';

import joel from '../../assets/images/joel.jpg'
import hombre from '../../assets/images/hombre.png'
import hombre_2 from '../../assets/images/hombre_2.png'
import mujer from '../../assets/images/mujer.png'
import mujer_2 from '../../assets/images/mujer_2.png'

import { useState } from 'react';
import AboutUsItem from './AboutUsItem';

export function AboutUs() {
    // const [cardActive, setCardActive] = useState("0")
    const { t } = useTranslation();


    // let changeCardActive = (num) => num == cardActive ? setCardActive("0") : setCardActive("0")


    return (
        <div className="app__wrapper aboutUs_section" id='aboutus'>
            <h2 className='aboutUs_title'>{t('sobre_nosotros__titulo')}</h2>
            <p className='aboutUs_subtitle'> {t('sobre_nosotros__subtitulo')} </p>
            <h3 className='aboutUs_section_title'>{t('sobre_nosotros__informatica_titulo')}</h3>
            {/* <p className='aboutUs_description1'>{t('sobre_nosotros__informatica_descripcion')}</p> */}
            <div className='aboutUs_container aboutUs_container_informatica'>
                <AboutUsItem src={hombre} email='jrevertvila@gmail.com' hrefLinkedin={"https://www.linkedin.com/in/jrevertvila/"} hrefGit={"https://github.com/jrevertvila"} alt={"foto joel"} nombre={"Joel Revert Vila"} style={{justifySelf: "flex-end"}}
                    edad={23} titulacion={t('sobre_nosotros__joel_formacion')}
                    rol={t('sobre_proyecto__seccion3_desarrollo')} />

                <AboutUsItem src={mujer} alt={"foto mujer"} email='celiagarciamonforte@gmail.com' hrefLinkedin={"https://www.linkedin.com/in/celia-garc%C3%ADa-monforte-5829a12a0/"} hrefGit={"https://github.com/celiagarciam"} nombre={"Celia Garcia Monforte"} style={{justifySelf: "flex-start"}}
                    edad={21} titulacion={t('sobre_nosotros__celia_formacion')}
                    rol= {t('sobre_proyecto__seccion3_desarrollo')}/>
            </div>
            <div className='aboutUs_separador'></div>
            <h3 className='aboutUs_section_title'>{t('sobre_nosotros__ifab_titulo')}</h3>
            <div className='aboutUs_container aboutUs_container_artes'>
                <AboutUsItem src={mujer_2} alt={"foto mujer2"} email='albaacc01@gmail.com' hrefLinkedin={"https://www.linkedin.com/in/alba-casado-coscolla-b87419294/"} nombre={"Alba Casado Coscolla"} style={{justifySelf: "flex-end"}}
                    edad={23} titulacion={t('sobre_nosotros__alba_formacion')}
                    rol={t('sobre_proyecto__seccion3_diseño')}
                    portfolio='https://indd.adobe.com/view/66384b7f-a37a-413b-9288-0a15a1df16ec'/>

                <AboutUsItem src={mujer} alt={"foto mujer_2"} email='mgalan.creativa@gmail.com' hrefLinkedin={"https://www.linkedin.com/in/mar-gal%C3%A1n-garc%C3%ADa-33763530b/"} nombre={"Mar Galán García"} style={{justifySelf: "flex-start"}}
                    edad={23} titulacion={t('sobre_nosotros__mar_formacion')}
                    rol={t('sobre_proyecto__seccion3_diseño')} />

                <AboutUsItem src={mujer_2} alt={"foto mujer_2"} email='mariamorenomartinez3@hotmail.com' hrefLinkedin={"https://www.linkedin.com/in/maria-moreno-martinez-3673202b1/"} nombre={"María Moreno Martínez"} style={{justifySelf: "flex-end"}}
                    edad={23} titulacion={t('sobre_nosotros__maria_formacion')}
                    rol={t('sobre_proyecto__seccion3_diseño')} />
            </div>
        </div>
    )
}