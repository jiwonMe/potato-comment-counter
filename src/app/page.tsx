import { getCommentCount } from "@/api/getCommentCount";
import CommentDisplay from "@/components/CommentDisplay";
import ShareURL from "@/components/ShareURL";
import { Metadata } from 'next';
import Link from "next/link";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-4">장감자 댓글 좋아요 수</h1>
      <div className="text-left text-zinc-200 pl-4 border-l-2 border-zinc-200 mb-4">
      남자 90년대생 실화냐? ㅋㅋㅋㅋㅋㅋㅋㅋ <br/>
아버지랑 딸인줄 <br />
- 지나가는행인1
      </div>
      <div className="flex flex-col items-left justify-start gap-4 w-1/3 min-w-[300px] max-w-[500px]">
        <CommentDisplay />
        <Link href='https://m.hankookilbo.com/News/Read/A2021031811480000657#comment-parent-container'>
        <button className='bg-blue-500 text-white p-2 rounded-md w-full'>
          좋아요 누르러 가기
        </button>
      </Link>
      <ShareURL />
      </div>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  // 여기서 동적으로 메타데이터를 생성합니다
  const cnt = await getCommentCount();

  return {
    title: '90년대생 실화냐? 좋아요: ' + cnt,
    description: '장감자 아카이빙',
    openGraph: {
      images: [`/api/og?count=${cnt}`],
    },
  };
}