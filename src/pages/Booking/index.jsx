import { useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useUserStore } from "@/store/user";
import { formatDateTW } from "@/utils/time";
import { useEffect, useState } from "react";

const Booking = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  const { cart, setCart } = useUserStore();
  const [total, setTotal] = useState(0);

  //totalPrice
  useEffect(() => {
    const calculatePrice = () => {
      let totalPrice = 0;
      for (const item of cart) {
        totalPrice += item.price * item.quantity;
      }
      setTotal(totalPrice);
    };
    calculatePrice();
  }, [cart]);

  return (
    <div className="py-14 bg-[#0022431b]">
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
              icon: (
                <FormOutlined className="text-2xl text-themeBlue bg-bgBlue p-2 rounded-full " />
              ),
              className: "custom-step",
            },
            {
              title: "完成訂單",
              status: "wait",
              icon: <SmileOutlined className="text-2xl text-themeBlue" />,
              className: "custom-step",
            },
          ]}
        />
      </div>
      <div className="my-6 flex flex-col items-center justify-center">
        <div className="w-3/4 mb-6 p-4 flex flex-col rounded-2xl bg-white">
          <h1 className="px-2 pb-3 text-xl font-bold text-themeBlue">
            訂單詳情
          </h1>

          {cart.map((ticket) => (
            <div key={ticket.id}>
              <div className="my-3 p-2 flex justify-between border border-solid border-bgBlue rounded-lg">
                <div className="flex flex-col mx-1 my-2 text-xl">
                  <h1 className="mb-2 font-medium">{ticket.title}</h1>
                  <h3 className="text-sm m-1 mb-3 text-gray-500">
                    使用日期：
                    {formatDateTW(ticket.time)}
                  </h3>
                </div>
                <div className="w-60 flex items-center justify-between text-xl">
                  <span className="pr-20">{ticket.quantity} 張</span>
                  <div className="font-bold">
                    NT$ {ticket.price * ticket.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="m-3 flex justify-between text-lg">
            <span className="font-medium">總金額</span>
            <span className="font-bold text-themeRed text-[22px]">
              NT$ {total}
            </span>
          </div>
        </div>
        <div className="w-3/4 mb-6 p-4 flex flex-col rounded-2xl bg-white">
          <h1 className="px-2 pb-3 text-xl font-bold text-themeBlue">
            訂購人資料
          </h1>
          <hr />
          <div className="flex flex-col m-4 text-base">
            <label htmlFor="" className="my-2">
              姓氏
            </label>
            <input type="text" className="bg-gray-200 rounded-lg p-2 mb-3" />
            <label htmlFor="" className="my-2">
              名字
            </label>
            <input type="text" className="bg-gray-200 rounded-lg p-2 mb-3" />
            <label htmlFor="" className="my-2">
              手機號碼
            </label>
            <input type="text" className="bg-gray-200 rounded-lg p-2 mb-3" />
            <label htmlFor="" className="my-2">
              電子信箱
            </label>
            <input type="email" className="bg-gray-200 rounded-lg p-2 mb-3" />
          </div>
        </div>
        <div className="w-3/4 mb-6 p-4 flex flex-col rounded-2xl bg-white">
          <h1 className="px-2 pb-3 text-xl font-bold text-themeBlue">
            付款方式
          </h1>
          <hr />
          <div className="flex flex-col my-5 mx-2 text-lg">
            <div className="my-4">
              <i className="fa-regular fa-circle"></i>
              <span className="px-2">信用卡/簽帳金融卡</span>
            </div>
            <div className="my-4">
              <i className="fa-regular fa-circle"></i>
              <span className="px-2">LINE Pay</span>
            </div>
            <div className="my-4">
              <i className="fa-regular fa-circle"></i>
              <span className="px-2">超商繳費</span>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex justify-between">
          <button
            onClick={() => {
              changePage("/cart");
            }}
            className="py-2 px-3 text-xl font-bold rounded-xl bg-bgBlue text-themeBlue cursor-pointer"
          >
            回上一頁
          </button>
          <button
            onClick={() => {
              changePage("/complete-order");
            }}
            className="py-2 px-3 text-xl font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer"
          >
            確定結帳
          </button>
        </div>
      </div>
    </div>
  );
};
export default Booking;
