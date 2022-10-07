// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUserName = state => state.auth.user.name;
const getEmail = state => state.auth.email;

// const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const getToken = state => state.auth.token;
const getIsLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const authSelectors = {
  getToken,
  getIsLoading,
  getEmail,
  getError,
};

export default authSelectors;
