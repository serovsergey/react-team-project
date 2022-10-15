import s from './CheckBox.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as Vector } from '../../../assets/svg/Vector-Chek.svg';
import { ReactComponent as Checkbox } from '../../../assets/svg/Checkbox.svg';

const CheckBox = ({
    title,
    checked = false,
    handleChange,
    disabled = false,
}) => {
    return (
        <label className={s.label + (disabled ? ' ' + s.disabled : '')}>
            {checked ? <Vector /> : <Checkbox />}
            <input
                type="checkbox"
                onChange={handleChange}
                className={s.check}
                checked={checked}
                disabled={disabled}
            />
            <span className={s.day}>{title}</span>
        </label>
    );
};

export default CheckBox;

CheckBox.propTypes = {
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
