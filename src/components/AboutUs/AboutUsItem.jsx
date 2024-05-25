import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiAdobe } from "react-icons/si";

import { useTranslation } from 'react-i18next';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AboutUsItem({ src, alt, nombre, edad, titulacion, rol, hrefLinkedin = "", hrefGit = "", email = "", portfolio = "", style }) {
    const { t } = useTranslation();
    const notify = () => {
        toast.success("Correo electrónico copiado al portapales", {
            position: "bottom-center",
            theme: "dark"
        });
    };


    let copyToClipboard = (e) => {
        let emailinput = document.getElementById('myEmail')
        emailinput.select();
        emailinput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(emailinput.value);
        alert("copied")
        // navigator.clipboard.writeText(e).then(() => {})
        // notify()
    }


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
                <a href={hrefLinkedin} target="_blank" className='social_item linkedin_bg'>
                    <FaLinkedin /> Linkedin
                </a>
                {
                    hrefGit != "" ? (() => {
                        return (<a href={hrefGit} target="_blank" className='social_item github_bg'>
                            <FaSquareGithub /> GitHub
                        </a>)
                    })() : <></>
                }

                {
                    portfolio != "" ? (() => {
                        return (<a href={portfolio} target="_blank" className='social_item github_bg'>
                            <SiAdobe /> Portfolio
                        </a>)
                    })() : <></>
                }

                <a href={"mailto: " + email} target="_blank" onClick={() => copyToClipboard(email)} className='social_item email_bg'>
                    <MdEmail /> Email
                </a>
            </footer>
            <input type="hidden" value={email} id="myEmail"></input>
            <ToastContainer />
        </div>
    )
}