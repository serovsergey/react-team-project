const getUserEmail = state => state.user.email;
const getUserId = state => state.user.id;
const getUserBalance = state => state.user.balance;
const getIsLoading = state => state.auth.isLoading;
const getError = state => state.auth.error;

const userSelectors = {
    getUserEmail,
    getUserId,
    getUserBalance,
    getIsLoading,
    getError,
};

export default userSelectors;
