import s from './awardsPage.module.scss';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/common/Button';
import Card from 'components/common/Card';
import Container from 'components/Container';
import ToggleSwitch from 'components/toggleSwitch/ToggleSwitch';
import { ReactComponent as PrizesIcon } from '../../assets/svg/Prizes.svg';
import ProgressBar from 'components/ProgressBar';
import ProgressBarMobile from 'components/ProgressBarMobile';
import giftsSelectors from 'redux/gifts/selector.gifts';
import giftsOperations from 'redux/gifts/operations.gifts';
import { useState } from 'react';

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

const AwardsPage = () => {
    const gifts = useSelector(giftsSelectors.getGifts);
    const isLoading = useSelector(giftsSelectors.getIsLoading);
    const [giftIds, setGiftIds] = useState([]);
    const dispatch = useDispatch();
    console.log(gifts);

    const handleConfirm = () => {
        dispatch(giftsOperations.buyGifts());
    };

    return (
        <>
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
                <ul className={s.list}>
                    {gifts?.map(
                        ({ id, title, price, imageUrl, isSelected }) => (
                            <li key={id} className={s.item}>
                                <Card
                                    id={id}
                                    title={title}
                                    reward={price}
                                    imageUrl={imageUrl}
                                >
                                    <ToggleSwitch
                                        isChecked={isSelected}
                                        awardId={id}
                                    />
                                </Card>
                            </li>
                        )
                    )}
                </ul>
                <div className={s.btn}>
                    <Button type="submit" onClick={handleConfirm}>
                        confirm
                    </Button>
                </div>
            </Container>
            <Mobile>
                <ProgressBarMobile />
            </Mobile>
        </>
};

// AwardsPage.propTypes = {};

export default AwardsPage;
