import { useState } from 'react';
import s from './CheckBox.module.scss';
import { ReactComponent as Vector } from '../../../assets/svg/Vector-Chek.svg';
import { ReactComponent as Checkbox } from '../../../assets/svg/Checkbox.svg';

const CheckBox = ({id}) => {
    const [isShow, setIsShow] = useState(false);

    

    const handleChange = e => {
              if (e.target.value==='on'){
            setIsShow(prev => !prev);
        }
    };

    return (
        <>
            {!isShow && <Checkbox  />}
            {isShow && <Vector />}
            <input
                type="checkbox"
                name="day"
                id={id}
                onChange={handleChange}
                className={s.check}
                
            />
        </>
    );
};

export default CheckBox;
