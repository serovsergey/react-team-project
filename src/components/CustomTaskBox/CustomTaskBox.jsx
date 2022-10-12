import { FaPlus } from 'react-icons/fa';
import s from '../CustomTaskBox/customTaskBox.module.scss';
import { useState } from 'react';
import Modal from '../../components/common/Modal';
import { useDispatch } from 'react-redux';
import tasksOperations from 'redux/tasks/operations.tasks';
import { ReactComponent as ImageIcon } from '../../assets/svg/Image.svg';
import { ReactComponent as PencilIcon } from '../../assets/svg/Pencil.svg';
import { ImPencil } from 'react-icons/im';
// ImPencil
// import { ReactComponent as PencilIcon } from '../../assets/svg/Penсil.svg';
import { toast } from 'react-toastify';

const CustomTaskBox = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [task, setTask] = useState('');
    const [points, setPoints] = useState('');
    const [file, setFile] = useState(null);
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        if(!task || !points){
            return toast.warning(`fields "Add Task" and "Add Points" are required`)
        }
        const formData = new FormData()
        formData.append("title", task)
        formData.append("reward", points)
        if(file){
            formData.append("file", file)
        }
        
        dispatch(tasksOperations.createTask(formData))
        formReset()
        toast.success(`Task added successfully`)
        setModalOpen(false)
    }

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
        const sizeOfMegabites = event.target?.files[0]?.size / 102400
        console.log(sizeOfMegabites)
        if(sizeOfMegabites > 10){
            return toast.warning("The file must be no more than 10 mb")
        }
        setFile(event.target?.files[0]);
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
                        <label className={s.imageLabel}>
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
                            <ImPencil className={s.pencilIcon}/>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="task"
                                placeholder="Add task..."
                                className={s.item}
                                value={task}
                            />
                            </label>
                            <label className={s.formLabel}>
                            <ImPencil className={s.pencilIcon}/>
                            <input
                                type="number"
                                onChange={handleChange}
                                name="points"
                                placeholder="Add points..."
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
