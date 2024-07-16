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
    <div className="w-[360px] m-4 overflow-hidden border border-solid border-gray-300 rounded-xl">
      <div className="relative h-[260px] overflow-hidden">
        <img className="w-full h-full object-cover" src={cover} />
        <span className="absolute top-0 left-0 text-black text-3xl py-2 px-4 hover:text-yellow-500 cursor-pointer">
          <CollectIcon id={id} />
        </span>
      </div>
      <div className="h-full text-sm flex flex-wrap m-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="mx-1 px-1 bg-bgBlue text-themeBlue rounded-sm"
          >
            {tag}
          </span>
        ))}
        <h1
          onClick={onClick}
          className="whitespace-nowrap overflow-hidden cursor-pointer text-ellipsis mx-1 my-2 text-xl font-semibold hover:text-themeRed"
        >
          {title}
        </h1>
        <h3 className="whitespace-nowrap overflow-hidden text-ellipsis mx-2 text-gray-500 text-base">
          {desc}
        </h3>
        <hr />
        <div className="w-full flex flex-col">
          <div className="flex items-center mx-2 my-1">
            <img
              className="w-9 h-9 object-cover rounded-full cursor-pointer"
              src={avatar}
              alt=""
            />
            <div className="mx-2 text-xl font-medium cursor-pointer">
              {name}
            </div>
            <span>
              <FollowIcon id={id} isFollow={isFollow} />
            </span>
          </div>
          <div className="flex justify-between items-center mx-2">
            <span className="text-base mx-2 font-medium text-black">
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
