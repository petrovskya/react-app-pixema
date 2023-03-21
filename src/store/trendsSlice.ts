import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { transformShortMovies } from 'mappers';
import { Movie } from 'types';

interface TrendsState {
  trends: Movie[];
  isLoading: boolean;
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
