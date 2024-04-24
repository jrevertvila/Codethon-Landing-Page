import { Header } from '../Header/Header.jsx'
import './Home.css'
import Canvas3DHome from './Canvas3DHome.jsx'
import vision_pro from '../../assets/images/vision_pro_png.png'

export function Home() {
    return (
        <section className="app__wrapper home">
            <Header />

            <div className='home_content'>
                <div className='home_content_modelo3d'>
                    <Canvas3DHome modelo3d_filename={"Scene.jsx"}/>
                </div>
                <div className='home_content_text'>
                    <h1>Submergeix-te en les falles amb VR</h1>
                    <span>Viu l'experiència fallera des de tallar la falla fins cremar-la</span>
                    <button>Saber-ne més</button>
                </div>
                {/* <Canvas3DHome modelo3d_filename={"vision-pro/Scene.jsx"}/> */}
                <img className='vision-pro-img' src={vision_pro} alt="visio pro" />
            </div>


        </section>
    )
}