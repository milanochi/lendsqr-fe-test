import React from 'react'
import { FaTimes } from 'react-icons/fa';

type ModalProps = {
    children: React.ReactNode
    onClose: () => void
    header: string
}
const styles: any = {
    overlay: {
        position: 'fixed',
        zIndex: 10000,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
    },
    heading: {
        position: 'absolute',
        top: '10px',
        left: '20px',
        background: 'transparent',
        border: 'none',
        fontSize: '18px',
        color: '#545F7D',
        fontWeight: '600',
    },
    modal: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        position: 'relative',
        width: '80%',
        maxWidth: '600px',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer'
    }
};

function Modal({ children, onClose, header }: ModalProps) {


    return (

        <div style={styles.overlay}>

            <div style={styles.modal}>
                <div>
                    <div style={styles.heading}>{header}</div>
                    <button style={styles.closeButton} onClick={onClose}><FaTimes color='red' /></button>
                </div>
                {children}
            </div>
        </div>
    );
}


export default Modal;
