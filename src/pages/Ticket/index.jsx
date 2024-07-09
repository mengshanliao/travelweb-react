import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  return (
    <>
      <div className="mx-20 my-12">
        <img
          src="https://images.unsplash.com/photo-1547782126-87bb2bead14e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW8lMjBkaXNuZXlsYW5kfGVufDB8fDB8fHww"
          alt=""
          className="mb-4 w-full h-[420px] object-cover"
        />
        <h1 className="mx-2 mb-4 text-[27px] font-semibold">
          日本｜東京迪士尼門票
        </h1>
        <div className="mb-4">
          <span className="m-2 p-1 text-base rounded-sm bg-bgRed text-themeRed">
            熱賣中
          </span>
          <span className="m-2 p-1 text-base rounded-sm bg-bgRed text-themeRed">
            憑證入場
          </span>
        </div>
        <div className="mx-2 mb-4 text-lg flex flex-col">
          <div className=" text-yellow-500 flex items-center ">
            <p className="mr-1 font-bold">4.5</p>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i class="fa-solid fa-star-half-stroke"></i>
            <span className="ml-2 text-gray-400 ">(1600)</span>
          </div>
          <div className="w-3/4 flex justify-between items-center">
            <p className=" text-gray-500">11975 人參加過</p>
            <i className="fa-regular fa-heart text-3xl hover:text-themeRed cursor-pointer" />
          </div>
        </div>
        <hr />
        <i class="fa-solid fa-angles-right mt-8 py-5 px-2"></i>
        <span className="w-3/4 text-2xl font-medium">方案選擇</span>
        <div className="mb-4">
          <div className="mt-4 p-1 text-base">
            <span className="mr-3 py-1 px-3 border border-solid border-black rounded-lg">
              明日
            </span>
            <span className="mr-3 py-1 px-2 border border-solid border-black rounded-lg">
              6月30日
            </span>
            <span className="py-1 px-2 border border-solid border-black rounded-lg">
              7月1日
            </span>
          </div>
          <div className=" w-3/4 mt-4 p-5 border border-solid border-black rounded-2xl">
            <h1 className="text-[22px] font-medium mb-4">
              東京迪士尼樂園一日護照
            </h1>
            <div className="mb-4">
              <span className="mr-2 mt-1 py-1 px-2 bg-gray-200 text-gray-900 text-base rounded-md">
                14天前可免費取消
              </span>
              <span className="mr-2 mt-1 py-1 px-2 bg-gray-200 text-gray-900 text-base rounded-md">
                憑證入場
              </span>
              <span className="mr-2 mt-1 py-1 px-2 bg-gray-200 text-gray-900 text-base rounded-md">
                立即確認
              </span>
            </div>
            <div className="flex justify-between">
              <div className="p-2 flex items-center text-lg bg-orange-100 text-orange-700 font-semibold rounded-lg">
                <span>方案詳情</span>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div className="flex items-center mr-10 text-xl ">
                <p className="mr-8 text-2xl font-bold">
                  NT$ 1,803
                  <span className="text-base pl-2">起</span>
                </p>
                <button
                  onClick={() => {
                    changePage("/cart");
                  }}
                  className="py-2 px-6 bg-gray-500 text-white rounded-xl"
                >
                  選擇
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <i class="fa-solid fa-angles-right mt-8 py-5 px-2"></i>
        <span className="w-3/4 text-2xl font-medium">活動詳情</span>
        <div className="w-3/4 mt-3">
          <h3 className="text-lg">夢幻遊行</h3>
          <p>
            簡介：這是一個以迪士尼夢幻故事為主題的大型遊行表演。各種迪士尼角色會乘坐華麗的花車遊行，伴隨著動聽的音樂和舞蹈，給觀眾帶來夢幻般的視覺和聽覺享受。
            亮點：米老鼠、唐老鴨和其他經典迪士尼角色將與觀眾互動，整個遊行充滿了歡樂和驚喜。
          </p>
          <br />
          <h3 className="text-lg">夜間煙火秀</h3>
          <p>
            簡介：這是一場結合了煙火、激光、燈光和音樂的夜間表演，旨在講述一個充滿希望和夢想的故事。觀眾可以在夜幕降臨後，欣賞到美輪美奐的煙火和燈光秀。
            亮點：表演以美麗的海洋為背景，搭配壯觀的煙火和動聽的音樂，帶給人震撼的視覺和聽覺體驗。
          </p>
          <img
            src="https://images.unsplash.com/photo-1624601573012-efb68931cc8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW8lMjBkaXNuZXlsYW5kfGVufDB8fDB8fHww"
            alt=""
            className="my-9 h-[320px]"
          />
        </div>
        <hr />
        <i class="fa-solid fa-angles-right mt-8 py-5 px-2"></i>
        <span className="w-3/4 text-2xl font-medium">最新評價</span>
        <div className="mx-7 text-yellow-500 flex items-center text-xl ">
          <p className="mr-1 font-bold">4.5</p>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i class="fa-solid fa-star-half-stroke"></i>
          <span className="ml-2 text-gray-400 ">(1600)</span>
        </div>
        <div className="w-2/3 mx-7 mt-6 my-20 flex flex-col">
          <div className="mr-8 my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
            <div className="flex">
              <div className="flex items-center text-xl font-medium ">
                <img
                  className="m-2 w-10 h-10 object-cover rounded-full "
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                  alt=""
                />
                <span>Kelly Chen</span>
              </div>
              <div className="mx-7 text-yellow-500 flex items-center text-lg">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
            </div>
            <p className="p-2">
              東京迪士尼樂園真的非常棒，適合所有年齡層的人。無論是小朋友還是成年人，都能在這裡找到樂趣。遊樂設施種類豐富，從刺激的過山車到夢幻的遊行表演，每個細節都展現出迪士尼的魔法和魅力。
            </p>
            <span className="flex justify-between px-2 text-gray-500">
              2023年8月12日
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
