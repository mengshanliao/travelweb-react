const MyTrip = () => {
  return (
    <>
      <div class="m-8 flex justify-between items-center">
        <div class="m-2 px-4 py-2 text-center text-xl rounded-xl bg-[#002143] text-white hover:shadow-xl hover:border-[2px] hover:border-solid hover:border-[#002143] hover:text-[#002143] hover:bg-white cursor-pointer">
          所有記憶庫
        </div>
        <div class="m-2 px-4 py-2 text-center text-xl rounded-xl bg-[#002143] text-white  hover:shadow-xl hover:border-[2px] hover:border-solid hover:border-[#002143] hover:text-[#002143] hover:bg-white  cursor-pointer">
          <i class="fa-solid fa-plus"> 新增記憶庫</i>
        </div>
      </div>
      <div class="m-8 flex">
        <div class="w-[300px] m-5 border border-solid border-gray-200 rounded-xl shadow-xl">
          <img
            class=" w-[300px] h-[180px] rounded-t-xl"
            src="/src/assets/images/東京迪士尼.jpg"
          />
          <h1 class="whitespace-nowrap overflow-hidden text-ellipsis my-2 mx-2 text-lg font-extrabold">
            日本｜東京五天四夜自由行
          </h1>
          <div class="flex justify-between items-center px-3 mb-2">
            <i class="fa-regular fa-heart text-[15px]"> 12 讚</i>
            <div class="mr-2">
              <span class="mx-3 px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                編輯
              </span>
              <span class="px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                刪除
              </span>
            </div>
          </div>
        </div>
        <div class="w-[300px] m-5 border border-solid border-gray-200 rounded-xl shadow-xl">
          <img
            class=" w-[300px] h-[180px] rounded-t-xl"
            src="/src/assets/images/東京迪士尼.jpg"
          />
          <h1 class="whitespace-nowrap overflow-hidden text-ellipsis my-2 mx-2 text-lg font-extrabold">
            日本｜東京五天四夜自由行
          </h1>
          <div class="flex justify-between items-center px-3 mb-2">
            <i class="fa-regular fa-heart text-[15px]"> 12 讚</i>
            <div class="mr-2">
              <span class="mx-3 px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                編輯
              </span>
              <span class="px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                刪除
              </span>
            </div>
          </div>
        </div>
        <div class="w-[300px] m-5 border border-solid border-gray-200 rounded-xl shadow-xl">
          <img
            class=" w-[300px] h-[180px] rounded-t-xl"
            src="/src/assets/images/東京迪士尼.jpg"
          />
          <h1 class="whitespace-nowrap overflow-hidden text-ellipsis my-2 mx-2 text-lg font-extrabold">
            日本｜東京五天四夜自由行
          </h1>
          <div class="flex justify-between items-center px-3 mb-2">
            <i class="fa-regular fa-heart text-[15px]"> 12 讚</i>
            <div class="mr-2">
              <span class="mx-3 px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                編輯
              </span>
              <span class="px-1 text-gray-500 border border-solid border-gray-200 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
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
