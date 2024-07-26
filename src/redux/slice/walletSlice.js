import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: "",
    Network:"",
  },
  reducers: {
    setWalletAddress: (state, action) => {
      state.address = action.payload;
    },
    setNetwork: (state, action) => {
      state.Network = action.payload;
    },
  },
});

export const { setWalletAddress,setNetwork } = walletSlice.actions;
export default walletSlice.reducer;
