import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async thunk
const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

// Define the slice
const ProductsSlice = createSlice({ 
  name: 'products',
  initialState: { 
    products: [],
    url: 'https://localhost:7164/Product?Filters=productType%3D%3DФлагманские%20продукты'
  },
  reducers: {
    setUrl: (state, action) => {
        return { 
          ...state,
          url: action.payload
        };
      },
    setProducts: (state, action) => {
      state.products = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
  }
});

export const selectProducts = (state: any) => state.products.products;
export const selectUrl = (state: any) => state.products.url;

// Export the async thunk and the reducer
export { fetchProducts, ProductsSlice };

export const {setUrl, setProducts} = ProductsSlice.actions

export default ProductsSlice.reducer;