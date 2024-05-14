// import './modelos3d_carousel2.css'
import './modelos3d_carousel.css'
import LogoArtemisPNG from '../../assets/ModelosPNG/LogoArtemisModelo3d.png'
import Modelo3d_item from './Modelo3d_item';
import { useEffect, useRef, useState } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { t } from 'i18next';

export default function Modelos3d_2() {
    const { height, width } = useWindowDimensions();

    const modelos3d_json = {
        modelo1: {
            title: "Falla",
            subtitle: t('descripcion_modelo_falla'),
            alt: "Modelo3d",
            src: "falla_img.png",
            modelo3d_filename: "Falla_low_color",
            author: "Maria",
        },
        modelo2: {
            title: "Logo Codethon Artemis",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "banco.png",
            modelo3d_filename: "Planeta",
            author: "Maria",
        },
        modelo3: {
            title: "Ayuntamiento",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "ayuntamiento.png",
            modelo3d_filename: "Ayuntamiento",
            author: "Maria",
            
        },
        modelo4: {
            title: "Farola",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "farola.png",
            modelo3d_filename: "Farola",
            author: "Maria",
        },
        modelo5: {
            title: "Aerografo",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "aerografo.png",
            modelo3d_filename: "Aerografo",
            author: "Maria",
        },
        modelo6: {
            title: "Banco",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "banco.png",
            modelo3d_filename: "Banco",
            author: "Maria",
            
        },
        modelo7: {
            title: "Atril",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "atril.png",
            modelo3d_filename: "Atril",
            author: "Maria",
        },
        modelo8: {
            title: "Grupo de Cajas",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "cajagrupo.png",
            modelo3d_filename: "GrupoCajas",
            author: "Maria",
        },
        modelo9: {
            title: "Carretilla",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "caretilla.png",
            modelo3d_filename: "Carretilla",
            author: "Maria",
        },
        modelo10: {
            title: "Carretilla",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "caretilla.png",
            modelo3d_filename: "Carretilla",
            author: "Maria",
        },
        modelo11: {
            title: "Escalera",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "escalera.png",
            modelo3d_filename: "Escalera",
            author: "Maria",
        },
        modelo12: {
            title: "Fuente",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "fuente.png",
            modelo3d_filename: "Fuente",
            author: "Maria",
        },
        modelo13: {
            title: "Andamio",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "andamio.png",
            modelo3d_filename: "Andamio",
            author: "Maria",
        },
        modelo14: {
            title: "Edificio",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "edificio.png",
            modelo3d_filename: "Edificio1",
            author: "Maria",
        },
        modelo15: {
            title: "Edificio 2",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "edificio2.png",
            modelo3d_filename: "Edificio2def",
            author: "Maria",
        },
        modelo16: {
            title: "Filmoteca",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "FilmotecaValencia.png",
            modelo3d_filename: "Filmoteca",
            author: "Maria",
        },
        modelo17: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "Banco512Blanco.png",
            modelo3d_filename: "Scene",
            author: "Maria",
        },
        modelo18: {
            title: "Falla Principal",
            subtitle: "Este modelo es el monumento principal de la falla",
            alt: "Modelo3d",
            src: "Banco512Blanco.png",
            modelo3d_filename: "Scene",
            author: "Maria",
        },
    }
    let setItemsPage = 6

    if (width <= 1000) setItemsPage = 4
    if (width <= 600) setItemsPage = 2
    // console.log(setItemsPage);
    let keys = Object.keys(modelos3d_json)
    let pages = Math.ceil(Object.keys(modelos3d_json).length / setItemsPage)
    let cont_object = 0

    const [active, setActive] = useState(false)
    const [down, setDown] = useState(false)
    const [startX, setStartX] = useState(false)
    const [scrollLeft, setScrollLeft] = useState(false)
    const [move_, setMove_] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0)
    const [maxScrollPaged, setMaxScrollPaged] = useState(0)
    const carouselRef = useRef(null);


    useEffect(() => {
        carouselRef.current.scrollLeft = move_;
    }, [move_]);

    useEffect(() => {
        carouselRef.current.scrollLeft = move_;
        // console.log(move_);
        setMaxScroll(Math.ceil(carouselRef.current.scrollWidth - carouselRef.current.clientWidth))
        setMaxScrollPaged(Math.ceil(maxScroll / pages))

    }, []);

    let mousedown = (e) => {
        setDown(true)
        setActive(true)
        setStartX(e.pageX - carouselRef.current.offsetLeft)
        setScrollLeft(carouselRef.current.scrollLeft)
    }

    let mousemove = (e) => {
        if (!down) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        setMove_(scrollLeft + walk)
        carouselRef.current.scrollLeft = move_;
    }

    let mouseleave = () => {
        setDown(false);
        setActive(false)
    }

    let mouseup = () => {
        setDown(false);
        setActive(false)
    }

    let setMoveFn = (m) => {
        console.log("move_", move_);
        console.log("maxScrollPaged", maxScrollPaged);
        console.log("m antes", m);
        if (m < 0) m = 0
        if (m > maxScroll) m = maxScroll
        console.log("m despues", m);
        setMove_(m)
    }

    // console.log(move_);

    return (
        <div className='app__wrapper modelos_page_container'>
            <h2 className='modelos__page_title'>Modelos 3D</h2>
            <div className="carousel">
                {/* <div className='anterior' onClick={() => setMoveFn(move_ - (maxScrollPaged))}>
                    <FaRegArrowAltCircleLeft />
                </div> */}
                {
                    (() => {
                        if (width <= 600)
                            // return <div className='siguiente' onClick={() => setMoveFn(move_ + maxScrollPaged)}>
                            //         <FaRegArrowAltCircleRight />
                            //     </div>
                            console.log(keys.length / pages);
                        // return (
                        //     <div className='custom_progress_bar'>
                        //         <div className='custom_progres_bar_progress'  style={{width: Math.ceil(300 / pages)+"px" }} ></div>
                        //     </div>
                        // )

                    })()
                }
                <div id='card_mod-container' ref={carouselRef} className={"card_mod-container" + (active ? ' active_drag' : '')} onMouseDown={(e) => mousedown(e)} onMouseLeave={() => mouseleave()} onMouseMove={(e) => mousemove(e)} onMouseUp={() => mouseup()}>
                    {(() => {
                        let content = []
                        for (let j = 0; j < pages; j++) {
                            content.push(
                                <div className="card_mod" key={"key_card" + j}>
                                    {(() => {
                                        let content_items = []
                                        let contador = 0
                                        for (let x = cont_object; x < keys.length; x++) {

                                            if (contador == setItemsPage) break;
                                            contador++
                                            const modelo_item = modelos3d_json[keys[x]];
                                            content_items.push(
                                                <Modelo3d_item key={"item" + cont_object} alt={modelo_item['alt']} src={modelo_item['src']} title={modelo_item['title']} subtitle={modelo_item['subtitle']} modelo3d_filename={modelo_item['modelo3d_filename']} author={modelo_item['author']} />
                                            )
                                            cont_object++
                                        }
                                        return content_items
                                    })()}
                                </div>
                            )
                        }
                        return content
                    })()}

                </div>
                {
                    (() => {
                        // if (width < 600)
                        // console.log("move",move_);
                        //     return (
                        //         <div className='custom_progress_bar'>
                        //             <div className='custom_progres_bar_progress' style={{ width: Math.ceil(300 / pages) + "px", marginLeft: move_+"px" }} ></div>
                        //         </div>
                        //     )


                    })()
                }
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