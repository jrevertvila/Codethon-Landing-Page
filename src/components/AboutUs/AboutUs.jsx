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
        <div className="app__wrapper aboutUs_section">
            <h2 className='aboutUs_title'>{t('sobre_nosotros__titulo')}</h2>
            <p className='aboutUs_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
            <h3 className='aboutUs_section_title'>Ingeniería Informática</h3>
            <div className='aboutUs_container aboutUs_container_informatica'>
                <AboutUsItem src={hombre} alt={"foto joel"} nombre={"Joel Revert Vila"} style={{justifySelf: "flex-end"}}
                    edad={23} titulacion={"Grado Superior en Desarrollo Aplicaciones Web, Cursando Ingeniería Informática UPV"}
                    rol={"Desarrollo de la web y scripting en Unity"} />

                <AboutUsItem src={mujer} alt={"foto mujer"} nombre={"Celia Garcia Monforte"} style={{justifySelf: "flex-start"}}
                    edad={21} titulacion={"Cursando Ingeniería Informática UPV"}
                    rol={"Desarrollo de la web y scripting en Unity"} />
            </div>
            <div className='aboutUs_separador'></div>
            <h3 className='aboutUs_section_title'>Tecnologías Interactivas y Fabricación Digital</h3>
            <div className='aboutUs_container aboutUs_container_artes'>
                <AboutUsItem src={mujer_2} alt={"foto mujer2"} nombre={"Alba Casado Coscolla"} style={{justifySelf: "flex-end"}}
                    edad={23} titulacion={"Bellas Artes, Cursando Master Tecnologías Interactivas y Fabricación Digital"}
                    rol={"Modelado 3D y Desarrollo en Unity"} />

                <AboutUsItem src={mujer} alt={"foto mujer_2"} nombre={"Mar Galán García"} style={{justifySelf: "flex-start"}}
                    edad={23} titulacion={"Bellas Artes, Cursando Master Tecnologías Interactivas y Fabricación Digital"}
                    rol={"Modelado 3D y Desarrollo en Unity"} />

                <AboutUsItem src={mujer_2} alt={"foto mujer_2"} nombre={"María Moreno Martínez"} style={{justifySelf: "flex-end"}}
                    edad={23} titulacion={"Bellas Artes, Cursando Master Tecnologías Interactivas y Fabricación Digital"}
                    rol={"Modelado 3D y Desarrollo en Unity"} />
            </div>
        </div>
    )
}