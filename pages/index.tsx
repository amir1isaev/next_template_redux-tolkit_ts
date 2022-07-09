import type { NextPage } from 'next'
import { useTypedSelector } from '@/hooks'

const Home: NextPage = () => {
	const count = useTypedSelector((state) => state.post.count)
	return (
		<div>
			<h1 className='text-5xl font-bold underline'>{count}</h1>
		</div>
	)
}

export default Home
