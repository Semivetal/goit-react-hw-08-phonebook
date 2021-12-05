import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '../../redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.errorMessage = null;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.errorMessage = null;
    },

    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      // state.isRefreshingUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;
