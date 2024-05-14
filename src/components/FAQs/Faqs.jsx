import './Faqs.css'
import FaqsItem from './FaqsItem';


export default function Faqs() {

    return (
        <section className='faqs' id='faqs'>
            <h2 className='faqs_title'>Preguntas frecuentes</h2>
            <p className='faqs_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <div className='faqs_wrapper'>
                <FaqsItem
                    pregunta={"¿Cómo surge la idea de crear una experiencia de realidad virtual sobre las Fallas?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿Cuál es el objetivo de este proyecto de realidad virtual?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿Quiénes pueden disfrutar de esta experiencia de realidad virtual?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿Cuál es el alcance futuro de este proyecto?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿Se planea ofrecer esta experiencia en otros idiomas además del valenciano?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿Qué medidas de accesibilidad se han implementado para garantizar que esta experiencia sea inclusiva para todos los usuarios?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿El juego ya está terminado?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />

                <FaqsItem
                    pregunta={"¿Dónde puedo acceder a esta experiencia de realidad virtual?"}
                    respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                />
            </div>

        </section>
    )
}