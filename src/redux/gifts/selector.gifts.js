const getGifts = state => state.gifts.items;
const getIsLoading = state => state.gifts.isLoading;
const getError = state => state.gifts.error;

const giftsSelectors = {
    getGifts,
    getIsLoading,
    getError,
};

export default giftsSelectors;
