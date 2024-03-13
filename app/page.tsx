import Link from "next/link";

export default function Home() {
  return <div>
    
    <div>
      <span>🌝</span>
      <h1>달달 무슨 달 </h1>
      <h2>쟁반같이 둥근 달 어디어디 떴나 동산 위에 떴지</h2>
    </div>

  

    <div>
      <Link href="/create-account">시작하기</Link>
      <div>
        <span>계정이 있나요?</span>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  </div>;
}
