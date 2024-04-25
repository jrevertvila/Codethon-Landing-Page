// import Carousel from './Carousel';
import './Modelos_Carrusel.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import google from "../../assets/images/google.png"
import nttdata from "../../assets/images/nttdata.png"
import edicom from "../../assets/images/edicom.png"
import ModeloItemCarousel from './ModeloItem_Carrusel';
import LogoArtemisPNG from '../../assets/ModelosPNG/LogoArtemisModelo3d.png'

export default function Modelos3D_Carrusel() {

    function vhToPixels(vh) {
        return Math.round(window.innerHeight / (100 / vh)) + 'px';
    }

    const modelos = {
        modelo1: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: google,
            alt: "Modelo 3D"

        },
        modelo2: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: nttdata,
            alt: "Modelo 3D"

        },
        modelo3: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: LogoArtemisPNG,
            alt: "Modelo 3D"

        },
        modelo4: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: edicom,
            alt: "Modelo 3D"

        },
        modelo5: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: google,
            alt: "Modelo 3D"

        },
        modelo6: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: edicom,
            alt: "Modelo 3D"

        },
        modelo7: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: google,
            alt: "Modelo 3D"

        },
        modelo8: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            modelo3d_filename: "Scene.jsx",
            author: "Maria",
            src: edicom,
            alt: "Modelo 3D"

        }
    }
    return (
        <div className="app__wrapper modelos3d_content">
            <h1 className='modelos__title'>Modelos 3D</h1>

            <Carousel
                swipeable="true"
                emulateTouch="true"
                infiniteLoop="true"
                showThumbs="false"
                renderThumbs={() => false}

            // dynamicHeight = "true"
            >

                {(() => {
                    let cont_object = 0
                    let content = []
                    let keys = Object.keys(modelos);
                    for (let i = 0; i < Math.ceil(Object.keys(modelos).length / 4); i++) {
                        content.push(
                            <div className='' style={{ flex: 1 }} key={"group"+i}>
                                <div className='models_carousel_container' key={"container"+i}>
                                    {
                                        (() => {
                                            let content_items = []
                                            let contador = 0
                                            for (let x = cont_object; x < keys.length; x++) {

                                                if (contador == 4) break;
                                                contador++
                                                const modelo_item = modelos[keys[x]];
                                                content_items.push(
                                                    <ModeloItemCarousel key={"item"+contador} alt={modelo_item['alt']} src={modelo_item['src']} title={modelo_item['title'] + x} subtitle={modelo_item['subtitle']} modelo3d_filename={modelo_item['modelo3d_filename']} author={modelo_item['author']} />
                                                )
                                                cont_object++
                                            }
                                            return content_items

                                        })()
                                    }
                                </div>
                            </div>
                        )

                    }

                    return content
                })()}

            </Carousel>

        </div>
    );
}