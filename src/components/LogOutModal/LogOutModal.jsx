import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import authOperations from 'redux/auth/operations.auth'
import s from '../LogOutModal/logOutModal.module.scss'

const divInHtml = document.getElementById("modal")

const LogOutModal = ({onClose}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleKeyDown = evt => {
          if (evt.key === 'Escape') {
            onClose();
          }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);
    
    const handleBackDropClick = evt => {
        if (evt.target === evt.currentTarget) {
          onClose();
        }
    }
    return createPortal(
        <div className={s.backDrop} onClick={handleBackDropClick}>
            <div className={s.modal}>
            <p className={s.text}>Are you sure?</p>
            <div className={s.buttonList}>
                <button type="button" onClick={() => dispatch(authOperations.logout())}className={s.item}>yes</button>
                <button type="button" onClick={() => onClose()}className={s.item}>cancel</button>
            </div>
            </div>
            
        </div>, divInHtml)
}


export default LogOutModal
