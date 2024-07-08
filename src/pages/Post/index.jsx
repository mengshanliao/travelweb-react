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
          <div className="h-[360px]">
            <img
              className=" w-full h-[360px] object-cover"
              src={image}
              alt="carousel-images"
            />
          </div>
        ))}
      </Carousel>

      <h1 className="text-[27px] w-2/3 mt-6 ml-10 px-2 py-3 font-bold text-themeBlue">
        日本｜東京四天三夜自由行
      </h1>

      <div className="w-2/3 ml-10 flex flex-col p-2 h-72">
        <div className="flex items-center mb-1">
          <img
            className="w-16 h-16 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h3 className=" p-[2px] ml-3 text-2xl font-medium ">Kelly Chen</h3>
          <span className="mx-6 px-4 text-xl border border-solid border-[#002143] cursor-pointer">
            追蹤
          </span>
        </div>
        <p className="mt-6 text-lg">
          探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
        </p>
        <div className=" mt-20 flex justify-between items-center">
          <div className="text-base">
            <span className="mr-2 p-1 font-medium text-gray-700">
              2023年7月23日
            </span>
            <span className="mr-2 p-1  border border-solid border-black">
              <i className="fa-regular fa-heart"> 讚</i>
            </span>
            <span className="p-1 border border-solid border-black">
              <i className="fa-regular fa-copy"> 複製行程</i>
            </span>
          </div>
          <div className=" ">
            <span className="mr-2 p-1 bg-gray-600 text-white text-base">
              <i className="fa-solid fa-link"> 複製連結</i>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-2/3 ml-10 p-3">
        <h2 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第一天
        </h2>
        <div className="my-8 text-[#002143] text-xl">
          <div>
            <i className="fa-solid fa-location-dot"> 築地市場</i>
            <p className="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 淺草寺</i>
            <p className="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 鳥貴族</i>
            <p className="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
            <p className="text-lg mt-5">營業時間：17:00-0:00</p>
            <p className="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>

        <h2 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第二天
        </h2>
        <div className="my-8 text-[#002143] text-xl">
          <div>
            <i className="fa-solid fa-location-dot"> 築地市場</i>
            <p className="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/台北中正紀念堂.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 淺草寺</i>
            <p className="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/台北中正紀念堂.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 鳥貴族</i>
            <p className="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <img
              src="/src/assets/images/台北中正紀念堂.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
            <p className="text-lg mt-5">營業時間：17:00-0:00</p>
            <p className="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>

        <h2 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第三天
        </h2>
        <div className="my-8 text-[#002143] text-xl">
          <div>
            <i className="fa-solid fa-location-dot"> 築地市場</i>
            <p className="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/韓國街邊.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 淺草寺</i>
            <p className="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/韓國街邊.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 鳥貴族</i>
            <p className="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <img
              src="/src/assets/images/韓國街邊.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />

            <p className="text-lg mt-5">營業時間：17:00-0:00</p>
            <p className="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>

        <h2 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 mb-4 rounded-3xl font-semibold">
          第四天
        </h2>
        <div className="my-8 text-[#002143] text-xl">
          <div>
            <i className="fa-solid fa-location-dot"> 築地市場</i>
            <p className="text-lg mt-5">
              東京著名的魚市場，可以品嚐美味的新鮮壽司{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 淺草寺</i>
            <p className="text-lg mt-5">
              東京最古老的寺廟之一，享受傳統的日本文化{" "}
            </p>
            <img
              src="/src/assets/images/富士山櫻花.jpg"
              alt=""
              className="w-80 h-70 my-8"
            />
          </div>
          <div>
            <i className="fa-solid fa-location-dot"> 鳥貴族</i>
            <p className="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇 </p>
            <div className="flex ">
              <img
                src="/src/assets/images/富士山櫻花.jpg"
                alt=""
                className="w-80 h-70 my-8 mr-3"
              />
              <img
                src="/src/assets/images/富士山櫻花.jpg"
                alt=""
                className="w-80 h-70 my-8"
              />
            </div>

            <p className="text-lg mt-5">營業時間：17:00-0:00</p>
            <p className="text-lg mt-2">地址：東京都千代田区有楽町2-3-6 </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-2/3 h-[360px] ml-10 px-5 py-8">
        <h2 className="text-2xl font-semibold">留言</h2>
        <input
          type="text"
          className="bg-gray-200 w-[360px] mt-8 p-2 rounded-xl"
        />
        <button className="ml-2 text-white text-lg font-medium bg-[#002243d1] py-1 px-4 rounded-xl hover:shadow-lg">
          送出
        </button>
      </div>
    </>
  );
};
export default Post;
