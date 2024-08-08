import FollowIcon from "./FollowIcon";

const AuthorCard = ({ id, isFollow, onClick, desc, avatar, name }) => {
  return (
    <div
      onClick={() => onClick(name)}
      className="w-full h-[140px] flex items-center"
    >
      <img
        className="w-20 h-20 object-cover rounded-full cursor-pointer"
        src={avatar}
        alt=""
      />
      <div className="w-2/3 h-full mx-2 flex flex-col justify-center">
        <div className="flex items-center">
          <span
            className="mr-3 text-lg font-medium cursor-pointer"
            onClick={onClick}
          >
            {name}
          </span>
          <span>
            <FollowIcon id={id} isFollow={isFollow} />
          </span>
        </div>
        <div className="text-gray-500 text-sm py-1">{desc}</div>
      </div>
    </div>
  );
};

export default AuthorCard;
