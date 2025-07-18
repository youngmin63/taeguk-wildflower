import { useState } from "react";

export default function FlowerRecommender() {
  const [form, setForm] = useState({
    size: "",
    direction: "",
    sunlight: "",
    pet: "",
    image: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // 로딩 시뮬레이션
    setTimeout(() => {
      setIsLoading(false);
      console.log("입력값", form);
      alert("추천 기능은 추후 구현될 예정입니다");
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl"></div>

      {/* 메인 컨테이너 */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 평수 입력 */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              평수
            </label>
            <input
              type="text"
              name="size"
              value={form.size}
              onChange={handleChange}
              placeholder="예: 24평"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            />
          </div>

          {/* 방향 선택 */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              방향
            </label>
            <select
              name="direction"
              value={form.direction}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
            >
              <option value="">방향을 선택하세요</option>
              <option value="동향">동향 (아침 햇살)</option>
              <option value="서향">서향 (오후 햇살)</option>
              <option value="남향">남향 (풍부한 햇살)</option>
              <option value="북향">북향 (차분한 빛)</option>
            </select>
          </div>

          {/* 햇빛 선택 */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              햇빛 양
            </label>
            <select
              name="sunlight"
              value={form.sunlight}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
            >
              <option value="">햇빛 양을 선택하세요</option>
              <option value="많음">많음 (직사광선)</option>
              <option value="보통">보통 (간접광선)</option>
              <option value="적음">적음 (그늘진 곳)</option>
            </select>
          </div>

          {/* 반려동물 유무 */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              반려동물
            </label>
            <select
              name="pet"
              value={form.pet}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
            >
              <option value="">반려동물 유무를 선택하세요</option>
              <option value="있음">있음 (안전한 꽃 추천)</option>
              <option value="없음">없음</option>
            </select>
          </div>

          {/* 이미지 업로드 */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              공간 사진 (선택사항)
            </label>
            <div className="relative">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl bg-white/50 backdrop-blur-sm hover:border-green-400 hover:bg-green-50/50 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-8 h-8 mx-auto text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-sm text-gray-600">
                    클릭하여 사진을 업로드하세요
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                추천 분석 중...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                맞춤 꽃 추천받기
              </div>
            )}
          </button>
        </form>

        {/* 추가 정보 */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            💡 AI가 분석하여 최적의 꽃을 추천해드립니다
          </p>
        </div>
      </div>
    </div>
  );
}
