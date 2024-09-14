import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async thunk
const fetchPartners = createAsyncThunk(
  'partners/fetchPartners',
  async () => {
    try {
      const response = await fetch("http://74.242.168.235/api/Partner/Partners");
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

const fetchPartnersImgs = createAsyncThunk(
  'partners/fetchPartnersImgs',
  async () => {
    try {
      const response = await fetch("http://74.242.168.235/api/Partner/Partners");
      const data = await response.json();
      return data.map((p: any) => p.combinedImage);
    } catch (error: any) {
      console.error(error);
    }
  }
);

// Define the slice
const PartnersSlice = createSlice({
  name: 'partners',
  initialState: { 
    partners: [],
    partnersImgs: []
  },
  reducers: {
    setPartners: (state, action) => {
      state.partners = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPartners.fulfilled, (state, action) => {
      state.partners = action.payload;
    })
  }
});

export const selectPartners = (state: any) => state.partners; 
export const selectIsLoading = (state: any) => state.isLoading;

// Export the async thunk and the reducer
export { fetchPartners, PartnersSlice };

export const {setPartners} = PartnersSlice.actions

export default PartnersSlice.reducer;