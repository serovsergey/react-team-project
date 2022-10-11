import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types'
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal');

export const Modal = ({ onClose, showCloseBtn = false, children }) => {
    useEffect(() => {
        const handleKeyDown = evt => {
            if (evt.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = null;
            document.body.style.height = null;
        };
    }, [onClose]);

    const handleBackDropClick = evt => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={s.Overlay} onMouseDown={handleBackDropClick}>
            {/* <div elevation={4} className={s.Modal}> */}
            <div className={s.Modal}>
                {showCloseBtn && (
                    <button
                        className={s.closeBtn}
                        type="button"
                        onClick={onClose}
                    >
                        &#x2715;
                    </button>
                )}

                {children}
            </div>
        </div>,
        modalRoot
    );
};

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
// }

export default Modal;
