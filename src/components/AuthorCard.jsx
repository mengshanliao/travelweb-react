import FollowIcon from "./FollowIcon";

const AuthorCard = ({ id, isFollow, onClick, desc, avatar, name }) => {
  return (
    <div className="w-full h-[140px] flex items-center">
      <img
        className="w-20 h-20 object-cover rounded-full cursor-pointer"
        src={avatar}
        alt=""
      />
      <div className="w-2/3 h-full mx-2 flex flex-col justify-center">
        <div className="flex items-center">
          <h3
            className="mr-3 text-lg font-medium cursor-pointer"
            onClick={() => onClick(name)}
          >
            {name}
          </h3>
          <span className="bg-white">
            <FollowIcon id={id} isFollow={isFollow} />
          </span>
        </div>
        <p className="text-gray-500 text-sm py-1">{desc}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
