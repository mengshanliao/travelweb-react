import {
  ShoppingCartOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "@/utils/scroll";
import { useTranslation } from "react-i18next";

const CompleteOrder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  useEffect(() => scrollToTop(), []);

  return (
    <div className="mx-auto py-14 bg-[#1a675822] h-[calc(100vh-178px)]">
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
      <div className="w-[70%] h-1/2 mx-auto mb-6 p-4 flex flex-col items-center justify-around rounded-lg bg-white text-xl">
        <div className="my-5">{t("complete")}</div>
        <div
          onClick={() => {
            changePage("/order");
          }}
          className="py-2 px-2 text-xl font-bold rounded-lg bg-bgRed text-themeRed cursor-pointer"
        >
          {t("orderDetail")}
        </div>
      </div>
    </div>
  );
};
export default CompleteOrder;
