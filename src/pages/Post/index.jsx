import { Carousel, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";

const carouselImages = [
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphcGFufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGphcGFufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGphcGFufGVufDB8fDB8fHww",
];

const Post = () => {
  const location = useLocation();
  console.log(location);
  const copy = () => {
    message.success("複製成功");
  };

  return (
    <>
      <Carousel autoplay speed="2000" easing="linear">
        {carouselImages.map((image) => (
          <div className="h-[420px]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="carousel-images"
            />
          </div>
        ))}
      </Carousel>

      <div className="flex flex-col w-2/3 my-4 ml-10">
        <h1 className="text-[27px] px-2 py-3 font-bold text-black">
          日本｜東京四天三夜自由行
        </h1>
        <div className="px-2 py-3">
          <span className="p-1 mr-2 text-base rounded-sm bg-bgBlue text-themeBlue">
            日本旅遊
          </span>
          <span className="p-1 mr-2 text-base rounded-sm bg-bgBlue text-themeBlue">
            東京必遊景點
          </span>
          <span className="p-1 mr-2 text-base rounded-sm bg-bgBlue text-themeBlue">
            淺草寺
          </span>
          <span className="p-1 text-base rounded-sm bg-bgBlue text-themeBlue">
            四天三夜
          </span>
        </div>
      </div>
      <hr />

      <div className="w-2/3 my-4 ml-10 flex flex-col p-2">
        <div className="flex items-center mb-1">
          <img
            className="w-14 h-14 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h3 className=" p-[2px] ml-3 text-2xl font-medium ">Kelly Chen</h3>
          <span className="mx-5 px-3 text-lg border border-solid rounded-sm border-[#002143] cursor-pointer">
            追蹤
          </span>
        </div>
        <p className="mt-3 text-lg">
          探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
        </p>
        <div className="mt-6">
          <div className="text-lg flex justify-between items-center">
            <div className="mr-2 p-1 text-black">2023年7月23日</div>
            <div>
              <i className="fa-regular fa-heart" />
              <span className="mr-5 p-1">讚</span>
              <i class="fa-regular fa-bookmark" />
              <span className="mr-3 p-1">收藏</span>
              <CopyToClipboard
                text={window.location.href}
                onCopy={(text) => copy(text)}
              >
                <span className="cursor-pointer">
                  <i className="fa-solid fa-link"></i>
                  <span className="p-1">複製連結</span>
                </span>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <section className="flex mx-10 my-4">
        <div className="w-2/3 m-3">
          <h2 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 rounded-3xl font-bold">
            第一天
          </h2>
          <div className="my-8 text-[#002143] text-xl">
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <span className="px-2 font-medium">築地市場</span>
              <p className="text-lg mt-5">
                東京著名的魚市場，可以品嚐美味的新鮮壽司
              </p>
              <div className="flex flex-wrap my-8">
                <img
                  src="https://images.unsplash.com/photo-1590582917892-a6e11d1b32bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjB0c3VraWppJTIwbWFya2V0fGVufDB8fDB8fHww"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1591224803255-6cfbba886c2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1706441740242-e695b1834454?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuJTIwc2FzaGltaXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
              </div>
            </div>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <span className="px-2 font-medium">淺草寺</span>
              <p className="text-lg mt-5">
                東京最古老的寺廟之一，享受傳統的日本文化
              </p>
              <div className="flex flex-wrap my-8">
                <img
                  src="https://images.unsplash.com/photo-1590582917892-a6e11d1b32bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjB0c3VraWppJTIwbWFya2V0fGVufDB8fDB8fHww"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1591224803255-6cfbba886c2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1706441740242-e695b1834454?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuJTIwc2FzaGltaXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
              </div>
            </div>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <span className="px-2 font-medium">鳥貴族</span>
              <p className="text-lg mt-5"> 連鎖居酒屋，提供多樣的串燒選擇</p>
              <div className="flex flex-wrap my-8">
                <img
                  src="https://images.unsplash.com/photo-1590582917892-a6e11d1b32bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjB0c3VraWppJTIwbWFya2V0fGVufDB8fDB8fHww"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1591224803255-6cfbba886c2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1706441740242-e695b1834454?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuJTIwc2FzaGltaXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-80 h-80 object-cover p-3"
                />
              </div>
              <p className="text-lg mt-5">營業時間：17:00-0:00</p>
              <p className="text-lg mt-2">地址：東京都千代田区有楽町2-3-6</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 m-3 flex flex-col text-lg text-gray-500 font-semibold">
          <div className="flex m-2 p-3 border border-solid border-gray-200 ">
            <span className="mx-12">第一天</span>
            <div className="flex flex-col cursor-pointer">
              <span className="pb-2 hover:text-black">築地市場</span>
              <span className="pb-2 hover:text-black">淺草寺</span>
              <span className="pb-2 hover:text-black">鳥貴族</span>
            </div>
          </div>
          <div className="flex m-2 p-3 border border-solid border-gray-200">
            <span className="mx-12">第二天</span>
            <div className="flex flex-col cursor-pointer">
              <span className="pb-2 hover:text-black">築地市場</span>
              <span className="pb-2 hover:text-black">淺草寺</span>
              <span className="pb-2 hover:text-black">鳥貴族</span>
            </div>
          </div>
          <div className="flex m-2 p-3 border border-solid border-gray-200">
            <span className="mx-12">第三天</span>
            <div className="flex flex-col cursor-pointer">
              <span className="pb-2 hover:text-black">築地市場</span>
              <span className="pb-2 hover:text-black">淺草寺</span>
              <span className="pb-2 hover:text-black">鳥貴族</span>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div className="w-2/3 ml-10 mt-6">
        <div className="flex">
          <h2 className="text-2xl font-bold text-black">留言</h2>
          <span className="px-3 text-2xl font-bold text-black">(3)</span>
        </div>
        <input
          type="text"
          className="bg-gray-200 w-2/3 mt-10 p-2 rounded-xl"
          placeholder="留下你的評論..."
        />
        <button className="ml-2 text-white text-lg font-medium bg-[#002243d1] py-1 px-4 rounded-xl hover:shadow-lg">
          送出
        </button>
        <div className="w-3/4 my-20 flex flex-col">
          <div className="mr-8 my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
            <div className="flex items-center text-xl font-medium ">
              <img
                className="m-2 w-10 h-10 object-cover rounded-full "
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
              />
              <span>Kelly Chen</span>
            </div>
            <p className="p-2">
              你的日本之旅非常精彩，讓我更加期待即將到來的旅行了。特別是你提到的京都和大阪，已經列入我的必去清單。
            </p>
            <div className="flex justify-between px-2 text-gray-500">
              <span>2023年8月12日</span>
              <span className="font-extrabold cursor-pointer">回覆</span>
            </div>
          </div>
          <div className="mr-8  my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
            <div className="flex items-center text-xl font-medium ">
              <img
                className="m-2 w-10 h-10 object-cover rounded-full "
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
              />
              <span>Kelly Chen</span>
            </div>
            <p className="p-2">
              你的日本之旅非常精彩，讓我更加期待即將到來的旅行了。特別是你提到的京都和大阪，已經列入我的必去清單。
            </p>
            <div className="flex justify-between px-2 text-gray-500">
              <span>2023年8月12日</span>
              <span className="font-extrabold cursor-pointer">回覆</span>
            </div>
          </div>
          <div className="mr-8  my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
            <div className="flex items-center text-xl font-medium ">
              <img
                className="m-2 w-10 h-10 object-cover rounded-full "
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
              />
              <span>Kelly Chen</span>
            </div>
            <p className="p-2">
              你的日本之旅非常精彩，讓我更加期待即將到來的旅行了。特別是你提到的京都和大阪，已經列入我的必去清單。
            </p>
            <div className="flex justify-between px-2 text-gray-500">
              <span>2023年8月12日</span>
              <span className="font-extrabold cursor-pointer">回覆</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
