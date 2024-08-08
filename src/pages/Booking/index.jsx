import { useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Steps, message } from "antd";
import { useUserStore } from "@/store/user";
import { formatDateTW } from "@/utils/time";
import { useEffect, useState } from "react";
import Checkbox from "@/components/Checkbox";

const payMethods = [
  {
    label: "信用卡/簽帳金融卡",
    value: "信用卡/簽帳金融卡",
  },
  {
    label: "LINE Pay",
    value: "LINE Pay",
  },
  {
    label: "超商繳費",
    value: "超商繳費",
  },
];
const Booking = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };
  const { cart, setCart, order, setOrder } = useUserStore();
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(payMethods[0].value); //付款方式只能選一
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false); //formData 的 error

  const checkout = (e) => {
    e.preventDefault();
    if (!lastName || !firstName || !phone || !email) {
      message.error("請輸入正確資訊");
      setIsError(true);
      return;
    }
    const formData = {
      id: Math.floor(Math.random() * 1000),
      lastName,
      firstName,
      phone,
      email,
      payment,
      order: cart,
      total,
    };
    setCart([]);
    setOrder([...order, formData]);
    changePage("/complete-order");
  };

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
    <div className="py-6  bg-[#1a675822]">
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
                <FormOutlined className="text-2xl text-themeBlue bg-bgG p-2 rounded-full" />
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
        <div className="w-[70%] mb-6 p-4 flex flex-col rounded-2xl bg-white">
          <h1 className="px-2 pb-3 text-xl font-bold text-themeG">訂單詳情</h1>
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
        <form onSubmit={(e) => checkout(e)} className="w-[70%]">
          <div className=" mb-6 p-4 flex flex-col rounded-2xl bg-white">
            <h1 className="px-2 pb-3 text-xl font-bold text-themeG">
              訂購人資料
            </h1>
            <hr />
            <div className="flex flex-col m-4 text-base">
              <label htmlFor="lastName" className="my-2 font-bold">
                姓氏
              </label>
              <div className="mb-3 flex flex-col">
                <input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="bg-gray-200 rounded-lg p-2"
                />
                {isError && !lastName ? (
                  <div className="text-red-600 text-base">
                    <i class="fa-solid fa-triangle-exclamation pr-1"></i>
                    <span className="text-red-600 text-base">請輸入姓氏</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <label htmlFor="firstName" className="my-2 font-bold">
                名字
              </label>
              <div className="mb-3 flex flex-col">
                <input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="bg-gray-200 rounded-lg p-2 mb-3"
                />
                {isError && !firstName ? (
                  <div className="text-red-600 text-base">
                    <i class="fa-solid fa-triangle-exclamation pr-1"></i>
                    <span>請輸入名字</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <label htmlFor="phone" className="my-2 font-bold">
                手機號碼
              </label>
              <div className="mb-3 flex flex-col">
                <input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="bg-gray-200 rounded-lg p-2 mb-3"
                />
                {isError && !phone ? (
                  <div className="text-red-600 text-base">
                    <i class="fa-solid fa-triangle-exclamation pr-1"></i>
                    <span className="text-red-600 text-base">
                      請輸入手機號碼
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <label htmlFor="email" className="my-2 font-bold">
                電子信箱
              </label>
              <div className="mb-3 flex flex-col">
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="bg-gray-200 rounded-lg p-2 mb-3"
                />
                {isError && !email ? (
                  <div className="text-red-600 text-base">
                    <i class="fa-solid fa-triangle-exclamation pr-1"></i>
                    <span className="text-red-600 text-base">
                      請輸入電子信箱
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="mb-6 p-4 flex flex-col rounded-2xl bg-white">
            <h1 className="px-2 pb-3 text-xl font-bold text-themeG">
              付款方式
            </h1>
            <hr />
            <div className="flex flex-col my-5 mx-2 text-lg">
              {payMethods.map((item) => (
                <Checkbox
                  type="circle"
                  checked={payment === item.value}
                  onChange={() => setPayment(item.value)}
                >
                  <div className="my-4">
                    <span className="px-2">{item.label}</span>
                  </div>
                </Checkbox>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => {
                changePage("/cart");
              }}
              className="py-2 px-3 text-xl font-bold rounded-xl bg-bgBlue text-themeBlue cursor-pointer"
            >
              回上一頁
            </button>
            <button className="py-2 px-3 text-xl font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer">
              確定結帳
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Booking;
