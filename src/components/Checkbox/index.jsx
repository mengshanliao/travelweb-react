import clsx from "clsx";
import "./index.css";

const Checkbox = ({ onChange, children, checked, type }) => {
  return (
    <div className="flex items-center">
      <label
        className={clsx(
          "mr-1 relative block w-5 h-5 rounded cursor-pointer border-2 border-solid border-black",
          { "rounded-full": type === "circle" }
        )}
      >
        <input
          onChange={onChange}
          checked={checked}
          type="checkbox"
          className="invisible absolute"
        />
        {type === "circle" ? (
          <div className="circle w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden"></div>
        ) : (
          <i className="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden"></i>
        )}
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
