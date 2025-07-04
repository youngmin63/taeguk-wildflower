import { useState } from "react";

export default function FlowerRecommender() {
  const [form, setForm] = useState({
    size: "",
    direction: "",
    sunlight: "",
    pet: "",
    imgage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //추후 AI 추천 api 연동

    console.log("입력값", form);
    alert("추천 기능은 추후 구현될 예정입니다");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto ml-0">
      <div>
        <label className="block test-sm font-medium mb-1">평수</label>
        <input
          type="text"
          name="size"
          value={form.size}
          onChange={handleChange}
          placeholder="예:24평"
          className="w-full border rounded px-3 py-2 shadow-lg"
        />
      </div>
      <div>
        <label className="block test-sm font-medium mb-1 ">
          방향(남향/북향 등)
        </label>
        <select
          name="direction"
          vlaue={form.direction}
          onChange={handleChange}
          placeholder="예:남향"
          className="w-full border rounded px-3 py-2 shadow-lg"
        >
          <option value="">선택하세요</option>
          <option value="동향">동향</option>
          <option value="서향">서향</option>
          <option value="남향">남향</option>
          <option value="북향">북향</option>
        </select>
      </div>
      <div>
        <label className="block test-sm font-medium mb-1"> </label>
        햇빛은 잘 드나요?
        <select
          name="sunlight"
          value={form.sunlight}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 shadow-lg"
        >
          <option value="">선택하세요</option>
          <option value="많음">많음</option>
          <option value="보통">보통 </option>
          <option value="적음">적음</option>
        </select>
      </div>
      <div>
        <label className="block test-sm font-medium mb-1">반려동물 유무</label>
        <select
          name="pet"
          value={form.pet}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 shadow-lg"
        >
          <option value="">선택하세요</option>
          <option value="있음">있음</option>
          <option value="없음">없음</option>
        </select>
      </div>

      <div>
        <label className="block test-sm font-medium mb-1">
          공간 사진 업로드
        </label>
        <input
          type="file"
          name="image"
          accpet="image/*"
          onChange={handleChange}
          className="w-full "
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleSubmit}
      >
        추천 받기
      </button>
    </form>
  );
}
