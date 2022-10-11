import { FaPlus } from 'react-icons/fa';
import s from '../CustomTaskBox/customTaskBox.module.scss';
import { useState } from 'react';
// import { CgClose } from 'react-icons/cg';
import Modal from '../../components/common/Modal';
import { ReactComponent as ImageIcon } from '../../assets/svg/Image.svg';

const CustomTaskBox = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [taks, setTask] = useState('');
    const [points, setPoints] = useState('');
    const [image, setImage] = useState('');

    // const handleCloseModal = () => {
    //     setModalOpen(false);
    // };

    const handleSubmit = event => {
        event.preventDefault();
        const obj = { taks, points };
        formReset();
    };
    const handleChange = event => {
        switch (event.target.name) {
            case 'task':
                return setTask(event.target.value);
            case 'points':
                return setPoints(event.target.value);
            default:
                console.log('error in switch');
        }
    };
    const handleImageChange = event => {
        setImage(event.target.value);
        console.log(event.target.value);
    };
    const formReset = () => {
        setTask('');
        setPoints('');
    };

    return (
        <div className={s.box}>
            <p className={s.text}>
                If you want to get more prizes - add tasks :{')'}
            </p>
            <button className={s.button} onClick={() => setModalOpen(true)}>
                <FaPlus color="#fff" size={27} />
            </button>
            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)} showCloseBtn>
                    <div className={s.topWrapper}>
                        {/* <button
                            type="button"
                            onClick={handleCloseModal}
                            className={s.closeButton}
                        >
                            <CgClose size={18} className={s.cross} />
                        </button> */}
                        <label className={s.imageLabel}>
                            {' '}
                            <ImageIcon className={s.imageIcon} />
                            <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                                className={s.imageInput}
                            />
                        </label>
                    </div>
                    <div className={s.bottomWrapper}>
                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className={s.form}
                        >
                            {/* <PencilIcon className={s.pensilIcon}/> */}
                            <input
                                type="text"
                                onChange={handleChange}
                                name="task"
                                placeholder="Add task..."
                                className={s.item}
                                value={taks}
                            />
                            <input
                                type="number"
                                onChange={handleChange}
                                name="points"
                                placeholder="Add points..."
                                className={s.item}
                                value={points}
                            />
                            <button type="submit" className={s.formButton}>
                                Ok
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default CustomTaskBox;
