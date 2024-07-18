import React from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/Checkbox";
import {
  ShoppingCartOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useUserStore } from "@/store/user";
import { formatDateTW } from "@/utils/time";

const Cart = () => {
  const { cart, setCart } = useUserStore();

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
                <ShoppingCartOutlined className="text-2xl text-themeBlue bg-bgBlue p-2 rounded-full" />
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
              icon: <SmileOutlined className="text-2xl text-themeBlue" />,
              className: "custom-step",
            },
          ]}
        />
      </div>
      <div className="py-4 flex">
        <div className="w-3/4 flex flex-col items-center">
          <div className="w-4/5 p-4 rounded-2xl bg-white">
            <div className="flex justify-between items-center mb-3">
              <Checkbox>全選</Checkbox>
              <span className="py-1 px-2 text-sm border border-solid border-black hover:bg-gray-200 rounded-xl cursor-pointer">
                刪除選中的活動
              </span>
            </div>
            <hr />
            {cart.map((ticket) => (
              <>
                <div className="my-4">
                  <div className="flex mx-1 my-2 items-center justify-between text-lg">
                    <h1 className="font-medium">{ticket.title}</h1>
                    <div>
                      <i className="fa-solid fa-minus p-2 bg-[#0022431b] rounded-md"></i>
                      <input
                        type="text"
                        value={ticket.quantity}
                        className="w-9 h-9 p-2 text-center rounded-md"
                      />
                      <i className="fa-solid fa-plus p-2 bg-[#0022431b] rounded-md "></i>
                    </div>
                  </div>
                  <h3 className="text-sm m-1 mb-3 text-gray-500">
                    使用日期：
                    {formatDateTW(ticket.time)}
                  </h3>
                  <div className="flex justify-between items-center m-1 text-[15px]">
                    <div className="flex">
                      <Checkbox>選取</Checkbox>
                      <button className="ml-4 px-1 text-base text-gray-600 border border-solid border-gray-300 rounded-md cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
                        <i class="fa-solid fa-trash-can mx-1"></i>
                        刪除
                      </button>
                    </div>
                    <div className="text-lg font-medium">
                      NT$ {ticket.price}
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>

        <div className="w-1/5 h-1/2 p-4 bg-white rounded-2xl">
          <div class="px-2 pb-8">
            <div className="mb-8 m-1 p-4 bg-[#0022431b] rounded-md">
              <h1 className="text-lg pb-2">優惠折扣</h1>
              <input
                type="text"
                className="w-full py-1 px-2 rounded-md bg-white"
                placeholder="請輸入折扣碼"
              />
            </div>
            <hr />
            <p class="py-4 text-lg">
              3 件總計
              <i class="fa-solid fa-angles-down px-3" />
            </p>
            <p class="text-2xl font-bold">NT$ 10800</p>
          </div>
          <button
            onClick={() => {
              changePage("/booking");
            }}
            class="w-full py-1 px-5 text-lg font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer"
          >
            前往結帳
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
