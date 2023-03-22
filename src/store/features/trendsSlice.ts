import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { transformShortMovies } from 'mappers';
import { Movie } from 'types';

interface TrendsState {
  trends: Movie[];
  isLoading: string;
  error: string | null;
}

export const fetchTrendsMovies = createAsyncThunk<any[]>(
  'trends/fetchTrends',
  async () => {
    const { data } = await axios.get(
      'https://www.omdbapi.com/?s=star&plot=full&apikey=af084387'
    );
    return transformShortMovies(data);
  }
);

const initialState: TrendsState = {
  isLoading: 'idle',
  error: null,
  trends: [],
};

const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrendsMovies.pending, (state, { payload }) => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending';
        // state.error = null;
      }
    });
    builder.addCase(fetchTrendsMovies.fulfilled, (state, { payload }) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'successful';
        state.trends = payload;
      }
    });
    builder.addCase(fetchTrendsMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = 'failed';
        // state.error = payload;
      }
    });
  },
});

export default trendsSlice.reducer;
