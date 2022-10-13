import s from './awardsPage.module.scss';
import { toast } from 'react-toastify';
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as PrizesIcon } from '../../assets/svg/Prizes.svg';
import giftsSelectors from 'redux/gifts/selector.gifts';
import giftsOperations from 'redux/gifts/operations.gifts';
import userSelectors from 'redux/user/selector.user';
import { MediaQuery } from 'hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';
import AwardsModalCard from 'components/AwardsModal/AwardsModalCard';
import AwardsModalTitle from 'components/AwardsModal/AwardsModalTitle';
import Button from 'components/common/Button';
import Cat from 'components/AwardsModal/Cat';
import Card from 'components/common/Card';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Modal from 'components/common/Modal';
import ProgressBar from 'components/ProgressBar';
import ProgressBarMobile from 'components/ProgressBarMobile';
import ToggleSwitch from 'components/toggleSwitch/ToggleSwitch';

// import PropTypes from 'prop-types';

const AwardsPage = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const gifts = useSelector(giftsSelectors.getGifts);
    const userBalance = useSelector(userSelectors.getUserBalance);
    const isLoading = useSelector(giftsSelectors.getIsLoading);
    const purchasedGifts = useSelector(userSelectors.getPurchasedGifts);
    const [giftIds, setGiftIds] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const purchasedGiftsPrice = useMemo(
        () =>
            gifts?.reduce((acc, { id, price }) => {
                return giftIds?.includes(id) ? (acc += price) : acc;
            }, 0),
        [giftIds, gifts]
    );

    const cheapestGift = useMemo(
        () =>
            gifts ? Math.min(...gifts?.map(({ price }) => price)) : Infinity,
        [gifts]
    );

    const isPurchaseAvailable = userBalance >= cheapestGift && giftIds.length;

    useEffect(() => {
        dispatch(giftsOperations.getGifts()).unwrap().then();
    }, [dispatch]);

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
            .then(() => {
                setIsModalOpen(true);
            })
            .catch(error => {
                toast.error(`${error.message}`);
            });
    };

    return (
        <>
            <Container>
                <div className={s.info}>
                    <div className={s.prize__label}>
                        <PrizesIcon />
                        <h2 className={s.title}>{t(`my prizes`)}</h2>
                    </div>
                    <div className={s.progressBar}>
                        <MediaQuery.Desktop>
                            <ProgressBar position="right" />
                        </MediaQuery.Desktop>
                        <MediaQuery.Tablet>
                            <ProgressBar position="right" />
                        </MediaQuery.Tablet>
                    </div>
                </div>
                <ul className={s.list}>
                    {gifts?.map(({ id, title, price, imageUrl }) => (
                        <li key={id} className={s.item}>
                            <Card
                                id={id}
                                title={title}
                                reward={price}
                                imageUrl={imageUrl}
                            >
                                {(userBalance - purchasedGiftsPrice >= price ||
                                    giftIds.includes(id)) && (
                                    <ToggleSwitch
                                        isChecked={giftIds.includes(id)}
                                        awardId={id}
                                        onToggleSwitchAwards={handleToggle}
                                    />
                                )}
                            </Card>
                        </li>
                    ))}
                </ul>
                <div className={s.btn}>
                    <Button
                        type="submit"
                        onClick={handleConfirm}
                        disabled={!isPurchaseAvailable}
                        isLoading={isLoading}
                    >
                        {!isPurchaseAvailable
                            ? `${t(`unavailable`)}`
                            : `${t(`confirm`)}`}
                    </Button>
                </div>
                <MediaQuery.Desktop>
                    <Footer />
                </MediaQuery.Desktop>
                <MediaQuery.Tablet>
                    <Footer />
                </MediaQuery.Tablet>
                {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)} showCloseBtn>
                        <Cat />
                        <div className={s.box}>
                            <AwardsModalTitle>
                                {t(`
                                Congratulations! You get:
                            `)}
                            </AwardsModalTitle>
                            <ul className={s.modal__list}>
                                {purchasedGifts.length > 0 &&
                                    purchasedGifts.map(
                                        ({ id, title, imageUrl }) => (
                                            <li
                                                className={s.modal__item}
                                                key={id}
                                            >
                                                <AwardsModalCard
                                                    title={title}
                                                    imageUrl={imageUrl}
                                                />
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>
                    </Modal>
                )}
            </Container>
            <MediaQuery.Mobile>
                <ProgressBarMobile />
            </MediaQuery.Mobile>
        </>
    );
};

// AwardsPage.propTypes = {
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//     handleToggle: PropTypes.func.isRequired,
// };

export default AwardsPage;
