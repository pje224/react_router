import { useParams } from "react-router-dom";

export default function User01() {
  const { name, age, city } = useParams();
  return (
    <>
      <h1>유저 페이지 01</h1>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>사는 지역 : {city}</p>
    </>
  );
}
