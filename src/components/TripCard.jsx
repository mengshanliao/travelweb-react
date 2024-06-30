const TripCard = ({
  id,
  title,
  label,
  cardImg,
  cardDiscount,
  priceDiscount,
  priceOrigin,
  sold,
}) => {
  return (
    <section class="flex flex-wrap justify-center items-center p-8">
      <div class="w-[280px] m-5 border border-solid border-gray-200 rounded-xl overflow-hidden">
        <div class="relative h-60 overflow-hidden cursor-pointer">
          <img class="w-auto h-[300px]" src={cardImg} />
          <span class="absolute top-0 right-0 z-10 font-medium text-orange-600 bg-amber-300 py-1 px-2 rounded-t-r-[4px]">
            {cardDiscount}
          </span>
          <div class="absolute top-0 left-0 w-auto h-auto opacity-40 bg-black"></div>
        </div>
        <div class="h-auto p-2">
          <h1 class=" text-xl mb-1 text-nowrap font-medium text-ellipsis overflow-hidden">
            {title}
          </h1>
          <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
            {label}
          </span>
          <span class="py-0 px-1 mb-3 rounded text-red-400 bg-red-100	text-[17px] font-medium">
            {label}
          </span>
          <div class="flex justify-between items-center py-3 px-0 font-medium">
            <div class="price">
              <span class=" mr-1 text-[18px]">{priceDiscount}</span>
              <span class=" text-gray-300 text-[15px] line-through ">
                {priceOrigin}
              </span>
            </div>
            <span class=" text-gray-500 text-[15px]">{sold}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TripCard;
