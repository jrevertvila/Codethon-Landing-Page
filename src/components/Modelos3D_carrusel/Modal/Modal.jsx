import { useEffect } from 'react';
import Canvas3DModel from '../../Canvas3DModel';
import './Modal.css'

export default function Modal({ isOpen, onClose, title, subtitle, author, modelo3d_filename, children }) {
    // console.log(isOpen);
    // if (!isOpen) return null;
    useEffect(()=>{

        document.querySelector(".app__wrapper__patrocinadores").appendChild(document.getElementById('modal-'+title.replace(/\s/g, "")))
    },[isOpen])

    return (
        <div className="modal-overlay" onClick={onClose} id={'modal-'+title.replace(/\s/g, "")} style={{display: isOpen ? 'flex' : 'none'}}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <button className="close-button" onClick={onClose}>
                        X
                    </button>
                </header>

                <div className='modal-main'>
                    <Canvas3DModel modelo3d_filename={modelo3d_filename}/>
                    <footer className='modal-footer'>
                        <span className='modal-title'>{title}</span>
                        <span className='modal-subtitle'>{subtitle}</span>
                        <span className='modal-autor'>Autor: {author}</span>
                    </footer>
                </div>
            </div>
        </div>
    );

}