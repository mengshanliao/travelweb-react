import { useNavigate } from "react-router-dom";

const MyTrip = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  return (
    <>
      <div className="m-12 flex justify-between items-center text-center text-lg font-medium">
        <div className="px-3 py-1 rounded-xl bg-[#002143] text-white hover:shadow-xl border-2 border-solid border-[#002143] hover:text-[#002143] hover:bg-white cursor-pointer">
          所有記憶庫
        </div>
        <div
          onClick={() => changePage("/my-new-trip")}
          className="px-3 py-1 rounded-xl  bg-[#002143] text-white  hover:shadow-xl border-2 border-solid border-[#002143] hover:text-[#002143] hover:bg-white  cursor-pointer"
        >
          <i className="fa-solid fa-plus mr-2"></i>
          新增記憶庫
        </div>
      </div>
      <div className="m-8 flex">
        <div className="w-[300px] m-5 border border-solid border-gray-200 rounded-xl shadow-xl">
          <img
            className=" w-[300px] h-[180px] rounded-t-xl"
            src="/src/assets/images/東京迪士尼.jpg"
          />
          <h1 className="whitespace-nowrap overflow-hidden text-ellipsis my-2 mx-2 text-lg font-extrabold">
            日本｜東京五天四夜自由行
          </h1>
          <div className="flex justify-between items-center px-3 mb-2">
            <i className="fa-regular fa-heart text-[15px]"> 12 讚</i>
            <div className="mr-2">
              <span className="mx-3 px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                編輯
              </span>
              <span className="px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                刪除
              </span>
            </div>
          </div>
        </div>
        <div className="w-[300px] m-5 border border-solid border-gray-200 rounded-xl shadow-xl">
          <img
            className=" w-[300px] h-[180px] rounded-t-xl"
            src="/src/assets/images/東京迪士尼.jpg"
          />
          <h1 className="whitespace-nowrap overflow-hidden text-ellipsis my-2 mx-2 text-lg font-extrabold">
            日本｜東京五天四夜自由行
          </h1>
          <div className="flex justify-between items-center px-3 mb-2">
            <i className="fa-regular fa-heart text-[15px]"> 12 讚</i>
            <div className="mr-2">
              <span className="mx-3 px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                編輯
              </span>
              <span className="px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                刪除
              </span>
            </div>
          </div>
        </div>
        <div className="w-[300px] m-5 border border-solid border-gray-200 rounded-xl shadow-xl">
          <img
            className=" w-[300px] h-[180px] rounded-t-xl"
            src="/src/assets/images/東京迪士尼.jpg"
          />
          <h1 className="whitespace-nowrap overflow-hidden text-ellipsis my-2 mx-2 text-lg font-extrabold">
            日本｜東京五天四夜自由行
          </h1>
          <div className="flex justify-between items-center px-3 mb-2">
            <i className="fa-regular fa-heart text-[15px]"> 12 讚</i>
            <div className="mr-2">
              <span className="mx-3 px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                編輯
              </span>
              <span className="px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                刪除
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyTrip;
