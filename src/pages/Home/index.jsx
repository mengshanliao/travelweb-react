import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <section class="h-80 mb-10 bg-slate-400">輪播圖</section>
      <h2 class="flex justify-center p-2 text-3xl font-medium bg-orange-50">
        熱門旅遊景點
      </h2>
      <section class="p-7 flex flex-col justify-center items-center">
        <ul class="flex justify-between">
          <div class="spot-image1">
            <li class="mr-24 font-semibold text-2xl tracking-wide">日本</li>
          </div>
          <div class="spot-image2">
            <li class="mr-24 font-semibold text-2xl tracking-wide">韓國</li>
          </div>
          <div class="spot-image3">
            <li class="mr-24 font-semibold text-2xl tracking-wide">泰國</li>
          </div>
          <div class="spot-image4">
            <li class="mr-24 font-semibold text-2xl tracking-wide">台北</li>
          </div>
          <div class="spot-image5">
            <li class="mr-0 font-semibold text-2xl tracking-wide">澎湖</li>
          </div>
        </ul>
      </section>
      <h2 class="flex justify-center p-2 text-3xl font-medium bg-orange-50">
        行程及門票
      </h2>
      <section class="flex flex-wrap justify-center items-center p-8">
        <div class="w-[280px] m-5 border border-solid border-gray-200 rounded-xl overflow-hidden">
          <div class="relative h-60 overflow-hidden cursor-pointer">
            <img
              class="w-auto h-[300px]"
              src="/src/assets/images/台北中正紀念堂.jpg"
            />
            <span class="absolute top-0 right-0 z-10 font-medium text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]]">
              93折
            </span>
            <div class="absolute top-0 left-0 w-auto h-auto opacity-40 bg-black"></div>
          </div>
          <div class="h-auto p-2">
            <h1 class=" text-xl mb-1 text-nowrap font-medium text-ellipsis overflow-hidden">
              日本｜東京迪士尼門票
            </h1>
            <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
              熱賣中
            </span>
            <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
              憑證入場
            </span>
            <div class="flex justify-between items-center py-3 px-0 font-medium">
              <div class="price">
                <span class=" mr-1 text-[18px]">NT$ 1825</span>
                <span class=" text-gray-300 text-[15px] line-through ">
                  NT$ 1950
                </span>
              </div>
              <span class=" text-gray-500 text-[15px]">11975人參加過</span>
            </div>
          </div>
        </div>
        <div class="w-[280px] m-5 border border-solid border-gray-200 rounded-xl overflow-hidden">
          <div class="relative h-60 overflow-hidden cursor-pointer">
            <img
              class="w-auto h-[300px]"
              src="/src/assets/images/台北中正紀念堂.jpg"
            />
            <span class="absolute top-0 right-0 z-10 font-medium text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]]">
              93折
            </span>
            <div class="absolute top-0 left-0 w-auto h-auto opacity-40 bg-black"></div>
          </div>
          <div class="h-auto p-2">
            <h1 class=" text-xl mb-1 text-nowrap font-medium text-ellipsis overflow-hidden">
              日本｜東京迪士尼門票
            </h1>
            <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
              熱賣中
            </span>
            <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
              憑證入場
            </span>
            <div class="flex justify-between items-center py-3 px-0 font-medium">
              <div class="price">
                <span class=" mr-1 text-[18px]">NT$ 1825</span>
                <span class=" text-gray-300 text-[15px] line-through ">
                  NT$ 1950
                </span>
              </div>
              <span class=" text-gray-500 text-[15px]">11975人參加過</span>
            </div>
          </div>
        </div>
        <div class="w-[280px] m-5 border border-solid border-gray-200 rounded-xl overflow-hidden">
          <div class="relative h-60 overflow-hidden cursor-pointer">
            <img
              class="w-auto h-[300px]"
              src="/src/assets/images/台北中正紀念堂.jpg"
            />
            <span class="absolute top-0 right-0 z-10 font-medium text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]]">
              93折
            </span>
            <div class="absolute top-0 left-0 w-auto h-auto opacity-40 bg-black"></div>
          </div>
          <div class="h-auto p-2">
            <h1 class=" text-xl mb-1 text-nowrap font-medium text-ellipsis overflow-hidden">
              日本｜東京迪士尼門票
            </h1>
            <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
              熱賣中
            </span>
            <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
              憑證入場
            </span>
            <div class="flex justify-between items-center py-3 px-0 font-medium">
              <div class="price">
                <span class=" mr-1 text-[18px]">NT$ 1825</span>
                <span class=" text-gray-300 text-[15px] line-through ">
                  NT$ 1950
                </span>
              </div>
              <span class=" text-gray-500 text-[15px]">11975人參加過</span>
            </div>
          </div>
        </div>
      </section>
      <h2 class="flex justify-center p-2 text-3xl font-medium bg-orange-50">
        熱門記憶庫
      </h2>
      <section class="p-[30px] flex flex-wrap justify-center items-center">
        <div class=" w-[360px] m-5 overflow-hidden">
          <div class=" h-[300px] relative overflow-hidden cursor-pointer">
            <img
              class=" w-auto h-auto"
              src="/src/assets/images/台北中正紀念堂.jpg"
            />
          </div>
          <div class=" h-52 p-2">
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              日本旅行
            </span>
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              東京必遊景點
            </span>
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              淺草寺
            </span>
            <span class="mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              五天四夜
            </span>
            <h1 class="whitespace-nowrap overflow-hidden text-ellipsis my-3 mx-0 text-2xl font-extrabold">
              日本｜東京五天四夜自由行
            </h1>
            <h3 class=" whitespace-nowrap overflow-hidden text-ellipsis mb-2 text-gray-600">
              探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
            </h3>
            <hr />
            <div class="flex items-center ">
              <img
                class="w-9 h-9 rounded-full"
                src="/src/assets/images/台北中正紀念堂.jpg"
                alt=""
              />
              <div class=" p-[2px] m-1 ml-2 text-[23px] font-medium ">
                Kelly Chen
              </div>
            </div>
            <div class=" flex justify-between items-center ml-1">
              <span class="text-[18px] font-medium text-gray-700">
                2023年7月23日｜
              </span>
              <div class="text-[25px] ">
                <span class="mr-3">
                  <i class="fa-regular fa-star"></i>
                </span>
                <span class="mr-3">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-[360px] m-5 overflow-hidden">
          <div class=" h-[300px] relative overflow-hidden cursor-pointer">
            <img
              class=" w-auto h-auto"
              src="/src/assets/images/台北中正紀念堂.jpg"
            />
          </div>
          <div class=" h-52 p-2">
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              日本旅行
            </span>
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              東京必遊景點
            </span>
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              淺草寺
            </span>
            <span class="mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              五天四夜
            </span>
            <h1 class="whitespace-nowrap overflow-hidden text-ellipsis my-3 mx-0 text-2xl font-extrabold">
              日本｜東京五天四夜自由行
            </h1>
            <h3 class=" whitespace-nowrap overflow-hidden text-ellipsis mb-2 text-gray-600">
              探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
            </h3>
            <hr />
            <div class="flex items-center ">
              <img
                class="w-9 h-9 rounded-full"
                src="/src/assets/images/台北中正紀念堂.jpg"
                alt=""
              />
              <div class=" p-[2px] m-1 ml-2 text-[23px] font-medium ">
                Kelly Chen
              </div>
            </div>
            <div class=" flex justify-between items-center ml-1">
              <span class="text-[18px] font-medium text-gray-700">
                2023年7月23日｜
              </span>
              <div class="text-[25px] ">
                <span class="mr-3">
                  <i class="fa-regular fa-star"></i>
                </span>
                <span class="mr-3">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-[360px] m-5 overflow-hidden">
          <div class=" h-[300px] relative overflow-hidden cursor-pointer">
            <img
              class=" w-auto h-auto"
              src="/src/assets/images/台北中正紀念堂.jpg"
            />
          </div>
          <div class=" h-52 p-2">
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              日本旅行
            </span>
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              東京必遊景點
            </span>
            <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              淺草寺
            </span>
            <span class="mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
              五天四夜
            </span>
            <h1 class="whitespace-nowrap overflow-hidden text-ellipsis my-3 mx-0 text-2xl font-extrabold">
              日本｜東京五天四夜自由行
            </h1>
            <h3 class=" whitespace-nowrap overflow-hidden text-ellipsis mb-2 text-gray-600">
              探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
            </h3>
            <hr />
            <div class="flex items-center ">
              <img
                class="w-9 h-9 rounded-full"
                src="/src/assets/images/台北中正紀念堂.jpg"
                alt=""
              />
              <div class=" p-[2px] m-1 ml-2 text-[23px] font-medium ">
                Kelly Chen
              </div>
            </div>
            <div class=" flex justify-between items-center ml-1">
              <span class="text-[18px] font-medium text-gray-700">
                2023年7月23日｜
              </span>
              <div class="text-[25px] ">
                <span class="mr-3">
                  <i class="fa-regular fa-star"></i>
                </span>
                <span class="mr-3">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
