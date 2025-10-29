import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포그래프 */}
      <div className="text-xs text-red-600">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-ls</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[13px]">text-13px</div>

      {/* 2. 백그라운드컬러 */}
      <div className="bg-amber-500">bg-amber-500</div>

      {/* 3. 사이즈 */}
      <div className="h-20 w-full bg-blue-500">box</div>

      {/* 4. 여백 */}
      <div className="m-5 h-50 w-50 bg-red-400 pt-5 pr-5 pb-5 pl-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>
      {/* 보더 */}
      <div className="m-5 rounded-md border-x border-t-2 border-r-2 border-b-2 border-red-500">
        border
      </div>
      {/* 플렉스 컨테이너 */}
      <div className="flex-low flex items-start justify-between">
        <div className="h-10 border">1</div>
        <div className="h-20 flex-1 border">2</div>
        <div className="h-30 border">3</div>
        <div className="h-40 border">4</div>
      </div>
    </div>
  );
}

export default App;
