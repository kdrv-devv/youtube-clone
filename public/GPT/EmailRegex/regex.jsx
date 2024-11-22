import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Emailni tekshirish uchun regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value) && value !== "") {
      setError("Email formati noto'g'ri!");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input
        value={email}
        onChange={handleChange}
        className="outline-none border-[1px] border-solid border-black rounded-[4px] h-[35px] p-[8px]"
        type="text" // type="text" qilsak ham validatsiya qo'l bilan bajariladi
        placeholder="Email..."
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        disabled={error || !email} // Xatolik yoki bo'sh email bo'lsa tugma o'chadi
      >
        Yuborish
      </button>
    </div>
  );
}

export default App;
