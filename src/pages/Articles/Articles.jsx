import React, { useEffect } from 'react'
import { ArticleItem } from '../../components/ArticleItem/ArticleItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticles, selectIsLoadingArticles, selectIsError } from '../../redux/selectors'
import { fetchData } from '../../redux/articles/operations'
import Loader from '../../components/Loader/Loader'
import SearchComponent from '../../components/SearchComponent/SearchComponent'

export const Articles = () => {
	const isLoading = useSelector(selectIsLoadingArticles)
	const isError = useSelector(selectIsError)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])
	const articles = useSelector(selectArticles)
	return (
		<div className='w-full bg-hero-pattern bg-contain bg-repeat py-16 px-4 relative'>
			<SearchComponent />
			<ul >
				{articles?.map(article => (
					<li key={article._id}>
						<ArticleItem {...article} />
					</li>
				))}
			</ul>
			{isLoading && <Loader />}
			{isError && <h1>{isError}</h1>}
		</div>
	)
}
