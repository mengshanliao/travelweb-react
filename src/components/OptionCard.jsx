import { Button, Drawer } from "antd";
import { useState } from "react";
import clsx from "clsx";

const OptionCard = ({ title, tags, drawer, price, className, onClick }) => {
  //antd:drawer
  const [open, setOpen] = useState(false);
  const showDrawer = (bool) => {
    setOpen(bool);
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        className,
        "w-[60%] mb-5 p-4 border-2 border-solid border-gray-200 rounded-2xl cursor-pointer hover:border-themeRed hover:border-2"
      )}
    >
      <h1 className="text-xl font-medium mb-3">{title}</h1>
      <div className="mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="mr-2 mt-1 py-1 px-2 bg-gray-200 text-gray-700 text-sm rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <p className="mr-8 text-2xl font-bold">NT$ {price}</p>
        <div className="p-2 flex items-center text-lg text-orange-700 font-semibold rounded-lg">
          <Button
            type="primary"
            onClick={() => showDrawer(true)}
            style={{
              color: "#ffffff",
              backgroundColor: "#6b7280",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            <i className="fa-solid fa-angles-right"></i>
            方案詳情
          </Button>
          <Drawer title={title} onClose={() => showDrawer(false)} open={open}>
            <div className="mb-5">
              <h1 className="font-semibold text-lg">票價：</h1>
              <p className="text-base">NT$ {drawer.price}</p>
            </div>
            <hr />
            <div className="my-5">
              <h1 className="font-semibold text-lg">購票：</h1>
              <p className="text-base">{drawer.buy}</p>
            </div>
            <hr />
            <div className="my-5">
              <h1 className="font-semibold text-lg">主題區域：</h1>
              <p className="text-base">{drawer.desc}</p>
            </div>
            <hr />
          </Drawer>
        </div>
      </div>
    </div>
  );
};
export default OptionCard;
