import { message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import { usePostStore } from "@/store/post";
import { useParams } from "react-router-dom";
import { formatDate } from "@/utils/time";
import FollowIcon from "@/components/FollowIcon";
import LikeIcon from "@/components/LikeIcon";
import CollectIcon from "@/components/CollectIcon";
import { useEffect } from "react";
import { scrollToTop } from "@/utils/scroll";

const Post = () => {
  //複製連結
  const location = useLocation();
  console.log(location);
  const copy = () => {
    message.success("複製成功");
  };
  const { id } = useParams();
  const { storagePosts } = usePostStore();
  const post = storagePosts.find((post) => post.id === Number(id));

  useEffect(() => scrollToTop(), []);

  return (
    <div className="p-6 flex flex-col items-center">
      <img className="object-cover h-[480px] w-[80%]" src={post.cover} alt="" />
      <div className="w-[80%]">
        <div className="my-6">
          <h3 className="mb-2 text-[27px] font-bold text-black">
            {post.title}
          </h3>
          <div>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="mr-2 p-1 text-base rounded-sm bg-bgG text-themeG"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-2">
          <div className="flex items-center mb-1">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={post.avatar}
              alt=""
            />
            <h3 className="mx-2 text-2xl font-medium ">{post.name}</h3>
            <FollowIcon id={post.authorId} />
          </div>
          <p className="mt-3 text-lg">{post.desc}</p>
          <div className="mt-6">
            <div className="text-base flex justify-between items-center">
              <div className="mr-2 p-1 text-black">
                {formatDate(post.createdAt)}
              </div>
              <div className="w-48 flex justify-around items-center">
                <span className="cursor-pointer text-xl hover:text-themeRed">
                  <LikeIcon id={post.id} />
                </span>
                <span className="cursor-pointer text-xl hover:text-yellow-500">
                  <CollectIcon id={post.id} />
                </span>
                <CopyToClipboard
                  text={window.location.href}
                  onCopy={(text) => copy(text)}
                >
                  <div className="cursor-pointer hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-link"></i>
                    <span className="p-1">複製連結</span>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <section className="flex flex-col my-4">
          <div>
            <h3 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 rounded-3xl font-bold">
              第一天
            </h3>
            <div className="my-8 text-[#002143] text-xl">
              {post.firstDay.map((item) => (
                <div key={post.id}>
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="px-2 font-medium">{item.title}</span>
                  <p className="text-lg mt-5">{item.desc}</p>
                  <div className="flex flex-wrap my-8">
                    {item.img.map((img) => (
                      <img
                        key={img}
                        src={img}
                        alt=""
                        className="w-80 h-80 object-cover p-3"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 rounded-3xl font-bold">
              第二天
            </h3>
            <div className="my-8 text-[#002143] text-xl">
              {post.secondDay.map((item) => (
                <div key={post.id}>
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="px-2 font-medium">{item.title}</span>
                  <p className="text-lg mt-5">{item.desc}</p>
                  <div className="flex flex-wrap my-8">
                    {item.img.map((img) => (
                      <img
                        key={img}
                        src={img}
                        alt=""
                        className="w-80 h-80 object-cover p-3"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[#cd3333] bg-[#cd333339] w-20 text-center p-2 rounded-3xl font-bold">
              第三天
            </h3>
            <div className="my-8 text-[#002143] text-xl">
              {post.thirdDay.map((item) => (
                <div key={post.id}>
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="px-2 font-medium">{item.title}</span>
                  <p className="text-lg mt-5">{item.desc}</p>
                  <div className="flex flex-wrap my-8">
                    {item.img.map((img) => (
                      <img
                        key={img}
                        src={img}
                        alt=""
                        className="w-80 h-80 object-cover p-3"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr />
        <div className="mt-6">
          <div className="flex">
            <h3 className="text-2xl font-bold text-black">留言</h3>
            <span className="px-3 text-2xl font-bold text-black">(3)</span>
          </div>
          <input
            type="text"
            className="bg-gray-200 w-2/3 mt-10 p-2 rounded-xl"
            placeholder="留下你的評論..."
          />
          <button className="ml-2 text-white text-lg font-medium bg-themeG py-1 px-4 rounded-xl hover:shadow-lg">
            送出
          </button>
          <div className="w-3/4 my-20 flex flex-col">
            <div className="bg-white mr-8 my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
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
            <div className="bg-white mr-8  my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
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
            <div className="bg-white mr-8 my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
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
      </div>
    </div>
  );
};
export default Post;
