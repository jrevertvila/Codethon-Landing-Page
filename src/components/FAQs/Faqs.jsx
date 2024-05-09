import './Faqs.css'
import FaqsItem from './FaqsItem';


export default function Faqs() {

    return (
        <section className='app__wrapper faqs'>
            <h2 className='faqs_title'>Preguntas frecuentes</h2>
            <p className='faqs_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <div className='faqs_wrapper'>
                <FaqsItem
                    pregunta={"¿El juego está ya terminado?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿La finalidad del juego es sustituir a Las Fallas?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿El juego está ya terminado?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />
            </div>

        </section>
    )
}