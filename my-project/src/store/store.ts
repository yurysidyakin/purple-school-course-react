import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './favorite.slice';
import { saveState } from './storage';
import userSlice, { NAME_PERSISTED_NAME } from './user.slice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		favorite: favoriteSlice,
	},
});

store.subscribe(() => {
	saveState({ name: store.getState().user.name }, NAME_PERSISTED_NAME);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
