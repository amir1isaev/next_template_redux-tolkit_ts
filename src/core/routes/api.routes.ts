import { serverURI } from 'core/config'

export const postAPIRoutes = {
	getOne: (id: string) => `${serverURI}/post/${id}`,
}
