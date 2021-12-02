const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const getErrorMessage = state => state.auth.errorMessage;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshingUser,
  getErrorMessage,
};

export default authSelectors;
