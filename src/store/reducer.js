import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const myReducer = createSlice({
  name: 'storeReducer',
  initialState: {
    isLogged: false,
    user: null,
    showLoader: false,
    toast: {
      open: false,
      message: '',
      type: '',
    },
  },

  reducers: {
    login: (state, {payload}) => {
      state.isLogged = true;
      if (payload) {
        state.user = payload;
      }
    },
    logout: state => {
      state.isLogged = false;
      AsyncStorage.removeItem('access_token');
      state.user = null;
    },
    toggleLoader: (state, {payload}) => {
      state.showLoader = payload;
    },
    openToast: (state, {payload}) => {
      state.toast = {
        open: true,
        message: payload.message,
        type: payload.type,
      };
    },
    closeToast: state => {
      state.toast = {
        open: false,
        message: null,
        type: '',
      };
    },
  },
});

export const {login, logout, toggleLoader, openToast, closeToast} =
  myReducer.actions;
export default myReducer.reducer;
