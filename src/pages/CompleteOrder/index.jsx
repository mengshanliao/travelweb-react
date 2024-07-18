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
    <div className="h-screen py-14 bg-[#0022431b]">
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
                <SmileOutlined className="text-2xl text-amber-600  bg-amber-200 p-2 rounded-full" />
              ),
              className: "custom-step",
            },
          ]}
        />
      </div>
      <div className="w-3/4 mx-32 mb-12 p-10 flex flex-col items-center justify-center rounded-2xl bg-white text-xl font-bold">
        <div className="my-5">訂單已完成</div>
        <button
          onClick={() => {
            changePage("/booking");
          }}
          class="my-5 py-2 px-3 text-xl font-bold rounded-xl bg-bgBlue text-themeBlue cursor-pointer"
        >
          回上一頁
        </button>
      </div>
    </div>
  );
};
export default CompleteOrder;
