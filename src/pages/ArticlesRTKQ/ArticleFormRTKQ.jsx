import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserName } from '../../redux/selectors'
import { useAddArticlesMutation } from '../../redux/rtqQuery/atriclesAPI'

const ArticleFormRTKQ = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const user = useSelector(selectUserName)
  const [addArticle] = useAddArticlesMutation()
  const submit = data => {
    addArticle({ ...data, tags: data.tags.split(','), author: user, createdAt: Date.now() })
    reset()
    navigate('/articlesRTK')
  }
  const handleClosePage = () => navigate('/articlesRTK')
  return (
    <div className=" flex justify-center items-center h-screen px-4 pt-16  lg:px-8 bg-hero-pattern w-full  bg-cover" >
      <form onSubmit={handleSubmit(submit)}
        className='w-full bg-white grid gap-4 shadow-lg border border-gray-300 rounded-md px-6 py-12 '>
        <input autoFocus placeholder='Article title' {...register('title')} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' />
        <textarea rows="8" placeholder='Article text' {...register('description')} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' />
        <input placeholder='Article tags' {...register('tags')} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' />
        <div className='flex gap-x-4 md:gap-x-8 text-white'>

          <button className=' shadow-lg bg-medium-purple-hover rounded py-3 px-4 md:px-6 max-w-48 text-base md:text-xl font-medium tracking-wide hover:scale-105 hover:bg-medium-purple-hover duration-300 transition hover:shadow-emerald-500'>Add article</button>

          <button onClick={handleClosePage} className='shadow-lg bg-medium-purple-hover rounded py-3 px-4 md:px-6 max-w-48 text-base md:text-xl font-medium tracking-wide hover:scale-105 hover:bg-medium-purple-hover duration-300 transition hover:shadow-rose-500'>Cancel</button>

        </div>


      </form>
    </div>

  )
}

export default ArticleFormRTKQ