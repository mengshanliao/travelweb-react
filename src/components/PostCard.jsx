import { formatDate } from "@/utils/time";
import LikeIcon from "./LikeIcon";
import CollectIcon from "./CollectIcon";
import FollowIcon from "./FollowIcon";

const PostCard = ({
  id,
  isLike,
  isFollow,
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
    <div className="flex mb-8 border border-solid border-gray-300 rounded-lg ">
      <div className="w-1/3 relative overflow-hidden  rounded-tl-lg rounded-bl-lg">
        <img className="h-full object-cover" src={cover} />
        <span className="absolute top-0 left-0 text-black text-3xl py-2 px-4 hover:text-yellow-500 cursor-pointer">
          <CollectIcon id="{id}" />
        </span>
      </div>
      <div className="px-4 py-3 w-2/3 flex flex-col">
        <div>
          <h1
            onClick={onClick}
            className="cursor-pointer m-1 text-[22px] font-semibold hover:text-themeRed"
          >
            {title}
          </h1>
          <div>
            {tags.map((tag) => (
              <span
                key={tag}
                className="mr-2 p-1 bg-[#1a67583a] text-themeG rounded-sm text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="my-3 text-gray-500 text-base">{desc}</h3>
        <div className="flex justify-between">
          <div className="w-1/2 flex items-center">
            <img
              className="w-9 h-9 object-cover rounded-full cursor-pointer"
              src={avatar}
              alt=""
            />
            <div className="mx-3 text-xl font-medium cursor-pointer">
              {name}
            </div>
            <span>
              <FollowIcon id={id} isFollow={isFollow} />
            </span>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <span className="mr-12 text-base font-medium text-black">
              {formatDate(createdAt)}
            </span>
            <span className="text-3xl hover:text-themeRed cursor-pointer">
              <LikeIcon id={id} isLike={isLike} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
