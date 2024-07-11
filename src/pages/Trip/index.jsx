import { useNavigate } from "react-router-dom";

const Trip = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1474533883693-59a44dbb964e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJlYWNofGVufDB8fDB8fHww"
        alt=""
        className="w-full h-[320px]"
      />
      <div className="flex flex-col justify-center items-center mt-[-70px] text-[#002143]">
        <img
          src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="authorImage"
          className="w-40 h-40 object-cover overflow-hidden rounded-full border-[7px] border-solid border-white"
        />
        <h1 className="m-1 font-medium text-3xl">Kelly Chen</h1>
        <span className="m-2 px-4 text-xl border border-solid border-[#002143] cursor-pointer">
          追蹤
        </span>
      </div>
      <div>
        <ul className="p-3 text-[20px] flex justify-center text-[#002143] cursor-pointer">
          <li className="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            簡介
          </li>
          <li className="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            39 回憶
          </li>
          <li className="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            2 收藏
          </li>
          <li className="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            80 讚
          </li>
          <li className="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            1000 粉絲
          </li>
        </ul>
        <hr />
        <div className="flex flex-col justify-center items-center m-5">
          <div className="h-[140px] w-[800px] border border-solid border-black ">
            簡介內容,彈窗框
          </div>
          <div className="w-[800px] m-10">
            <h2 className="my-5 font-medium text-2xl text-[#002143]">
              旅遊回憶庫
            </h2>
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGphcGFufGVufDB8fDB8fHww"
                alt=""
                className="w-[200px] h-[160px] rounded-xl"
              />
              <div className="mx-2 p-2 text-[#002143] border border-solid border-gray-300 rounded-xl">
                <h3 className="cursor-pointer text-2xl font-medium  hover:text-[#cd3333] ">
                  日本｜東京五天四夜自由行
                </h3>
                <p className="pt-3 text-lg">
                  探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
                </p>
                <div className="mt-1 text-lg font-medium">
                  <span className="mr-2"> 2023年7月23日｜</span>
                  <span>237讚</span>
                  <button className="pl-[320px] cursor-pointer text-2xl">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trip;
