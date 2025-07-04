// src/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-20 border-t">
      <div className="max-w-6xl mx-auto px-6 ml-1 py-10 flex md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-green-700 mb-2">태국야생화</h3>
          <p className="mb-1"> Tel.010-6350-8274</p>
          <p className="mb-1"> 대표:권영주 </p>
          <p className="mb-1"> 사업자 등록번호: 1119698694 </p>
        </div>
      </div>

      <div className="border-t-2 py-4 text-center text-xs text-gray-500">
        <div className="flex justify-center gap-4 mb-1 ">
          <a href="#" className="hover:underline">
            이용약관
          </a>
          <a href="#" className="hover:underline">
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
}
