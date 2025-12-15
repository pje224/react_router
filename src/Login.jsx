import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  function handleLogin() {
    if (!name.trim()) {
      alert("이름을 입력하세요");
      return;
    }
    setIsLogin(true);
  }
  return (
    <>
      {isLogin ? (
        <h2>{name}님, 환영합니다. </h2>
      ) : (
        <>
          <input type="text" placeholder="이름 입력하기" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleLogin}>로그인</button>
        </>
      )}

      {/* <input type="text" placeholder="이름 입력하기" value={name} 
      onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={handleLogin}>로그인</button> */}
    </>
  );
}
