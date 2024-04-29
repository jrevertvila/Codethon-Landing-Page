// import './modelos3d_carousel2.css'
import './modelos3d_carousel.css'
import LogoArtemisPNG from '../../assets/ModelosPNG/LogoArtemisModelo3d.png'
import Modelo3d_item from './Modelo3d_item';

export default function Modelos3d_2() {
    const listOfCardElements = document.querySelectorAll('.card_mod');
    const cardContainer = document.querySelector('.card_mod-container');
    const carouselContainer = document.querySelector('.carousel');

    const modelos3d_json = {
        modelo1: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo2: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo3: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo4: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo5: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo6: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo7: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo8: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo9: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo10: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo11: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: LogoArtemisPNG,
            modelo3d_filename: "Scene",
            author: "Maria",
        }
    }

    let keys = Object.keys(modelos3d_json).length
    let pages = Math.ceil(Object.keys(modelos3d_json).length / 6)

    let cont_object = 0

    return (
        <div className='app__wrapper modelos_page_container'>
            <h2 className='modelos__page_title'>Modelos 3D</h2>
            <div className="carousel">
                <div className="card_mod-container">
                    {(() => {
                        let content = []

                        for (let j = 0; j < pages; j++) {
                            console.log("pagina " + j );
                            content.push(
                                <div className="card_mod" key={"key_card"+j}>
                                    {(() => {
                                        let content_items = []
                                        let contador = 0
                                        for (let x = cont_object; x < keys; x++) {

                                            if (contador == 6) break;
                                            contador++
                                            const modelo_item = modelos3d_json[x];
                                            console.log(modelo_item);
                                            console.log("dentro for");
                                            content_items.push(
                                                <Modelo3d_item key={"item"+cont_object} alt={modelo_item['alt']} src={modelo_item['src']} title={modelo_item['title'] + x} subtitle={modelo_item['subtitle']} modelo3d_filename={modelo_item['modelo3d_filename']} author={modelo_item['author']} />


                                            )
                                            cont_object++
                                        }
                                        console.log(content_items);
                                        return content_items

                                    })()}



                                </div>
                            )

                        }
                        return content

                    })()}
                    {/* <div className="card_mod">
                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 3"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 4"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />
                    </div>
                    <div className="card_mod">
                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 3"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 4"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />
                    </div>
                    <div className="card_mod">
                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 3"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 4"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla Principal"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />

                        <Modelo3d_item alt={"Modelo3d"} src={LogoArtemisPNG} title={"Falla 2"} subtitle={"Este modelo es el monumento principal de la falla"} modelo3d_filename={"Scene"} author={"Maria"} />
                    </div> */}

                </div>
            </div>

        </div>
    )
}












// listOfCardElements.forEach((cardElement, index) => {
//     cardElement.addEventListener('click', () => {
//         const scrollLeft = index * listOfCardElements[0].offsetWidth;
//         cardContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
//     });
// });


// container.addEventListener("mousedown", (e) => {
//     pressed = true;
//     startX = e.offsetX - innerContainer.offsetLeft;
//     container.style.cursor = "grabbing";
// });

// container.addEventListener("mouseenter", () => {
//     container.style.cursor = "grab";
// });

// container.addEventListener("mouseup", () => {
//     container.style.cursor = "grab";
//     pressed = false;
// });

// container.addEventListener("mousemove", (e) => {
//     if (!pressed) return;
//     e.preventDefault();

//     x = e.offsetX;
//     innerContainer.style.left = `${x - startX}px`;
// });