import s from './awardsPage.module.scss';
import React, { useEffect } from 'react';
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
import Modal from 'components/common/Modal';
import AwardsModalCard from 'components/AwardsModal/AwardsModalCard';
import AwardsModalTitle from 'components/AwardsModal/AwardsModalTitle';
import Cat from 'components/AwardsModal/Cat';
import userSelectors from 'redux/user/selector.user';

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
  const purchasedGifts = useSelector(userSelectors.getPurchasedGiftIds);
    const [giftIds, setGiftIds] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(giftsOperations.getGifts());
    }, [dispatch]);

    // console.log(giftIds);

    const handleToggle = id => {
        if (giftIds.includes(id)) {
            setGiftIds(state => state.filter(giftId => id !== giftId));
        } else {
            setGiftIds(state => [...state, id]);
        }
    };

    const handleConfirm = () => {
        dispatch(giftsOperations.buyGifts({ giftIds }))
            .unwrap()
            .then(() => setIsModalOpen(true))
            .catch(console.log);
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
                                    {!isSelected && (
                                        <ToggleSwitch
                                            isChecked={giftIds.includes(id)}
                                            awardId={id}
                                            onToggleSwitchAwards={handleToggle}
                                        />
                                    )}
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
                {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)}>
                        <Cat />
                        <AwardsModalTitle>
                            Congratulations! You get:
                        </AwardsModalTitle>
                        <ul className={s.modal__list}>
                            <li className={s.modal__item}>
                                <AwardsModalCard />
                            </li>
                            <li className={s.modal__item}>
                                <AwardsModalCard />
                            </li>
                            <li className={s.modal__item}>
                                <AwardsModalCard />
                            </li>
                            <li className={s.modal__item}>
                                <AwardsModalCard />
                            </li>
                        </ul>
                    </Modal>
                )}
            </Container>
            <Mobile>
                <ProgressBarMobile />
            </Mobile>
        </>
    );
};

// AwardsPage.propTypes = {};

export default AwardsPage;
