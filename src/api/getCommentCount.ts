'use server';

export const getCommentCount = async () => {
  const response = await fetch(`https://m.hankookilbo.com/article/A2021031811480000657/comment?Page=0`);
  const json = await response.json();
  const findByOpinionId = async (opinionId: string) => {
    const comments = json['list'];
    return comments.find((comment: any) => comment.opinionId === opinionId);
  };

  const comment = await findByOpinionId('0e9dbb7b-ca7b-4851-8d92-9a570127514d');
  return comment.likeCnt;
};