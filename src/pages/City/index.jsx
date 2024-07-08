const City = () => {
  return (
    <>
      <div className="flex w-[1300px] h-96 justify-center my-10 ml-20 bg-black text-white rounded-md ">
        <div className="flex flex-col p-8 ">
          <h1 className="text-4xl font-medium mb-6 ">韓國 | 旅遊指南</h1>
          <p className=" text-lg my-8">
            首爾是韓國的首都和最大城市，位於韓國的西北部，漢江穿過市區。這座城市有著豐富的歷史和文化，是朝鮮王朝的古都。首爾現代化與傳統文化交相輝映，著名景點包括景福宮、昌德宮、南山首爾塔和熱鬧的明洞購物街。
          </p>
          <div className="flex justify-around items-center h-28 text-[26px] text-center border border-solid border-black text-black ">
            <span className="w-1/3 mx-2 flex flex-col p-3 rounded-md bg-slate-300">
              <i className="fa-solid fa-sun" />
              六月18~27°C
            </span>
            <span className="w-1/3 mx-2 flex flex-col p-3 rounded-md bg-slate-300">
              <i className="fa-solid fa-plug-circle-bolt" />
              電壓 220v
            </span>
            <span className=" w-1/3 mx-2 flex flex-col p-3 rounded-md bg-slate-300">
              <i className="fa-solid fa-comment-dollar" />
              貨幣 KRW
            </span>
          </div>
        </div>
        <img
          src="/src/assets/images/台北中正紀念堂.jpg"
          alt=""
          className="h-96"
        />
      </div>

      <h2 className="mx-10 my-6 ml-20 text-2xl font-semibold">
        <i className="fa-solid fa-angles-right">在地體驗排行</i>
      </h2>
      <div className="flex m-10">
        <div className="mx-10 relative ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <span className="absolute top-0 left-0 z-10 font-medium text-3xl text-black bg-yellow-400 py-2 px-4 rounded-br-[85%]">
            1
          </span>
          <p className="text-xl font-medium">愛寶樂園一日遊</p>
          <p className="text-xl font-medium text-red-500">NT$ 1825</p>
        </div>
        <div className="mx-10 relative ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <span className="absolute top-0 left-0 z-10 font-medium text-3xl text-black bg-yellow-400 py-2 px-4 rounded-br-[85%]">
            2
          </span>
          <p className="text-xl font-medium">北村韓屋村．韓服租借體驗</p>
          <p className="text-xl font-medium  text-red-500">NT$ 1825</p>
        </div>
        <div className="mx-10 relative ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <span className="absolute top-0 left-0 z-10 font-medium text-3xl text-black bg-yellow-400 py-2 px-4 rounded-br-[85%]">
            3
          </span>
          <p className="text-xl font-medium">首爾塔展望台</p>
          <p className="text-xl font-medium text-red-500">NT$ 1825</p>
        </div>
      </div>

      <h2 className="mx-10 my-4 ml-20 text-2xl font-semibold">
        <i className="fa-solid fa-angles-right">必遊景點</i>
      </h2>
      <div className="flex m-10">
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">景福宮</p>
        </div>
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">樂天世界</p>
        </div>
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">梨花女子大學</p>
        </div>
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">東大門</p>
        </div>
      </div>

      <h2 className="mx-10 my-4 ml-20 text-2xl font-semibold">
        <i className="fa-solid fa-angles-right">必吃美食</i>
      </h2>
      <div className="flex m-10">
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">廣藏市場</p>
        </div>
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">橋村炸雞</p>
        </div>
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">陳玉華奶奶一隻雞</p>
        </div>
        <div className="mx-10 ">
          <img
            src="/src/assets/images/台北中正紀念堂.jpg"
            alt=""
            className=" w-60 mb-3 object-cover rounded-md"
          />
          <p className="text-xl font-medium">韓式烤大腸</p>
        </div>
      </div>
    </>
  );
};
export default City;
