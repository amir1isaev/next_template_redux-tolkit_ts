import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import { wrapper } from '@/store'
import { postActions } from '@/store/post'
import Layout from '@/containers/Layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => ({ ctx }): any => {
	store.dispatch(postActions.increment(50000))
	return {}
})

export default wrapper.withRedux(MyApp)
