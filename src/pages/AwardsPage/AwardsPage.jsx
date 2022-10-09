import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from 'components/common/Button';
import Card from 'components/common/Card';
import Container from 'components/Container';
import ToggleSwitch from 'components/toggleSwitch/ToggleSwitch';
import { ReactComponent as PrizesIcon } from '../../assets/svg/Prizes.svg';
import ProgressBar from 'components/ProgressBar';
import ProgressBarMobile from 'components/ProgressBarMobile';
import s from './awardsPage.module.scss';

// import PropTypes from 'prop-types';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
    return isMobile ? children : null;
};

const AwardsPage = props => {
    return (
        <Container>
            <div className={s.prize__label}>
                <PrizesIcon />
                <h2 className={s.title}> my prizes</h2>
            </div>

            <Desktop>
                <ProgressBar />
            </Desktop>
            <Tablet>
                <ProgressBar />
            </Tablet>

            <Card>
                <ToggleSwitch />
            </Card>
            <Button>confirm</Button>
            <Mobile>
                <ProgressBarMobile />
            </Mobile>
        </Container>
        // </div>
    );
};

// AwardsPage.propTypes = {};

export default AwardsPage;
