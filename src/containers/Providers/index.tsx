import { FC, ReactNode } from 'react'
import ThemeProvider from './Theme'

const Providers: FC<IProps> = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

interface IProps {
	children: ReactNode
}
export default Providers
