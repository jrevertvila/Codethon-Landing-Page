import { Header } from '../Header/Header.jsx'
import './Home.css'
import Canvas3DHome from './Canvas3DHome.jsx'
// import vision_pro from '../../assets/images/vision_pro_png.png'
import { useTranslation } from 'react-i18next';

export function Home() {
    const { t } = useTranslation();
    return (
        <section className="app__wrapper home">
            <Header />

            <div className='home_content'>
                <div className='home_content_modelo3d'>
                    <Canvas3DHome modelo3d_filename={"Scene"}/>
                </div>
                <div className='home_content_text'>
                    <h1>{t('home__titulo_principal')}</h1>
                    <span>{t('home__subtitulo')}</span>
                    <button>{t('home__boton')}</button>
                </div>
                {/* <Canvas3DHome modelo3d_filename={"vision-pro/Scene.jsx"}/> */}
                {/* <img className='vision-pro-img' src={vision_pro} alt="visio pro" /> */}
            </div>


        </section>
    )
}