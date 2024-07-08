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
      className="w-[290px] border border-solid border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg"
    >
      <div className="relative h-56 overflow-hidden">
        <img className="h-[260px]" src={cover} />
        <span className="absolute top-0 right-0 z-30 font-semibold text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]">
          {discount}折
        </span>
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(255,255,255,0.1)]"></div>
      </div>
      <div className="p-2">
        <h1 className=" text-xl mb-2 mx-1 text-nowrap font-medium text-ellipsis overflow-hidden">
          {title}
        </h1>
        {tags.map((tag) => {
          <span className="p-1 mx-1 rounded text-red-500 bg-red-100 text-base">
            {tag}
          </span>;
        })}

        <div className="flex justify-between items-center py-3 px-0 font-medium">
          <div className="price">
            <span className=" mr-1 text-[18px]">NT$ {priceDiscount}</span>
            <span className=" text-gray-300 text-[15px] line-through ">
              NT$ {priceOrigin}
            </span>
          </div>
          <span className=" text-gray-500 text-base">{sold}人參加過</span>
        </div>
      </div>
    </div>
  );
};
export default TicketCard;
