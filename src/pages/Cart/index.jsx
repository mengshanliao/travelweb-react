import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import {
  ShoppingCartOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useUserStore } from "@/store/user";
import { formatDateTW } from "@/utils/time";
import { ticketApi } from "@/api/ticket";

const Cart = () => {
  const { cart, setCart } = useUserStore(); //存入localStorage
  const [cartTickets, setCartTickets] = useState(cart); //在購物車裡的門票狀態
  const [total, setTotal] = useState(0); //總金額
  const [selectedTickets, setSelectedTickets] = useState([]); //純ID數字,選取狀態
  const [isCheckAll, setIsCheckAll] = useState(false);

  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  //cart裡的全選:本來都沒選或至少一個已經選取=>全選;本來全選=>全部取消選取
  const checkAll = () => {
    setIsCheckAll(!checkAll);
    if (selectedTickets.length < cartTickets.length) {
      const allTickets = [];
      for (const item of cartTickets) {
        allTickets.push(item.id);
      }
      setSelectedTickets(allTickets);
    } else {
      setSelectedTickets([]);
    }
  };
  //cart裡選取
  const handleSelect = (id) => {
    const isSelect = selectedTickets.some((item) => item === id);
    if (isSelect) {
      setSelectedTickets(selectedTickets.filter((item) => item !== id));
    } else {
      setSelectedTickets([...selectedTickets, id]);
    }
  };
  //cart裡刪除各別ticket
  const handleDelete = (id) => {
    const newCartTickets = cartTickets.filter((item) => item.id !== id);
    setCartTickets(newCartTickets);
    setCart(newCartTickets);
    console.log(cartTickets);
  };
  //加進cart的ticket加減數量
  const updateQuantity = (id, number) => {
    const newCartTickets = cartTickets.map((item) => {
      if (item.id === id) {
        if (number > 0 || (item.quantity > 1 && number < 0)) {
          item.quantity += number;
          return item;
        }
      }
      return item;
    });
    setCartTickets(newCartTickets);
    setCart(newCartTickets);
  };
  //totalPrice
  useEffect(() => {
    const calculatePrice = () => {
      let totalPrice = 0;
      for (const item of cartTickets) {
        totalPrice += item.price * item.quantity;
      }
      setTotal(totalPrice);
    };
    calculatePrice();
  }, [cartTickets]);
  //分別按滿選取框後，全選框也要打勾
  useEffect(() => {
    if (!selectedTickets.length) {
      setIsCheckAll(false);
    }
    if (selectedTickets.length === cartTickets.length) {
      setIsCheckAll(true);
    }
  }, [selectedTickets]);

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
        <div className="w-3/4 flex flex-col items-center ">
          <div className="w-4/5 p-3 rounded-2xl bg-white ">
            <div className="h-12 flex justify-between items-center p-2 mx-3">
              <Checkbox onChange={checkAll} checked={isCheckAll}>
                全選
              </Checkbox>
              {selectedTickets.length ? (
                <span className="px-2 py-1 text-sm border border-solid border-black hover:bg-gray-200 rounded-xl cursor-pointer">
                  刪除選中的活動
                </span>
              ) : (
                ""
              )}
            </div>
            <hr />
            {cartTickets.map((ticket) => (
              <div key={ticket.id}>
                <div className="my-4 mx-3">
                  <div className="flex mx-1 my-2 items-center justify-between text-lg">
                    <h1 className="font-medium">{ticket.title}</h1>
                    <div>
                      <i
                        onClick={() => updateQuantity(ticket.id, -1)}
                        className="fa-solid fa-minus p-2 bg-[#0022431b] rounded-md"
                      ></i>
                      <input
                        type="text"
                        value={ticket.quantity}
                        className="w-9 h-9 p-2 text-center rounded-md"
                      />
                      <i
                        onClick={() => updateQuantity(ticket.id, 1)}
                        className="fa-solid fa-plus p-2 bg-[#0022431b] rounded-md "
                      ></i>
                    </div>
                  </div>
                  <h3 className="text-sm m-1 mb-3 text-gray-500">
                    使用日期：
                    {formatDateTW(ticket.time)}
                  </h3>
                  <div className="flex justify-between items-center m-1 text-[15px]">
                    <div className="flex">
                      <Checkbox
                        onChange={() => handleSelect(ticket.id)}
                        checked={selectedTickets.some((id) => id === ticket.id)}
                      >
                        選取
                      </Checkbox>
                      <button
                        onClick={() => handleDelete(ticket.id)}
                        className="ml-4 px-1 text-base text-gray-600 border border-solid border-gray-300 rounded-md cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]"
                      >
                        <i className="fa-solid fa-trash-can mx-1"></i>
                        刪除
                      </button>
                    </div>
                    <div className="text-xl font-semibold">
                      NT$ {ticket.price * ticket.quantity}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={() => {
                changePage("/");
              }}
              className="m-3 py-2 px-5 text-xl font-bold rounded-xl bg-bgBlue text-themeBlue cursor-pointer"
            >
              回首頁
            </button>
          </div>
        </div>

        <div className="w-1/5 h-1/2 p-4 bg-white rounded-2xl">
          <div className="px-2 pb-8">
            <div className="mb-8 m-1 p-4 bg-[#0022431b] rounded-md">
              <h1 className="text-lg pb-2">優惠折扣</h1>
              <input
                type="text"
                className="w-full py-1 px-2 rounded-md bg-white"
                placeholder="請輸入折扣碼"
              />
            </div>
            <hr />
            <p className="py-4 text-lg">
              {cartTickets.length} 件總計
              <i className="fa-solid fa-angles-down px-3" />
            </p>
            <p className="text-2xl font-bold">NT$ {total}</p>
          </div>
          <button
            onClick={() => {
              changePage("/booking");
            }}
            className="w-full py-1 px-5 text-lg font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer"
          >
            前往結帳
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
