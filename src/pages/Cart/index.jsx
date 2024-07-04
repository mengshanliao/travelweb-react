const Cart = () => {
  return (
    <>
      <div class="flex py-14 justify-between bg-[#0022431b]">
        <div class="w-3/4 flex flex-col justify-center items-center">
          <div class="flex justify-between items-center w-3/4 px-3 py-2 rounded-2xl bg-white">
            <div class="">
              <input type="checkbox" name="" id="" />
              <span class="ml-2 text-base">全選</span>
            </div>
            <span class="py-1 px-2 text-sm border border-solid border-black hover:bg-gray-200 rounded-xl cursor-pointer">
              刪除選中的活動
            </span>
          </div>
          <div class=" w-3/4 m-4 p-4 rounded-2xl bg-white">
            <div class="flex justify-between m-1">
              <h1 class="text-xl font-medium mb-2">東京迪士尼樂園一日護照</h1>
              <div class="p-1">
                <i class="fa-solid fa-minus p-2 bg-[#0022431b] rounded-lg "></i>
                <input type="text" class="w-9 h-9 text-center text-lg" />
                <i class="fa-solid fa-plus p-2 bg-[#0022431b] rounded-lg "></i>
              </div>
            </div>
            <h3 class="text-base mb-1 text-gray-500">兌換期內皆適用</h3>
            <h3 class="text-base mb-3 text-gray-500">2024年7月24日 11:20</h3>
            <hr />
            <div class="flex justify-between items-center mr-3 mt-3 text-base">
              <div>
                <input type="checkbox" />
                <span class="ml-1 mr-5">選取</span>
                <button class="mx-3 px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                  編輯
                </button>
                <button class="px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                  刪除
                </button>
              </div>
              <div class="text-xl font-medium">NT$3600</div>
            </div>
          </div>
          <div class=" w-3/4 m-4 p-4 rounded-2xl bg-white">
            <div class="flex justify-between m-1">
              <h1 class="text-xl font-medium mb-2">東京迪士尼樂園一日護照</h1>
              <div class="p-1">
                <i class="fa-solid fa-minus p-2 bg-[#0022431b] rounded-lg "></i>
                <input type="text" class="w-9 h-9 text-center text-lg" />
                <i class="fa-solid fa-plus p-2 bg-[#0022431b] rounded-lg "></i>
              </div>
            </div>
            <h3 class="text-base mb-1 text-gray-500">兌換期內皆適用</h3>
            <h3 class="text-base mb-3 text-gray-500">2024年7月24日 11:20</h3>
            <hr />
            <div class="flex justify-between items-center mr-3 mt-3 text-base">
              <div>
                <input type="checkbox" />
                <span class="ml-1 mr-5">選取</span>
                <button class="mx-3 px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                  編輯
                </button>
                <button class="px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                  刪除
                </button>
              </div>
              <div class="text-xl font-medium">NT$3600</div>
            </div>
          </div>
          <div class=" w-3/4 m-4 p-4 rounded-2xl bg-white">
            <div class="flex justify-between m-1">
              <h1 class="text-xl font-medium mb-2">東京迪士尼樂園一日護照</h1>
              <div class="p-1">
                <i class="fa-solid fa-minus p-2 bg-[#0022431b] rounded-lg "></i>
                <input type="text" class="w-9 h-9 text-center text-lg" />
                <i class="fa-solid fa-plus p-2 bg-[#0022431b] rounded-lg "></i>
              </div>
            </div>
            <h3 class="text-base mb-1 text-gray-500">兌換期內皆適用</h3>
            <h3 class="text-base mb-3 text-gray-500">2024年7月24日 11:20</h3>
            <hr />
            <div class="flex justify-between items-center mr-3 mt-3 text-base">
              <div>
                <input type="checkbox" />
                <span class="ml-1 mr-5">選取</span>
                <button class="mx-3 px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333] ">
                  編輯
                </button>
                <button class="px-1 text-gray-600 border border-solid border-gray-300 cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                  刪除
                </button>
              </div>
              <div class="text-xl font-medium">NT$3600</div>
            </div>
          </div>
        </div>
        <div class="w-2/5">
          <div class="w-1/2 my-16 p-4 bg-white rounded-2xl">
            <div class="px-2 pb-8">
              <p class=" py-2 text-xl tracking-widest">
                4 件總計
                <i class="fa-solid fa-angles-down px-3" />
              </p>
              <p class="text-2xl tracking-widest font-bold">NT$8076</p>
            </div>
            <button class="w-full py-1 px-5 text-xl font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer">
              結帳
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
