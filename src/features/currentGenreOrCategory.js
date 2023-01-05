import { createSlice } from '@reduxjs/toolkit';

export const genreOrCateory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCateoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCateory.actions;
export default genreOrCateory.reducer;
