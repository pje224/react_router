import { useParams } from "react-router-dom";

export default function User() {
  const { userName } = useParams(); // 주소에서 name을 들고옴

  return (
    <>
      <h1>유저 페이지</h1>
      <p>당신의 이름은 {userName} 입니다</p>
    </>
  );
}
