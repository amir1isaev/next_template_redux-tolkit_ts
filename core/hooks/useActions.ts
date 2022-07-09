import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '../store'
import { postActions } from '../store/post'

const allActions = { ...postActions }

const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators(allActions, dispatch)
}

export default useActions
