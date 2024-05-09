import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function FaqsItem({pregunta, respuesta}) {
    const [isActive, setIsActive] = useState(false);


    return (
        <article className='faqs_item'>
            <div className={"faqs_item_question" + (isActive ? " faqs_item_question_active" : "")} onClick={() => setIsActive(!isActive)}>
                <span>{pregunta}</span>
                <IoIosArrowUp />
            </div>
            <div className={"faqs_item_answer" + (isActive ? ' faqs_item_answer_active' : '')}>
                {respuesta}
            </div>
        </article>
    )
}