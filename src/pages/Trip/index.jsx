import Layout from "@/components/Layout";

const Trip = () => {
  return (
    <Layout>
      <img
        src="/src/assets/images/eavrzyj1.png"
        alt=""
        class="w-full h-[320px]"
      />
      <div></div>
      <div class="flex flex-col justify-center items-center mt-[-70px] text-[#002143]">
        <img
          src="/src/assets/images/富士山櫻花.jpg"
          alt="authorImage"
          class="w-[160px] h-[160px] rounded-full  border-[7px] border-solid border-white"
        />
        <h1 class="m-1 font-medium text-3xl">Kelly Chen</h1>
        <span class="m-2 px-4 text-xl border border-solid border-[#002143] cursor-pointer">
          追蹤
        </span>
      </div>
      <div>
        <ul class="p-3 text-[20px] flex justify-center text-[#002143] cursor-pointer">
          <li class="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            簡介
          </li>
          <li class="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            39 回憶
          </li>
          <li class="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            2 收藏
          </li>
          <li class="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            80 讚
          </li>
          <li class="mx-2 px-3 py-1 hover:text-[#cd3333]  hover:bg-[#cd333339] hover:rounded-2xl">
            1000 粉絲
          </li>
        </ul>
        <hr />
        <div class="flex flex-col justify-center items-center m-5">
          <div class="h-[140px] w-[800px] border border-solid border-black ">
            簡介內容,彈窗框
          </div>
          <div class="w-[800px] m-10">
            <h2 class="my-5 font-medium text-2xl text-[#002143]">旅遊回憶庫</h2>
            <div class="flex">
              <img
                src="/src/assets/images/台北中正紀念堂.jpg"
                alt=""
                class="w-[200px] h-[160px] rounded-xl"
              />
              <div class="mx-2 p-2 text-[#002143] border border-solid border-gray-300 rounded-xl">
                <h3 class="cursor-pointer text-2xl font-medium  hover:text-[#cd3333] ">
                  日本｜東京五天四夜自由行
                </h3>
                <p class="pt-3 text-lg">
                  探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
                </p>
                <div class="mt-1 text-lg font-medium">
                  <span class="mr-2"> 2023年7月23日｜</span>
                  <span>237讚</span>
                  <button class="pl-[320px] cursor-pointer text-2xl">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Trip;
