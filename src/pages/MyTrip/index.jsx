import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "@/utils/scroll";

const MyTrip = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  useEffect(() => scrollToTop(), []);

  return (
    <div className="min-w-[1000px] w-[70%] mx-auto flex flex-col">
      <h3 className="my-6 font-medium text-2xl text-themeG">
        <i class="fa-solid fa-map-location-dot pr-2" />
        我的旅遊記憶庫
      </h3>
      <div className="mb-2">
        <span className="mr-6 text-lg hover:font-semibold cursor-pointer">
          已發布
        </span>
        <span className="text-lg hover:font-semibold cursor-pointer">草稿</span>
      </div>
      <hr />
      <div className="flex justify-end">
        <span
          onClick={() => changePage("/my-new-trip")}
          className="w-36 my-4 text-center py-1 rounded-lg bg-themeG text-white border-2 border-solid border-themeG hover:text-themeG hover:bg-white cursor-pointer"
        >
          <i className="fa-solid fa-plus mr-2"></i>
          新增記憶庫
        </span>
      </div>
      <div className="h-40 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGphcGFufGVufDB8fDB8fHww"
          alt=""
          className="w-1/5 h-full rounded-xl"
        />
        <div className="ml-4 p-4 h-full border border-solid border-gray-300 rounded-xl">
          <h3 className="mb-2 cursor-pointer text-xl font-medium hover:text-[#cd3333] ">
            日本｜東京五天四夜自由行
          </h3>
          <p className="text-lg mb-2">
            探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
          </p>
          <div className="flex justify-between text-gray-500">
            <span> 2023年7月23日</span>
            <div className="mr-2 text-base">
              <span className="mx-3 p-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                編輯
              </span>
              <span className="p-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                刪除
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTrip;
