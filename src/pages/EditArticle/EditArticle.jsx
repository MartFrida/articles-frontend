import React from 'react'
import { EditArticleForm } from '../../components/EditArticleForm/EditArticleForm.jsx'
import { useSelector } from 'react-redux'
import { selectIsLoadingArticles } from '../../redux/selectors'
import Loader from '../../components/Loader/Loader.jsx'

export const EditArticle = () => {
  const isLoading = useSelector(selectIsLoadingArticles)
  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <EditArticleForm />
      {isLoading && <Loader />}
    </div>
  )
}
