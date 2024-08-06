import LikeTicket from "./LikeTicket";

const TicketCard = ({
  id,
  isLike,
  onClick,
  title,
  tags,
  cover,
  discount,
  priceDiscount,
  priceOrigin,
  sold,
}) => {
  return (
    <div className="w-full border border-solid border-gray-300 bg-white rounded-lg overflow-hidden hover:shadow-lg">
      <div
        onClick={onClick}
        className="relative overflow-hidden cursor-pointer"
      >
        <img className="h-[220px] object-cover" src={cover} />
        <span className="absolute top-0 right-0 z-30 font-semibold text-orange-600 bg-amber-300 py-1 px-2 rounded-tr-[4px]">
          {discount}折
        </span>
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(255,255,255,0.1)]"></div>
      </div>
      <div className="p-2">
        <div className="mb-2">
          <h1
            onClick={onClick}
            className="mb-2 text-xl text-nowrap font-medium text-ellipsis overflow-hidden cursor-pointer"
          >
            {title}
          </h1>
          {tags.map((tag) => (
            <span
              key={tag}
              className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="px-2 flex flex-col font-medium">
          <div className="flex items-center">
            <span className="mr-3 text-xl">NT$ {priceDiscount}</span>
            <span className=" text-gray-300 line-through text-base">
              NT$ {priceOrigin}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className=" text-gray-500 text-base">{sold} 人參加過</span>
            <span className="text-3xl hover:text-themeRed cursor-pointer">
              <LikeTicket id={id} isLike={isLike} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketCard;
