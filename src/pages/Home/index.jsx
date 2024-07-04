import { useNavigate } from "react-router-dom";
import CityCard from "@/components/CityCard";
import TripCard from "@/components/TripCard";

const cityData = [
  {
    cityKey: "japan",
    title: "日本",
    image: "/src/assets/images/富士山櫻花.jpg",
  },
  {
    cityKey: "korea",
    title: "韓國",
    image: "/src/assets/images/韓國首爾塔.jpg",
  },
  {
    cityKey: "thailand",
    title: "泰國",
    image: "/src/assets/images/泰國水上市場.jpg",
  },
  {
    cityKey: "taipei",
    title: "台北",
    image: "/src/assets/images/台北101.jpg",
  },
  {
    cityKey: "tainan",
    title: "台南",
    image: "/src/assets/images/台南鹽山.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };
  return (
    <>
      <div class="relative">
        <button class="absolute z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-4 py-3 text-[22px] font-medium rounded-2xl bg-[#ffffffcc] text-[#002143] hover:text-white hover:bg-[#002143]">
          開始你的旅遊記憶庫
        </button>
        <img
          src="/src/assets/images/lake拷貝2.jpg"
          alt=""
          class="my-1 w-full h-[320px] "
        />
        <div class="absolute z-10 w-full h-[320px] top-0 left-0 bg-[#0000002a]"></div>
      </div>

      <div class="flex justify-center mt-[60px]">
        {cityData.map((data) => (
          <CityCard
            title={data.title}
            cityKey={data.key}
            image={data.image}
            onClick={() => changePage(`/cities/${data.key}`)}
          />
        ))}
      </div>

      <h2 class="flex p-2 m-6 mt-[70px] text-[27px] font-medium text-[#002143]">
        <i class="fa-solid fa-ticket"> 行程及門票</i>
      </h2>
      <section class="flex flex-wrap justify-center items-center p-8">
        <div class="w-[280px] m-5 border border-solid border-gray-200 rounded-xl overflow-hidden">
          <div class="relative h-60 overflow-hidden cursor-pointer">
            <img
              class="w-auto h-[300px]"
              src="/src/assets/images/台北中正紀念堂.jpg"
            />
            <span class="absolute top-0 right-0 z-10 font-medium text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]">
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

      <h2 class="flex p-2 m-6 text-[27px] mt-[70px] font-medium  text-[#002143]">
        <i class="fa-solid fa-umbrella-beach"> 熱門記憶庫</i>
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
    </>
  );
};

export default Home;
