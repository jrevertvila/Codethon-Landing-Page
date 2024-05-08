import Canvas3DModel from '../../Canvas3DModel';
import './Modal.css'
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ isOpen, onClose, title, subtitle, author, modelo3d_filename, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={(e) => {
            e.stopPropagation()
            onClose()
        }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <button className="close-button" onClick={onClose} style={{fontSize: "24px"}}>
                        <IoIosCloseCircleOutline />
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