import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function AboutUsItem({src, alt, nombre, edad, titulacion, rol, hrefLinkedin, hrefGit, email, style}) {

    return (
        <div className='aboutUs_container_item' style={style}>
            <div className='item_top'>
                <section className='item_top_img'>
                    <img src={src} alt={alt} />
                </section>
                <section className='item_top_info'>
                    <span className='info_nombre'>{nombre} <span> {edad} años</span></span>
                    {/* <span className='info_edad'>23 Años</span> */}
                    <span className='info_titulacion'>{titulacion}</span>
                    <span className='info_rol'><strong>ROL en el proyecto:</strong> {rol} </span>
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