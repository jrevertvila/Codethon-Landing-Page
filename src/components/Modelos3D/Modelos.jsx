import ModeloItem from './ModeloItem'
import './Modelos.css'
import LogoArtemisPNG from '../../assets/ModelosPNG/LogoArtemisModelo3d.png'

//Importar modelos
import ModelIphone from "../../assets/3D-Model/Scene.jsx";
import ModelLogoPlantea from "../../assets/3D-Model/LogoPlantea";


const info = {
    modelo1: {
        title: "Falla Principal",
        subtitle: "Este modelo es el monumento principal de la falla",
        modelo3d_filename: "",
        author: "Maria"
    }
}

export default function Modelos3D() {


    return (
        <section className="app__wrapper modelos_section">
            <h2 className='modelos_section_titulo'>{t('modelos3d__titulo')}</h2>

            <div className='modelos_container'>
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"}/>
                
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"LogoPlantea"} author={"Maria"}/>
                
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 3"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"}/>
                
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 4"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"}/>
                
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"}/>
                
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"LogoPlantea"} author={"Maria"}/>
                
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 3"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"}/>
                
                <ModeloItem alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 4"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"}/>
            </div>
            {/* <button onClick={openModal}>Abrir Modal</button> */}
        </section>
    )
}