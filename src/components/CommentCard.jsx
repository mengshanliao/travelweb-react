import { formatDateTW } from "@/utils/time";

const CommentCard = ({ name, avatar, message, createdAt }) => {
  return (
    <div className="bg-white my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
      <div className="flex">
        <div className="flex items-center text-lg font-medium ">
          <img
            className="m-2 w-10 h-10 object-cover rounded-full "
            src={avatar}
            alt=""
          />
          <span>{name}</span>
        </div>
        <div className="mx-4 text-yellow-500 flex items-center text-base">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
      </div>
      <p className="px-2 text-sm">{message}</p>
      <span className="text-sm flex justify-between p-2 text-gray-400">
        發布日期：{formatDateTW(createdAt)}
      </span>
    </div>
  );
};
export default CommentCard;
