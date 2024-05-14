import { useState } from 'react';
import './Modelo3d_item.css'
import Modal from './Modal/Modal';
// import useImage from '../../hooks/useImage';

export default function Modelo3d_item({ src, alt, title, subtitle, modelo3d_filename, author }) {
    // const { loading, error, image } = useImage(src)
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='item_container' onClick={openModal}>
            <div className='item_container__img'>
                <img src={`/IMAGENES_3D_PREVISUALIZACION/${src}`} alt={alt} />
            </div>
            <span className='card_mod__title'>{title}</span>
            <Modal isOpen={modalOpen} onClose={closeModal} title={title} subtitle={subtitle} modelo3d_filename={modelo3d_filename} author={author}/>
        </div>
    )
}