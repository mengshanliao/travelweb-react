import clsx from "clsx";

const CityCard = ({ className, title, cityKey, image, onClick }) => {
  return (
    <div
      onClick={() => onClick(cityKey)}
      className={clsx(
        className,
        "relative w-[180px] mx-6 flex justify-center items-center cursor-pointer"
      )}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover shadow-2xl rounded-lg"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[rgba(0,0,0,0.4)] rounded-xl hover:bg-[rgba(255,255,255,0.05)] hover:transition-all"></div>
      <span className="font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        {title}
      </span>
    </div>
  );
};
export default CityCard;
