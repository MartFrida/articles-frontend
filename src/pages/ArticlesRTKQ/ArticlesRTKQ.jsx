import React from 'react'
import ArticleItemRTKQ from './ArticleItemRTKQ'
import { useGetArticlesQuery } from '../../redux/rtqQuery/atriclesAPI'


const ArticlesRTKQ = () => {
  const { data, isLoading, isError, error } = useGetArticlesQuery()

  return (
    <div className='py-24 bg-hero-pattern w-full bg-repeat-y bg-contain'>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error}</h2>}
      <ul>
        {data?.map(item =>
          <li key={item._id}>
            <ArticleItemRTKQ {...item} />
          </li>
        )}
      </ul>
    </div>

  )
}

export default ArticlesRTKQ