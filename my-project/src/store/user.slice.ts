import { createSlice } from '@reduxjs/toolkit';

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
		addName: state => {
			state.name = '123';
		},
		logout: state => {
			state.name = null;
		},
	},
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
