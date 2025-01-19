import React from 'react'
import { ArticleForm } from '../../components/ArticleForm/ArticleForm.jsx'
import { useSelector } from 'react-redux'
import { selectIsLoadingArticles } from '../../redux/selectors'
import Loader from '../../components/Loader/Loader.jsx'

export const NewArticle = () => {
	const isLoading = useSelector(selectIsLoadingArticles)
	return (
		<div className='flex justify-center items-center min-h-[80vh]'>
			<ArticleForm />
			{isLoading && <Loader />}
		</div>
	)
}
