const TicketCard = ({
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
    <div
      onClick={onClick}
      className="w-72 m-4 border border-solid border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img className="h-[240px] object-cover" src={cover} />
        <span className="absolute top-0 right-0 z-30 font-semibold text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]">
          {discount}折
        </span>
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(255,255,255,0.1)]"></div>
      </div>
      <div className="p-2">
        <h1 className="text-xl mb-2 mx-1 text-nowrap font-medium text-ellipsis overflow-hidden">
          {title}
        </h1>
        {tags.map((tag) => (
          <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-sm">
            {tag}
          </span>
        ))}
        <div className="flex flex-col m-2 font-medium">
          <div>
            <span className="mr-4 text-xl">NT$ {priceDiscount}</span>
            <span className=" text-gray-300 line-through text-lg">
              NT$ {priceOrigin}
            </span>
          </div>
          <span className=" text-gray-500 text-base mt-1">{sold} 人參加過</span>
        </div>
      </div>
    </div>
  );
};
export default TicketCard;
