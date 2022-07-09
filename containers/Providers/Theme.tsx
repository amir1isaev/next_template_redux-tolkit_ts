import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const MyThemeProvider: FC<IProps> = ({ children }) => {
	return (
		<ThemeProvider defaultTheme='system' attribute='class'>
			{children}
		</ThemeProvider>
	)
}

interface IProps {
	children: ReactNode
}
export default MyThemeProvider
