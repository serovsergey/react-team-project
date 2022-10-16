import s from '../CustomTaskBox/customTaskBox.module.scss';
import Modal from '../../components/common/Modal';
import tasksOperations from 'redux/tasks/operations.tasks';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ReactComponent as ImageIcon } from '../../assets/svg/Image.svg';
import { ReactComponent as PencilIcon } from '../../assets/svg/Pencil.svg';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const CustomTaskBox = ({ atMain = false }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [task, setTask] = useState('');
    const [points, setPoints] = useState('');
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    let currentWeekdayIndex = new Date().getDay();
    currentWeekdayIndex =
        currentWeekdayIndex === 0 ? 6 : currentWeekdayIndex - 1;

    const allDays = [false, false, false, false, false, false, false];

    const daysArr = (arr, idx) => {
        return arr.map((elem, index) => (index === idx ? !elem : elem));
    };

    const src = file && window.URL.createObjectURL(file);
    const addTask = `${t(`Add task...`)}`;
    const addPoints = `${t(`Add points...`)}`;

    const handleSubmit = event => {
        event.preventDefault();
        if (!task || !points) {
            return toast.warning(
                `${t(`fields "Add Task" and "Add Points" are required`)}`
            );
        }
        const formData = new FormData();
        formData.append('title', task);
        formData.append('reward', points);
        if (file) {
            formData.append('file', file);
        }
        try {
            dispatch(tasksOperations.createTask(formData))
                .unwrap()
                .then(res => {
                    return (
                        atMain &&
                        dispatch(
                            tasksOperations.setActiveSingle({
                                taskId: res.id,
                                taskData: {
                                    days: daysArr(allDays, currentWeekdayIndex),
                                },
                            })
                        )
                    );
                });
        } catch (error) {
            return toast.warning(error.message);
        }

        formReset();
        setFile(null);
        toast.success(`${t('Task added successfully')}`);
        setModalOpen(false);
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
        const sizeOfMegabites = event.target?.files[0]?.size / 2 ** 20;
        if (sizeOfMegabites > 1) {
            setFile(null);
            return toast.warning(`${t('The file must be no more than 1 mb')}`);
        }
        setFile(event.target?.files[0]);
    };
    const formReset = () => {
        setTask('');
        setPoints('');
    };

    const handleModalClose = () => {
        setFile(null);
        setModalOpen(false);
    };

    return (
        <div className={s.box}>
            <p className={s.text}>
                {t(`If you want to get more prizes - add tasks`)} :{')'}
            </p>
            <button className={s.button} onClick={() => setModalOpen(true)}>
                <FaPlus color="#fff" size={27} />
            </button>
            {modalOpen && (
                <Modal onClose={() => handleModalClose()} showCloseBtn>
                    <div className={s.topWrapper}>
                        <label className={s.imageLabel}>
                            {file && (
                                <div className={s.imageWrapper}>
                                    <img src={src} alt="" className={s.check} />
                                </div>
                            )}
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
                            <label className={s.formLabel}>
                                <PencilIcon className={s.pencilIcon} />
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name="task"
                                    placeholder={addTask}
                                    className={s.item}
                                    value={task}
                                />
                            </label>
                            <label className={s.formLabel}>
                                <PencilIcon className={s.pencilIcon} />
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    name="points"
                                    placeholder={addPoints}
                                    className={s.item}
                                    value={points}
                                />
                            </label>
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
