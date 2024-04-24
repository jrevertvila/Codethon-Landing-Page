import './ModeloItem.css'
import Modal from './Modal/Modal';
import { useState } from 'react';

export default function ModeloItem({ src, alt, title, subtitle, modelo3d_filename, author }) {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        console.log("open");
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    console.log(modelo3d_filename);
    return (
        <>
            <article className='modelo_item' onClick={openModal}>
                <img src={src} alt={alt} />
                <span>{title}</span>
            </article>
            <Modal isOpen={modalOpen} onClose={closeModal} title={title} subtitle={subtitle} modelo3d_filename={modelo3d_filename} author={author}/>
        </>

    )
}