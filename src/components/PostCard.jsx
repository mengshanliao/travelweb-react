import { formatDate } from "@/utils/time";

const PostCard = ({
  onClick,
  title,
  tags,
  cover,
  desc,
  avatar,
  name,
  createdAt,
}) => {
  return (
    <div className="w-[360px] overflow-hidden border border-solid border-gray-200 rounded-xl  hover:shadow-lg">
      <div className="relative h-[280px] overflow-hidden">
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={cover}
        />
        <span className="absolute top-0 left-0 text-black text-[26px] py-1 px-3 hover:text-yellow-500 cursor-pointer">
          <i className="fa-regular fa-bookmark"></i>
        </span>
      </div>
      <div className="h-48 p-2 text-sm">
        {tags.map((tag) => {
          <span
            key={tag}
            className="mr-2 py-[2px] px-1 bg-gray-300 text-gray-600 "
          >
            {tag}
          </span>;
        })}
        <h1
          onClick={onClick}
          className="whitespace-nowrap overflow-hidden text-ellipsis my-2 text-2xl font-extrabold hover:text-themeRed cursor-pointer"
        >
          {title}
        </h1>
        <h3 className=" whitespace-nowrap overflow-hidden text-ellipsis mb-2 text-gray-600 text-base">
          {desc}
        </h3>
        <hr />
        <div className="flex items-center m-[6px] cursor-pointer">
          <img className="w-9 h-9 rounded-full" src={avatar} alt="" />
          <div className="p-1 mx-2 text-xl font-medium ">{name}</div>
        </div>
        <div className="flex justify-between items-center mx-2">
          <span className="text-base font-medium text-gray-700">
            {formatDate(createdAt)}
          </span>
          <span className="text-2xl hover:text-themeRed cursor-pointer">
            <i className="fa-regular fa-heart"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
