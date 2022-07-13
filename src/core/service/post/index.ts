import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import IPost from 'core/models/IPost'

export const postAPI = createApi({
	reducerPath: 'post-api',
	tagTypes: ['Post'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	endpoints: (build) => ({
		fetchAllPosts: build.query<IPost[], number>({
			query: (limit) => ({
				url: '/posts',
				params: {
					_limit: limit,
				},
			}),
			providesTags: (result) => ['Post'],
		}),
	}),
})

export const { useFetchAllPostsQuery } = postAPI
