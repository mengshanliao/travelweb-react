import "./index.css";

const Checkbox = ({ onClick, children }) => {
  return (
    <div className="flex items-center ">
      <label
        onClick={onClick}
        className="mr-1 relative block w-5 h-5 rounded border-2 border-solid border-black"
      >
        <input type="checkbox" className="invisible absolute" />
        <i class="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden"></i>
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
