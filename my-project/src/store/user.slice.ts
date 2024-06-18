import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
	name: string | null;
}

const initialState: UserState = {
	name: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		logout: state => {
			state.name = null;
		},
	},
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
