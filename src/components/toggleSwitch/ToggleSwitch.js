import { useLocation } from 'react-router-dom';
import Switch from 'react-switch';
//import { BsCheck } from 'react-icons/bs';
import { BsExclamation } from 'react-icons/bs';

const ToggleSwitch = ({
    onToggle,
    taskId,
    isChecked,
    onToggleSwitchAwards,
    awardId,
}) => {
    const location = useLocation().pathname;

    const onToggleState = () => {
        location === '/awards'
            ? onToggleSwitchAwards(awardId)
            : onToggle(taskId);
    };

    return (
        <Switch
            onChange={onToggleState}
            checked={isChecked}
            onColor="#8EC63F"
            offColor="#FF4965"
            onHandleColor="#ffffff"
            uncheckedIcon={<BsExclamation color="#fff" size="21" />}
            //  checkedIcon={BsCheck}
            height={18}
            width={40}
            handleDiameter={14}
        ></Switch>
    );
};

export default ToggleSwitch;
