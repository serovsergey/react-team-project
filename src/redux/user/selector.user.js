const getUserEmail = state => state.user.email;
const getUserId = state => state.user.id;
const getUserBalance = state => state.user.balance;
const getPurchasedGifts = state => {
    return state.gifts.items?.filter(({ id }) =>
        state.user.purchasedGiftIds?.includes(id)
    );
};
const getIsLoading = state => state.user.isLoading;
const getError = state => state.user.error;

const userSelectors = {
    getUserEmail,
    getUserId,
    getUserBalance,
    getPurchasedGifts,
    getIsLoading,
    getError,
};

export default userSelectors;
