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
      <section>
        <h2 className="text-2xl font-bold mt-7 mb-4">현재 인기있는 꽃</h2>
        <PopularProducts />
      </section>

      {/*우리집 맞춤 상품*/}
      <section>
        <h2 className="text-2xl font-bold mt-10 mb-4">
          우리집에 어울리는 꽃 추천
        </h2>
        <FlowerRecommender />
      </section>
    </div>
  );
}
