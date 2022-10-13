import { privateAPI } from './http';

const getGifts = async () => {
    const { data } = await privateAPI.get('/gift');
    return data;
};

const buyGifts = async body => {
    // return {
    //     purchasedGiftIds: body.giftIds,
    //     updatedBalance: 0,
    // };
    const { data } = await privateAPI.patch('/gift', body);
    return data;
};

export const giftsAPI = {
    getGifts,
    buyGifts,
};
