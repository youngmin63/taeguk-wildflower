import MainSlider from "./MainSlider";
import PopularProducts from "../components/PopularProducts";
import FlowerRecommender from "../components/FlowerRecommender";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="space-y-13 px-4 md:px-8 py-8">
      {/*메인 슬라이더*/}
      <section>
        <MainSlider />
      </section>

      {/*추천 상품*/}
      <section className="mt-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mb-4 shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            현재 인기있는 꽃
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            고객님들이 가장 많이 찾으시는 인기 꽃들을 만나보세요
          </p>
        </div>
        <PopularProducts />
      </section>

      {/*우리집 맞춤 상품*/}
      <section className="mt-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4 shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            우리집에 어울리는 꽃 추천
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            공간의 특성과 환경을 고려하여 최적의 꽃을 AI가 추천해드립니다
          </p>
        </div>
        <FlowerRecommender />
      </section>
    </div>
  );
}
