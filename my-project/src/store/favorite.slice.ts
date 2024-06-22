import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Film {
	id: number;
	count: number;
}

export interface FavoriteState {
	films: Film[];
}

const initialState: FavoriteState = {
	films: [],
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<number>) => {
			const existed = state.films.find(i => i.id === action.payload);
			if (!existed) {
				state.films.push({ id: action.payload, count: 1 });
				return;
			}
			state.films.map(i => {
				if (i.id === action.payload) {
					i.count += 1;
				}
				return i;
			});
		},
	},
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
