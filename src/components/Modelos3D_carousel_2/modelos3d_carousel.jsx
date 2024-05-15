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
            title: t('modelo3d__modelo1_titulo'),
            subtitle: t('modelo3d__modelo1_descripcion'),
            alt: "Modelo3d",
            src: "Fallacartoon1.png",
            modelo3d_filename: "Falla_low_color",
            author: "Alba",
        },
        modelo2: {
            title: t('modelo3d__modelo2_titulo'),
            subtitle: t('modelo3d__modelo2_descripcion'),
            alt: "Modelo3d",
            src: "planetA.png",
            modelo3d_filename: "Planeta",
            author: "Alba",
        },
        modelo3: {
            title: t('modelo3d__modelo3_titulo'),
            subtitle: t('modelo3d__modelo3_descripcion'),
            alt: "Modelo3d",
            src: "ayuntamiento.png",
            modelo3d_filename: "Ayuntamiento",
            author: "Alba",
            
        },
        modelo4: {
            title: t('modelo3d__modelo4_titulo'),
            subtitle: t('modelo3d__modelo4_descripcion'),
            alt: "Modelo3d",
            src: "farola.png",
            modelo3d_filename: "Farola",
            author: "Mar",
        },
        modelo5: {
            title: t('modelo3d__modelo5_titulo'),
            subtitle: t('modelo3d__modelo5_descripcion'),
            alt: "Modelo3d",
            src: "aerografo.png",
            modelo3d_filename: "Aerografo",
            author: "Mar",
        },
        modelo6: {
            title: t('modelo3d__modelo6_titulo'),
            subtitle: t('modelo3d__modelo6_descripcion'),
            alt: "Modelo3d",
            src: "banco.png",
            modelo3d_filename: "Banco",
            author: "Mar",
            
        },
        modelo7: {
            title: t('modelo3d__modelo7_titulo'),
            subtitle: t('modelo3d__modelo7_descripcion'),
            alt: "Modelo3d",
            src: "atril.png",
            modelo3d_filename: "Atril",
            author: "Maria",
        },
        modelo8: {
            title: t('modelo3d__modelo8_titulo'),
            subtitle: t('modelo3d__modelo8_descripcion'),
            alt: "Modelo3d",
            src: "cajagrupo.png",
            modelo3d_filename: "GrupoCajas",
            author: "Maria",
        },
        modelo9: {
            title: t('modelo3d__modelo9_titulo'),
            subtitle: t('modelo3d__modelo9_descripcion'),
            alt: "Modelo3d",
            src: "caretilla.png",
            modelo3d_filename: "Carretilla",
            author: "Maria",
        },
        modelo10: {
            title: t('modelo3d__modelo10_titulo'),
            subtitle: t('modelo3d__modelo10_descripcion'),
            alt: "Modelo3d",
            src: "caretilla.png",
            modelo3d_filename: "Carretilla",
            author: "",
        },
        modelo11: {
            title: t('modelo3d__modelo11_titulo'),
            subtitle: t('modelo3d__modelo11_descripcion'),
            alt: "Modelo3d",
            src: "escalera.png",
            modelo3d_filename: "Escalera",
            author: "",
        },
        modelo12: {
            title: t('modelo3d__modelo12_titulo'),
            subtitle: t('modelo3d__modelo12_descripcion'),
            alt: "Modelo3d",
            src: "fuente.png",
            modelo3d_filename: "Fuente",
            author: "Maria",
        },
        modelo13: {
            title: t('modelo3d__modelo13_titulo'),
            subtitle: t('modelo3d__modelo13_descripcion'),
            alt: "Modelo3d",
            src: "andamio.png",
            modelo3d_filename: "Andamio",
            author: "",
        },
        modelo14: {
            title: t('modelo3d__modelo14_titulo'),
            subtitle: t('modelo3d__modelo14_descripcion'),
            alt: "Modelo3d",
            src: "edificio.png",
            modelo3d_filename: "Edificio1",
            author: "",
        },
        modelo15: {
            title: t('modelo3d__modelo15_titulo'),
            subtitle: t('modelo3d__modelo15_descripcion'),
            alt: "Modelo3d",
            src: "edificio2.png",
            modelo3d_filename: "Edificio2def",
            author: "",
        },
        modelo16: {
            title: t('modelo3d__modelo16_titulo'),
            subtitle: t('modelo3d__modelo16_descripcion'),
            alt: "Modelo3d",
            src: "FilmotecaValencia.png",
            modelo3d_filename: "Filmoteca",
            author: "Mar",
        },
        modelo17: {
            title: t('modelo3d__modelo17_titulo'),
            subtitle: t('modelo3d__modelo17_descripcion'),
            alt: "Modelo3d",
            src: "Banco512Blanco.png",
            modelo3d_filename: "Scene",
            author: "",
        },
        modelo18: {
            title: t('modelo3d__modelo18_titulo'),
            subtitle: t('modelo3d__modelo18_descripcion'),
            alt: "Modelo3d",
            src: "Banco512Blanco.png",
            modelo3d_filename: "Scene",
            author: "",
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
        <div className='app__wrapper modelos_page_container' id='modelos'>
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