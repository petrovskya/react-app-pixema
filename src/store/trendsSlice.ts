import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { transformShortMovies } from 'mappers';
import { TransformedShortMovie } from 'types';

interface TrendsState {
  trends: TransformedShortMovie[];
  isLoading: boolean;
  error: string | null;
}

export const fetchTrendsMovies = createAsyncThunk<any[]>(
  'movies/fetchTrends',
  async () => {
    const { data } = await axios.get(
      'http://www.omdbapi.com/?s=marvel&plot=full&apikey=af084387'
    );
    return transformShortMovies(data);
  }
);

const initialState: TrendsState = {
  isLoading: false,
  error: null,
  trends: [],
};

const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrendsMovies.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrendsMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
    });
    builder.addCase(fetchTrendsMovies.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default trendsSlice.reducer;
