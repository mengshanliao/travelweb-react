import { useTicketStore } from "@/store/ticket";
import { useParams } from "react-router-dom";

const City = () => {
  const { storageCities } = useTicketStore();
  const { city } = useParams();
  const cityInfo = storageCities.find((item) => item.cityKey === city);
  console.log(cityInfo);

  return (
    <div className="flex flex-col py-14 items-center">
      <div className="flex w-[90%] h-80 bg-black text-white rounded-lg">
        <div className="flex flex-col m-5">
          <h1 className="text-[27px] font-medium mx-4">
            {cityInfo.title} | 旅遊指南
          </h1>
          <p className=" text-lg mt-6 mb-3 mx-4">{cityInfo.desc}</p>
          <div className="flex justify-around items-center h-32 text-xl text-center text-black">
            <span className="p-1 w-1/4 flex flex-col rounded-md bg-slate-300">
              <i className="fa-solid fa-sun my-2">天氣</i>
              {cityInfo.weather}
            </span>
            <span className="p-1 w-1/4 flex flex-col rounded-md bg-slate-300">
              <i className="fa-solid fa-plug-circle-bolt my-2">電壓</i>
              {cityInfo.volt}
            </span>
            <span className="p-1 w-1/4 flex flex-col rounded-md bg-slate-300">
              <i className="fa-solid fa-comment-dollar my-2">貨幣</i>
              {cityInfo.currency}
            </span>
          </div>
        </div>
        <img
          src={cityInfo.cover}
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
      </div>

      <div className="w-[90%] my-12">
        <h2 className="text-2xl font-semibold">
          <i className="fa-solid fa-angles-right"></i>必遊景點
        </h2>
        <div className="my-6 flex flex-wrap">
          {cityInfo.location.map((location) => (
            <div className="m-3 w-[46%] h-40 flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
              <img
                src={location.cover}
                alt=""
                className="object-cover w-48 h-40"
              />
              <div className="flex flex-col m-3">
                <p className="text-lg font-medium">{location.title}</p>
                <p className=" text-gray-700 mt-1">{location.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] my-12">
        <h2 className="text-2xl font-semibold">
          <i className="fa-solid fa-angles-right"></i>必吃美食
        </h2>
        <div className="my-6 flex flex-wrap">
          {cityInfo.food.map((food) => (
            <div className="m-3 w-[47%] h-40 flex rounded-xl border border-solid border-gray-300 overflow-hidden hover:shadow-lg">
              <img src={food.cover} alt="" className="object-cover w-48 h-40" />
              <div className="flex flex-col m-3">
                <p className="text-lg font-medium">{food.title}</p>
                <p className=" text-gray-700 mt-1">{food.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default City;
