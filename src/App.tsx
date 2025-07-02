import React, { useState } from "react";
import "./index.css";

const words = [
  { id: 1, vi: "xin chào", jp: "こんにちは", en: "hello", kr: "안녕하세요" },
  { id: 2, vi: "cảm ơn", jp: "ありがとう", en: "thank you", kr: "감사합니다" },
  { id: 3, vi: "tạm biệt", jp: "さようなら", en: "goodbye", kr: "안녕히 가세요" },
  { id: 4, vi: "vui", jp: "うれしい", en: "happy", kr: "기쁘다" },
  { id: 5, vi: "buồn", jp: "悲しい", en: "sad", kr: "슬프다" },
  { id: 6, vi: "ăn", jp: "食べる", en: "eat", kr: "먹다" },
  { id: 7, vi: "uống", jp: "飲む", en: "drink", kr: "마시다" },
  { id: 8, vi: "đi", jp: "行く", en: "go", kr: "가다" },
  { id: 9, vi: "đẹp", jp: "きれい", en: "beautiful", kr: "아름답다" },
  { id: 10, vi: "xấu", jp: "醜い", en: "ugly", kr: "못생기다" }
];

function App() {
  const [lang, setLang] = useState("jp");

  return (
    <div className="container">
      <h1>📘 VietHoc - 今日の単語</h1>

      <div className="lang-switch">
        {["jp", "en", "kr"].map((l) => (
          <button
            key={l}
            className={lang === l ? "active" : ""}
            onClick={() => setLang(l)}
          >
            {l === "jp" ? "日本語" : l === "en" ? "English" : "한국어"}
          </button>
        ))}
      </div>

      <div className="grid">
        {words.map((w) => (
          <div key={w.id} className="card">
            <h2>{w.vi}</h2>
            <p>{w[lang]}</p>
            <button onClick={() => alert(`「${w.vi}」：${w[lang]}`)}>詳細</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
