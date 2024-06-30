const CityCard = ({ title, image, cityKey }) => {
  return (
    <section class="p-7 flex flex-col justify-center items-center">
      <button
        class="mr-24 last:mr-0 flex justify-between font-semibold text-2xl tracking-wide"
        onClick={() => onClick(cityKey)}
      >
        <img src={image} alt="" />
        {title}
      </button>
    </section>
  );
};
export default CityCard;
