import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async thunk
const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    try {
      const response = await fetch("http://74.242.168.235/api/News");
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

// Define the slice 
const NewsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    delNews: 0,
    deleteShown: false
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
    })
  }
});

export const selectNews = (state: any) => state.news;
export const selectArticle = (state: any, id: number) => state.news.news.find((n: any) => n.id === id);

// Export the async thunk and the reducer
export { fetchNews, NewsSlice };

export const {setNews} = NewsSlice.actions

export default NewsSlice.reducer;