import type { NextPage } from 'next'
import { useTypedSelector } from '@/hooks'
import { useFetchAllPostsQuery } from '@/service/post'
import { IPost } from '@/models'

const Home: NextPage = () => {
	const count = useTypedSelector((state) => state.post.count)
	const { data: posts, error, isLoading } = useFetchAllPostsQuery(3)

	return (
		<div className='flex flex-col gap-4 px-5'>
			<h1 className='text-5xl font-bold underline'>{count}</h1>
			{isLoading && <div className='text-white bg-black p-2 italic'>загрузка....</div>}
			{error && <span className='text-red-500 italic'>Произошла ошибка</span>}
			<div className='flex flex-col gap-4'>
				{posts &&
					posts.map((item: IPost) => (
						<div key={item.id} className='bg-zinc-900 px-4 py-2 rounded-lg'>
							<h2 className='text-xl'>{item.title}</h2>
							<h2 className='text-gray-400'>{item.body}</h2>
						</div>
					))}
			</div>
		</div>
	)
}

export default Home
