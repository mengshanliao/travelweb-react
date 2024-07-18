const CommentCard = ({ name, avatar, message, createdAt }) => {
  return (
    <div className="mr-8 my-2 p-2 rounded-xl flex flex-col border border-solid border-gray-300">
      <div className="flex">
        <div className="flex items-center text-xl font-medium ">
          <img
            className="m-2 w-10 h-10 object-cover rounded-full "
            src={avatar}
            alt=""
          />
          <span>{name}</span>
        </div>
        <div className="mx-7 text-yellow-500 flex items-center text-lg">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
      </div>
      <p className="p-2">{message}</p>
      <span className="flex justify-between px-2 text-gray-500">
        {createdAt}
      </span>
    </div>
  );
};
export default CommentCard;
