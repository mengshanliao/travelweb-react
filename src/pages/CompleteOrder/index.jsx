import {
  ShoppingCartOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useNavigate } from "react-router-dom";

const CompleteOrder = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  return (
    <div className="h-screen mx-auto py-14 bg-[#1a675822]">
      <div className="mx-32 mb-4 px-4 py-2">
        <Steps
          items={[
            {
              title: "選擇方案",
              status: "finish",
              icon: (
                <ShoppingCartOutlined className="text-2xl text-themeBlue" />
              ),
            },
            {
              title: "填寫資料",
              status: "finish",
              icon: <FormOutlined className="text-2xl text-themeBlue" />,
              className: "custom-step",
            },
            {
              title: "完成訂單",
              status: "wait",
              icon: (
                <SmileOutlined className="text-2xl text-red-600  bg-bgColor p-2 rounded-full" />
              ),
              className: "custom-step",
            },
          ]}
        />
      </div>
      <div className="w-[70%] mx-auto mb-6 p-4 flex flex-col items-center rounded-lg bg-white text-xl">
        <div className="my-5">訂單已完成</div>
        <div className="w-1/2 my-4 flex justify-between">
          <div
            onClick={() => {
              changePage("/booking");
            }}
            className="py-2 px-2 text-xl font-bold rounded-lg bg-bgG text-themeG cursor-pointer"
          >
            回上一頁
          </div>
          <div
            onClick={() => {
              changePage("/order");
            }}
            className="py-2 px-2 text-xl font-bold rounded-lg bg-bgRed text-themeRed cursor-pointer"
          >
            訂單詳情
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompleteOrder;
