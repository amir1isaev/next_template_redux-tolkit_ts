import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Main from '@/layout/Main'
import Providers from 'containers/Providers'
import NextNProgress from 'nextjs-progressbar'
import { FC, ReactNode } from 'react'

const Layout: FC<IProps> = ({ children }) => {
	return (
		<Providers>
			<NextNProgress color='#58a6ff' />
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Providers>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
