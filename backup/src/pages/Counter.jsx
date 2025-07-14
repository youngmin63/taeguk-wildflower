import React, { useState } from "react";

function Counter() {
  const [textvalue, setTextvalue] = useState("");
  const handleChange = (e) => {
    setTextvalue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={textvalue}
        className="border-gray-300 border-2 rounded-md p-2"
        onChange={handleChange}
      />
      <p>입력값:{textvalue}</p>
    </div>
  );
}
export default Counter;
