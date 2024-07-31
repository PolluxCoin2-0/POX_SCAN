import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: "",
    Network:"",
    login:false,
    signup:false,
  },
  reducers: {
    setWalletAddress: (state, action) => {
      state.address = action.payload;
    },
    setNetwork: (state, action) => {
      state.Network = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setSignup: (state, action) => {
      state.signup = action.payload;
    },
  },
});

export const { setWalletAddress,setNetwork, setLogin, setSignup} = walletSlice.actions;
export default walletSlice.reducer;
