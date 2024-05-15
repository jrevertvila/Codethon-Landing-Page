import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { useTranslation } from 'react-i18next';

export default function AboutUsItem({src, alt, nombre, edad, titulacion, rol, hrefLinkedin, hrefGit, email, style}) {
    const { t } = useTranslation();
    return (
        <div className='aboutUs_container_item' style={style}>
            <div className='item_top'>
                <section className='item_top_img'>
                    <img src={src} alt={alt} />
                </section>
                <section className='item_top_info'>
                    <span className='info_nombre'>{nombre} <span>{t('sobre_nosotros__edad')} {edad}</span></span>
                    {/* <span className='info_edad'>23 Años</span> */}
                    <span className='info_titulacion'>{titulacion}</span>
                    <span className='info_rol'><strong>{t('sobre_nosotros__rol')}</strong> {rol} </span>
                </section>
            </div>
            <footer className='item_bottom'>
                <a href='' className='social_item linkedin_bg'>
                    <FaLinkedin /> Linkedin
                </a>
                <a href='' className='social_item github_bg'>
                    <FaSquareGithub /> GitHub
                </a>
                <a href='' className='social_item email_bg'>
                    <MdEmail /> Email
                </a>
            </footer>
        </div>
    )
}