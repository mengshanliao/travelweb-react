import { Pagination } from "antd";

const City = () => {
  return (
    <div className="flex flex-col py-14 items-center">
      <div className="flex w-[90%] h-80 bg-black text-white rounded-lg">
        <div className="flex flex-col m-5">
          <h1 className="text-[27px] font-medium mx-4">日本 | 旅遊指南</h1>
          <p className=" text-lg mt-6 mb-3 mx-4">
            日本是一個結合了傳統文化和現代科技的魅力國度。東京探索古老的寺廟和神社，京都和奈良保存完好的歷史建築，大阪是以其美食和娛樂設施聞名。富士山則是日本的象徵，無論登山還是遠觀都令人難忘。
          </p>
          <div className="flex justify-around items-center h-32 text-xl text-center text-black">
            <span className="p-1 w-1/4 flex flex-col rounded-md bg-slate-300">
              <i className="fa-solid fa-sun my-2">天氣</i>
              18~27°C
            </span>
            <span className="p-1 w-1/4 flex flex-col rounded-md bg-slate-300">
              <i className="fa-solid fa-plug-circle-bolt my-2">電壓</i>
              100v
            </span>
            <span className="p-1 w-1/4 flex flex-col rounded-md bg-slate-300">
              <i className="fa-solid fa-comment-dollar my-2">貨幣</i>
              JPY
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-2/3 h-full object-cover rounded-tr-lg rounded-br-lg"
        />
      </div>

      <div className="w-[90%] my-12">
        <h2 className="text-2xl font-semibold">
          <i className="fa-solid fa-angles-right"></i>在地體驗排行
        </h2>
        <div className="flex">
          <div className="my-8 flex">
            <div className="m-2 w-64 h-80 border border-solid border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547782101-30c84b97a71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBkaXNuZXl8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-cover"
                />
                <span className="absolute top-0 right-0 z-30 font-semibold text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]">
                  93折
                </span>
              </div>
              <p className="text-xl mb-2 m-2 text-nowrap font-medium text-ellipsis overflow-hidden">
                日本｜東京迪士尼門票
              </p>
              <div className="px-2 py-1">
                <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm">
                  熱賣中
                </span>
                <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm">
                  熱賣中
                </span>
              </div>
              <div className="flex flex-col m-1 px-2 font-medium">
                <div>
                  <span className="mr-4 text-xl">NT$ 1980</span>
                  <span className=" text-gray-300 line-through text-lg">
                    NT$ 1750
                  </span>
                </div>
                <span className="text-gray-500 text-base mt-1">
                  11965人參加過
                </span>
              </div>
            </div>
          </div>
          <div className="my-8 flex">
            <div className="m-2 w-64 h-80 border border-solid border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547782101-30c84b97a71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBkaXNuZXl8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-cover"
                />
                <span className="absolute top-0 right-0 z-30 font-semibold text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]">
                  93折
                </span>
              </div>
              <p className="text-xl mb-2 m-2 text-nowrap font-medium text-ellipsis overflow-hidden">
                日本｜東京迪士尼門票
              </p>
              <div className="px-2 py-1">
                <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm">
                  熱賣中
                </span>
                <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm">
                  熱賣中
                </span>
              </div>
              <div className="flex flex-col m-1 px-2 font-medium">
                <div>
                  <span className="mr-4 text-xl">NT$ 1980</span>
                  <span className=" text-gray-300 line-through text-lg">
                    NT$ 1750
                  </span>
                </div>
                <span className="text-gray-500 text-base mt-1">
                  11965人參加過
                </span>
              </div>
            </div>
          </div>
          <div className="my-8 flex">
            <div className="m-2 w-64 h-80 border border-solid border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547782101-30c84b97a71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBkaXNuZXl8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-cover"
                />
                <span className="absolute top-0 right-0 z-30 font-semibold text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]">
                  93折
                </span>
              </div>
              <p className="text-xl mb-2 m-2 text-nowrap font-medium text-ellipsis overflow-hidden">
                日本｜東京迪士尼門票
              </p>
              <div className="px-2 py-1">
                <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm">
                  熱賣中
                </span>
                <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm">
                  熱賣中
                </span>
              </div>
              <div className="flex flex-col m-1 px-2 font-medium">
                <div>
                  <span className="mr-4 text-xl">NT$ 1980</span>
                  <span className=" text-gray-300 line-through text-lg">
                    NT$ 1750
                  </span>
                </div>
                <span className="text-gray-500 text-base mt-1">
                  11965人參加過
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Pagination defaultCurrent={1} total={30} />
        </div>
      </div>

      <div className="w-[90%] my-12">
        <h2 className="text-2xl font-semibold">
          <i className="fa-solid fa-angles-right"></i>必遊景點
        </h2>
        <div className="my-6 flex flex-wrap">
          <div className="m-3 w-[47%] flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1547782101-30c84b97a71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBkaXNuZXl8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="object-cover w-48 h-40"
            />
            <div className="flex flex-col m-3">
              <p className="text-lg font-medium">東京鐵塔</p>
              <p className=" text-gray-700 mt-1">
                東京鐵塔是日本東京的標誌性建築，塔內設有觀景台，提供360度的城市全景，天氣晴朗時甚至可以看到富士山。
              </p>
            </div>
          </div>
          <div className="m-3 w-[47%] flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1547782101-30c84b97a71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBkaXNuZXl8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="object-cover w-48 h-40"
            />
            <div className="flex flex-col m-3">
              <p className="text-lg font-medium">東京鐵塔</p>
              <p className=" text-gray-700 mt-1">
                東京鐵塔是日本東京的標誌性建築，塔內設有觀景台，提供360度的城市全景，天氣晴朗時甚至可以看到富士山。
              </p>
            </div>
          </div>
          <div className="m-3 w-[47%] flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1547782101-30c84b97a71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBkaXNuZXl8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="object-cover w-48 h-40"
            />
            <div className="flex flex-col m-3">
              <p className="text-lg font-medium">東京鐵塔</p>
              <p className=" text-gray-700 mt-1">
                東京鐵塔是日本東京的標誌性建築，塔內設有觀景台，提供360度的城市全景，天氣晴朗時甚至可以看到富士山。
              </p>
            </div>
          </div>
          <div className="m-3 w-[47%] flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1547782101-30c84b97a71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBkaXNuZXl8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="object-cover w-48 h-40"
            />
            <div className="flex flex-col m-3">
              <p className="text-lg font-medium">東京鐵塔</p>
              <p className=" text-gray-700 mt-1">
                東京鐵塔是日本東京的標誌性建築，塔內設有觀景台，提供360度的城市全景，天氣晴朗時甚至可以看到富士山。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] my-12">
        <h2 className="text-2xl font-semibold">
          <i className="fa-solid fa-angles-right"></i>必吃美食
        </h2>
        <div className="my-6 flex flex-wrap">
          <div className="m-3 w-[47%] h-40 flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1545879429-677464262714?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="object-cover w-48 h-40"
            />
            <div className="flex flex-col m-3">
              <p className="text-lg font-medium">壽司之神-すきやばし次郎</p>
              <p className=" text-gray-700 mt-1">
                由知名壽司師傅小野二郎經營得米其林三星餐廳，以其極致的壽司技藝和高品質的食材而著稱。
              </p>
            </div>
          </div>
          <div className="m-3 w-[47%] h-40 flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1545879429-677464262714?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="object-cover w-48 h-40"
            />
            <div className="flex flex-col m-3">
              <p className="text-lg font-medium">壽司之神-すきやばし次郎</p>
              <p className=" text-gray-700 mt-1">
                由知名壽司師傅小野二郎經營得米其林三星餐廳，以其極致的壽司技藝和高品質的食材而著稱。
              </p>
            </div>
          </div>
          <div className="m-3 w-[47%] h-40 flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1545879429-677464262714?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="object-cover w-48 h-40"
            />
            <div className="flex flex-col m-3">
              <p className="text-lg font-medium">壽司之神-すきやばし次郎</p>
              <p className=" text-gray-700 mt-1">
                由知名壽司師傅小野二郎經營得米其林三星餐廳，以其極致的壽司技藝和高品質的食材而著稱。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default City;
