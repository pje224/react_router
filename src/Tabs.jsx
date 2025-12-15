import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState("about");
  return (
    <>
      {/* 탭 버튼 */}
      <div>
        <button onClick={() => setTab("about")}>소개</button>
        <button onClick={() => setTab("photos")}>사진</button>
        <button onClick={() => setTab("comments")}>댓글</button>
      </div>
      {/* 탭 내용 */}
      <div>
        {tab === "about" && <p>저는 박정은 이에요</p>}
        {tab === "photos" && <p>여기는 사진들이 있어요</p>}
        {tab === "comments" && <p>여기는 댓글들이 있어요</p>}
      
      </div>
    </>
  );
}
