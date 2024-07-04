import clsx from "clsx";

const CityCard = ({ className, title, cityKey, image, onClick }) => {
  return (
    <div
      onClick={() => onClick(cityKey)}
      class={clsx(
        className,
        "relative w-[200px] h-[120px] my-2 mx-7 flex flex-col justify-center items-center cursor-pointer"
      )}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover shadow-2xl rounded-xl"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[rgba(0,0,0,0.3)] rounded-xl"></div>
      <span className="font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        {title}
      </span>
    </div>
  );
};
export default CityCard;
