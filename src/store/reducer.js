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
  },
});

export const {login} = myReducer.actions;
export default myReducer.reducer;
