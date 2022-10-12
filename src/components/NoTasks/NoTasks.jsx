import React from 'react';
// import PropTypes from 'prop-types';

import s from './noTasks.module.scss';
import { Link } from 'react-router-dom';
import plannerDesktop1x from '../../assets/images/desktop/1x/planer1x.png';
import plannerDesktop2x from '../../assets/images/desktop/2x/planer2x.png';
import plannerTablet1x from '../../assets/images/tablet/1x/planer1x.png';
import plannerTablet2x from '../../assets/images/tablet/2x/planer2x.png';
import plannerMobile1x from '../../assets/images/mobile/1x/planer1x.png';
import plannerMobile2x from '../../assets/images/mobile/2x/planer2x.png';
import Button from 'components/common/Button';

const NoTasks = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.messageBlock}>
                <span className={s.message}>No tasks on this day</span>
                <Link to="/planning" className={s.link}>
                    <Button>Schedule tasks</Button>
                </Link>
            </div>
            {/* <div className={s.noTasks}></div> */}
            <picture className={s.picture}>
                <source
                    srcSet={`${plannerDesktop1x} 1x, ${plannerDesktop2x} 2x`}
                    media="(min-width:1280px)"
                />
                <source
                    srcSet={`${plannerTablet1x} 1x, ${plannerTablet2x} 2x`}
                    media="(min-width:768px)"
                />
                <source
                    srcSet={`${plannerMobile1x} 1x, ${plannerMobile2x} 2x`}
                    media="(min-width:320px)"
                />
                <img src={plannerMobile1x} alt="" />
            </picture>
        </div>
    );
};

// NoTasks.propTypes = {};

export default NoTasks;
