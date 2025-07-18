"use client";

import { useState } from "react";

function Inputs() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };
  const { name, email, phone } = inputs;
  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" value={name} id="name" onChange={handleChange} />
      </div>

      <div>
        <label>이메일</label>
        <input type="text" value={email} id="email" onChange={handleChange} />
      </div>

      <div>
        <label>전화번호 </label>
        <input type="text" value={phone} id="phone" onChange={handleChange} />
      </div>
      <p>이름:{name}</p>
      <p>이메일:{email}</p>
      <p>전화번호:{phone}</p>
    </div>
  );
}
export default Inputs;
