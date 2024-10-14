import {createSlice} from '@reduxjs/toolkit';

export const myReducer = createSlice({
  name: 'storeReducer',
  initialState: {
    isLogged: false,
    user: null,
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
    },
  },
});

export const {login, logout} = myReducer.actions;
export default myReducer.reducer;
