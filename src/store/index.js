import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './slices/moviesSlice';
import songsSlice from './slices/songsSlice';

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

export { store };

