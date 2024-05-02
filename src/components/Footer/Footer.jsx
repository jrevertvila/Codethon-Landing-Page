import './Footer.css'
import upv_logo from '../../assets/images/upv_logo.png'
import ArtemisClubLogo from '../../assets/images/ArtemisLogo.png'

export default function Footer() {



    return (
        <footer className="app__footer">
            <img src={upv_logo} alt="logo upv" className='footer_upv_logo'/>
            <span>
                Memories en Cendra - Codethon 2024
            </span>
            <img src={ArtemisClubLogo} alt="logo upv" className='footer_artemis_logo'/>
        </footer>
    )
}