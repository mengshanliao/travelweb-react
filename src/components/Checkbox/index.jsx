import "./index.css";

const Checkbox = ({ onChange, children, checked }) => {
  return (
    <div className="flex items-center ">
      <label className="mr-1 relative block w-5 h-5 rounded border-2 border-solid border-black">
        <input
          onChange={onChange}
          checked={checked}
          type="checkbox"
          className="invisible absolute"
        />
        <i className="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden"></i>
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
