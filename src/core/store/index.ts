import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { postReducer } from './post'
import { createWrapper } from 'next-redux-wrapper'
import { postAPI } from '@/service/post'

export const setupStore = () => {
	return configureStore({
		reducer: {
			post: postReducer,
			[postAPI.reducerPath]: postAPI.reducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
	})
}

const store = setupStore()

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(setupStore)
