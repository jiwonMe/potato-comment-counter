'use server'
import { getCommentCount } from '@/api/getCommentCount';
import React from 'react'

const CommentDisplay = async () => {

  const cnt = await getCommentCount();

  return (
    <div className='flex flex-col items-center justify-center border border-gray-300 rounded-md p-4'>
      감자 댓글 좋아요 수
      <h1 className='text-2xl'>
       {cnt}
      </h1>
    </div>
  )
}

export default CommentDisplay