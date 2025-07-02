import React, { useEffect, useState } from "react";

const popularProducts = [
  {
    id: 1,
    name: "화이트 튤립 부케",
    price: "18,000원",
    image: "/products/tulip.jpg",
  },
  {
    id: 2,
    name: "안개꽃 믹스",
    price: "15,000원",
    image: "/products/babysbreath.jpg",
  },
  {
    id: 3,
    name: "핑크 장미 박스",
    price: "22,000원",
    image: "/products/rosebox.jpg",
  },
  {
    id: 4,
    name: "노란 프리지아",
    price: "17,000원",
    image: "/products/freesia.jpg",
  },
  {
    id: 5,
    name: "라벤더 드라이 플라워",
    price: "19,000원",
    image: "/products/lavender.jpg",
  },
  {
    id: 6,
    name: "리시안셔스 믹스",
    price: "20,000원",
    image: "/products/lisianthus.jpg",
  },
];

export default function PopularProducts() {
  const [current, setCurrent] = useState(0);
  const itemsperPage = 3;

  const maxIndex = Math.ceil(popularProducts.length / itemsperPage) - 1;

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };

  const startIndex = current * itemsperPage;
  const visibleProducts = popularProducts.slice(
    startIndex,
    startIndex + itemsperPage
  );

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <div className="relative">
      {/*slide button*/}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-2xl px-2 shadow rounded-full z-10 disabled:opacity-30"
        disabled={current === 0}
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-2xl px-2   shadow rounded-full z-10 disabled:opacity-30"
        disabled={current === maxIndex}
      >
        →
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-3">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
