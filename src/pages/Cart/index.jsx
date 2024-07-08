const Cart = () => {
  return (
    <>
      <div className="flex py-14 justify-between bg-[#0022431b]">
        <div className="w-3/4 flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-3/4 px-3 py-2 rounded-2xl bg-white">
            <div className="">
              <i className="fa-regular fa-square"></i>
              <span className="ml-2 text-base">全選</span>
            </div>
            <span className="py-1 px-2 text-sm border border-solid border-black hover:bg-gray-200 rounded-xl cursor-pointer">
              刪除選中的活動
            </span>
          </div>
          <div className=" w-3/4 m-4 p-4 rounded-2xl bg-white">
            <div className="flex justify-between m-1">
              <h1 className="text-xl font-medium mb-2">
                東京迪士尼樂園一日護照
              </h1>
              <div className="text-lg">
                <i className="fa-solid fa-minus p-2 bg-[#0022431b] rounded-md"></i>
                <input
                  type="text"
                  className="w-9 h-9 p-2 text-center rounded-md "
                />
                <i className="fa-solid fa-plus p-2 bg-[#0022431b] rounded-md"></i>
              </div>
            </div>
            <h3 className="text-base mb-1 text-gray-500">兌換期內皆適用</h3>
            <h3 className="text-base mb-3 text-gray-500">
              2024年7月24日 11:20
            </h3>
            <hr />
            <div className="flex justify-between items-center mr-3 mt-3 text-base">
              <div>
                <i className="fa-regular fa-square"></i>
                <span className="ml-1 mr-5">選取</span>
                <button className="mx-3 px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                  編輯
                </button>
                <button className="px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                  刪除
                </button>
              </div>
              <div className="text-xl font-medium">NT$3600</div>
            </div>
          </div>
          <div className=" w-3/4 m-4 p-4 rounded-2xl bg-white">
            <div className="flex justify-between m-1">
              <h1 className="text-xl font-medium mb-2">
                東京迪士尼樂園一日護照
              </h1>
              <div className="text-lg">
                <i className="fa-solid fa-minus p-2 bg-[#0022431b] rounded-md"></i>
                <input
                  type="text"
                  className="w-9 h-9 p-2 text-center rounded-md "
                />
                <i className="fa-solid fa-plus p-2 bg-[#0022431b] rounded-md"></i>
              </div>
            </div>
            <h3 className="text-base mb-1 text-gray-500">兌換期內皆適用</h3>
            <h3 className="text-base mb-3 text-gray-500">
              2024年7月24日 11:20
            </h3>
            <hr />
            <div className="flex justify-between items-center mr-3 mt-3 text-base">
              <div>
                <i className="fa-regular fa-square"></i>
                <span className="ml-1 mr-5">選取</span>
                <button className="mx-3 px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                  編輯
                </button>
                <button className="px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                  刪除
                </button>
              </div>
              <div className="text-xl font-medium">NT$3600</div>
            </div>
          </div>
          <div className=" w-3/4 m-4 p-4 rounded-2xl bg-white">
            <div className="flex justify-between m-1">
              <h1 className="text-xl font-medium mb-2">
                東京迪士尼樂園一日護照
              </h1>
              <div className="text-lg">
                <i className="fa-solid fa-minus p-2 bg-[#0022431b] rounded-md"></i>
                <input
                  type="text"
                  className="w-9 h-9 p-2 text-center rounded-md "
                />
                <i className="fa-solid fa-plus p-2 bg-[#0022431b] rounded-md"></i>
              </div>
            </div>
            <h3 className="text-base mb-1 text-gray-500">兌換期內皆適用</h3>
            <h3 className="text-base mb-3 text-gray-500">
              2024年7月24日 11:20
            </h3>
            <hr />
            <div className="flex justify-between items-center mr-3 mt-3 text-base">
              <div>
                <i className="fa-regular fa-square"></i>
                <span className="ml-1 mr-5">選取</span>
                <button className="mx-3 px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                  編輯
                </button>
                <button className="px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                  刪除
                </button>
              </div>
              <div className="text-xl font-medium">NT$3600</div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className="w-1/2 my-16 p-4 bg-white rounded-2xl">
            <div className="px-2 pb-8">
              <p className=" py-2 text-xl tracking-widest">
                4 件總計
                <i className="fa-solid fa-angles-down px-3" />
              </p>
              <p className="text-2xl tracking-widest font-bold">NT$8076</p>
            </div>
            <button className="w-full py-1 px-5 text-xl font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer">
              結帳
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
