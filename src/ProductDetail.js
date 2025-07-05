import "./ProductDetail.css";

function ProductDetail() {
  return (
    <div className="product-detail-container">
      <div className="product-summary">
        <img
          className="product-main-image"
          src="/images/products/flower1.jpg"
          alt="꽃 이미지"
        />
        <div className="product-summary-info">
          <h1 className="product-title">사랑이 가득한 장미꽃다발</h1>
          <p className="product-price">₩45,000</p>
          <button className="buy-button">구매하기</button>
        </div>
      </div>

      <div className="product-detail-description">
        <h2>상품 상세 설명</h2>
        <p>
          이 꽃다발은 신선한 생화를 사용하여 정성스럽게 제작되었습니다.
          <br />
          특별한 날을 더욱 특별하게 만들어줄 최고의 선물이에요!
        </p>
        <img
          className="detail-image"
          src="/images/products/flower-detail.jpg"
          alt="상세 이미지"
        />
      </div>

      <div className="delivery-info">
        <h3>배송 안내</h3>
        <p>주문 후 2~3일 이내 전국 택배 배송</p>
      </div>

      <div className="seller-info">
        <h3>판매자 정보</h3>
        <p>고기리농원 (Gogiri Farm)</p>
      </div>
    </div>
  );
}

export default ProductDetail;
