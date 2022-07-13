import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { PostState, initialState } from './initialState'

const reducers = {
	increment: (state: PostState, action: PayloadAction<number>) => {
		state.count += action.payload
	},
	decrement: (state: PostState, action: PayloadAction<number>) => {
		state.count -= action.payload
	},
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers,
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.post,
			}
		},
	},
})

export const postReducer = postSlice.reducer
export const postActions = postSlice.actions
