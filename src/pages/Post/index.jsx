import { Carousel } from "antd";

const carouselImages = [
  "/src/assets/images/富士山2.jpg",
  "/src/assets/images/台北101.jpg",
  "/src/assets/images/台南鹽山.jpg",
  "/src/assets/images/韓國首爾塔.jpg",
  "/src/assets/images/泰國鄭王廟.jpg",
];

const Post = () => {
  return (
    <>
      <Carousel autoplay speed="2000" easing="linear">
        {carouselImages.map((image) => (
          <div class="h-[360px]">
            <img
              class=" w-full h-[360px] object-cover"
              src={image}
              alt="carousel-images"
            />
          </div>
        ))}
      </Carousel>

      <h1 class="text-3xl w-2/3 mt-10 ml-10 px-2 py-5 font-bold text-[#002243] rounded-lg">
        日本｜東京四天三夜自由行
      </h1>

      <div class="w-2/3 mr-[320px] ml-10 flex flex-col p-2 h-[300px]">
        <div>
          <div class="flex items-center mb-8">
            <img
              class="w-16 h-16 rounded-full"
              src="/src/assets/images/台北中正紀念堂.jpg"
              alt=""
            />
            <h3 class=" p-[2px] ml-3 text-2xl font-medium ">Kelly Chen</h3>
            <span class="mx-6 px-4 text-xl border border-solid border-[#002143] cursor-pointer">
              追蹤
            </span>
          </div>
          <p class="mt-6 text-lg">
            探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
          </p>
        </div>

        <div class=" mt-20 flex justify-between items-center">
          <div class="text-lg">
            <span class="mr-2 p-1 font-medium text-gray-700">
              2023年7月23日
            </span>
            <span class="mr-2 p-1  border border-solid border-black">
              <i class="fa-regular fa-heart"> 讚</i>
            </span>
            <span class="p-1 border border-solid border-black">
              <i class="fa-regular fa-copy"> 複製行程</i>
            </span>
          </div>
          <div class=" text-sm">
            <span class="mr-2 p-1 bg-blue-400 text-white">
              <i class="fa-brands fa-twitter"> twitter</i>
            </span>
            <span class="mr-2 p-1  bg-blue-700 text-white">
              <i class="fa-brands fa-square-facebook"> facebook</i>
            </span>
            <span class="mr-2 p-1 bg-green-600 text-white">
              <i class="fa-brands fa-line"> line</i>
            </span>
            <span class="mr-2 p-1 bg-gray-600 text-white">
              <i class="fa-solid fa-link"> 複製連結</i>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div class="w-2/3 ml-10 p-3">
        <h2 class="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第一天
        </h2>
        <div class="my-8 text-[#002143] text-xl">
          <div>
            <i class="fa-solid fa-location-dot"> 築地市場</i>
            <p class="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 淺草寺</i>
            <p class="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 鳥貴族</i>
            <p class="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
            <p class="text-lg mt-5">營業時間：17:00-0:00</p>
            <p class="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>

        <h2 class="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第二天
        </h2>
        <div class="my-8 text-[#002143] text-xl">
          <div>
            <i class="fa-solid fa-location-dot"> 築地市場</i>
            <p class="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/台北中正紀念堂.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 淺草寺</i>
            <p class="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/台北中正紀念堂.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 鳥貴族</i>
            <p class="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <img
              src="/src/assets/images/台北中正紀念堂.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
            <p class="text-lg mt-5">營業時間：17:00-0:00</p>
            <p class="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>

        <h2 class="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第三天
        </h2>
        <div class="my-8 text-[#002143] text-xl">
          <div>
            <i class="fa-solid fa-location-dot"> 築地市場</i>
            <p class="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/韓國街邊.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 淺草寺</i>
            <p class="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/韓國街邊.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 鳥貴族</i>
            <p class="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <img
              src="/src/assets/images/韓國街邊.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />

            <p class="text-lg mt-5">營業時間：17:00-0:00</p>
            <p class="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>

        <h2 class="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第四天
        </h2>
        <div class="my-8 text-[#002143] text-xl">
          <div>
            <i class="fa-solid fa-location-dot"> 築地市場</i>
            <p class="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 淺草寺</i>
            <p class="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              class="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i class="fa-solid fa-location-dot"> 鳥貴族</i>
            <p class="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <div class="flex ">
              <img
                src="/src/assets/images/富士山櫻花.jpg"
                alt=""
                class="w-80 h-70 my-8 mr-3"
              />
              <img
                src="/src/assets/images/富士山櫻花.jpg"
                alt=""
                class="w-80 h-70 my-8"
              />
            </div>

            <p class="text-lg mt-5">營業時間：17:00-0:00</p>
            <p class="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="w-2/3 h-[360px] ml-10 px-5 py-8">
        <h2 class="text-2xl font-semibold">留言</h2>
        <input type="text" class="bg-gray-200 w-[360px] mt-8 p-2 rounded-xl" />
        <button class="ml-2 text-white text-lg font-medium bg-[#002243d1] py-1 px-4 rounded-xl hover:shadow-lg">
          送出
        </button>
      </div>
    </>
  );
};
export default Post;
