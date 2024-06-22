import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const NAME_PERSISTED_NAME = 'userName';
export interface UserState {
	name: string | null;
}

export interface UserPersistent {
	name: string | null;
}

const initialState: UserState = {
	name: loadState<UserPersistent>(NAME_PERSISTED_NAME)?.name ?? null,
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
