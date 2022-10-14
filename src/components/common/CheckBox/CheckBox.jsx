import s from './CheckBox.module.scss';
import { ReactComponent as Vector } from '../../../assets/svg/Vector-Chek.svg';
import { ReactComponent as Checkbox } from '../../../assets/svg/Checkbox.svg';



const CheckBox = ({ title, checked, handleChange, idx }) => {


    return (
        
        <label className={s.label}>
            {checked ?  <Vector /> :<Checkbox />}
            <input
                type="checkbox"
                // name="day"

                onChange={()=>handleChange(idx)}
                className={s.check}
                // ref={btnRef}
                checked={checked}
            />
            <span className={s.day}>{title}</span>
           </label>
       
    
    );
};

export default CheckBox;
