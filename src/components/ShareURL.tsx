'use client';

import { v4 as uuid } from 'uuid'
import React, { useState } from 'react';
import { getCommentCount } from '@/api/getCommentCount';

const ShareURL: React.FC = () => {

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '장감자 댓글 좋아요 수',
          text: '장감자 댓글 좋아요 수를 확인해보세요! 지금 좋아요 수: ' + getCommentCount(),
          url: `${window.location.origin}/?${uuid()}`
        });
      } catch (error) {
        // setShareResult('공유 중 오류가 발생했습니다.');
        // console.error('공유 오류:', error);
      }
    }
  };

  if (!navigator.share) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full">
      <button onClick={handleShare} className="border border-white text-white px-4 py-2 rounded-md">공유하기</button>
    </div>
  );
};

export default ShareURL;