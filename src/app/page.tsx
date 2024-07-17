import { getCommentCount } from "@/api/getCommentCount";
import CommentDisplay from "@/components/CommentDisplay";
import { Metadata } from 'next';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <CommentDisplay />
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