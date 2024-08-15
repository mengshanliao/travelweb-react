import { useNavigate } from "react-router-dom";
import { usePostStore } from "@/store/post";
import { useParams } from "react-router-dom";
import FollowIcon from "@/components/FollowIcon";

const Trip = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };
  const { storageAuthors } = usePostStore();
  const { author } = useParams();
  const authorInfo = storageAuthors.find(
    (item) => item.name.replace(" ", "").toLowerCase() === author
  );

  return (
    <div className="m-6 min-w-[1000px] w-[80%] mx-auto">
      <img
        src={authorInfo.img}
        alt="backgroundImage"
        className="w-full h-[320px] object-cover"
      />
      <div className="flex flex-col justify-center items-center mt-[-60px]">
        <img
          src={authorInfo.avatar}
          alt="authorImage"
          className="w-32 h-32 object-cover overflow-hidden rounded-full border-[7px] border-solid border-white"
        />
        <div className="flex items-center">
          <h1 className="mr-2 font-medium text-2xl text-themeG">
            {authorInfo.name}
          </h1>
          <FollowIcon id={authorInfo.id} />
        </div>
      </div>
      <div className="w-[75%] mx-auto my-2">
        <div className="my-6 p-4 text-lg border border-solid border-gray-300">
          {authorInfo.desc}
        </div>

        <div className="flex flex-col">
          <h2 className="my-6 font-medium text-2xl">
            <i class="fa-solid fa-map-location-dot pr-2" />
            旅遊回憶庫
          </h2>
          <div className="flex">
            <img
              src="https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGphcGFufGVufDB8fDB8fHww"
              alt=""
              className="w-44 h-40 rounded-xl"
            />
            <div className="ml-2 p-4 border border-solid border-gray-300 rounded-xl">
              <h3 className="cursor-pointer text-xl font-medium  hover:text-[#cd3333] ">
                日本｜東京五天四夜自由行
              </h3>
              <p className="pt-3 text-lg">
                探索日本五天四夜的奇妙旅程，從東京的繁華都市到京都的歷史古蹟，再到富士山的壯麗自然，感受無與倫比的文化與美景。
              </p>
              <span className="mr-2"> 2023年7月23日</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trip;
