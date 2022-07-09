import { IPost } from '@/models'

export interface PostState {
	posts: IPost[]
	isLoading: boolean
	error: string
	count: number
}

export const initialState: PostState = {
	posts: [],
	isLoading: false,
	error: '',
	count: 0,
}
