import { Header } from '../Header/Header.jsx'
import './Home.css'
import Canvas3DHome from './Canvas3DHome.jsx'
// import vision_pro from '../../assets/images/vision_pro_png.png'
import { useTranslation } from 'react-i18next';
import useWindowDimensions from '../../hooks/useWindowDimensions.jsx';

export function Home() {
    const { height, width } = useWindowDimensions();

    let calculateFovCanvas = () => {
        if (width >= 901) return 22
        if (width <= 900) return 14
    }

    const { t } = useTranslation();
    return (
        <section className="app__wrapper home">
            <div className='home_content'>
                <div className='home_content_modelo3d'>
                    <Canvas3DHome fov={calculateFovCanvas()} modelo3d_filename={"Scene"} />
                </div>
                <div className='home_content_text'>
                    <h1>{t('home__titulo_principal')}</h1>
                    <p>{t('home__titulo_principal_inmersio')}</p>
                    <span>{t('home__subtitulo')}</span>
                    <button>{t('home__boton')}</button>
                </div>
                {/* <Canvas3DHome modelo3d_filename={"vision-pro/Scene.jsx"}/> */}
                {/* <img className='vision-pro-img' src={vision_pro} alt="visio pro" /> */}
            </div>


        </section>
    )
}