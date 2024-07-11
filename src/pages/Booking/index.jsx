import { useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";

const Booking = () => {
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };
  return (
    <div className="flex flex-col justify-center py-14 bg-[#0022431b]">
      <div className="mb-4 px-4 py-2">
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
      <div>
        <div className="my-6 flex flex-col items-center justify-center">
          <div className="w-3/4 mb-6 p-4 flex flex-col rounded-2xl bg-white">
            <h1 className="px-2 pb-3 text-xl font-bold ">訂單詳情</h1>
            <hr />
            <div className=" flex justify-between items-center mx-1 text-lg">
              <div className="flex items-center m-2">
                <img
                  src="https://images.unsplash.com/photo-1553451632-28b8ac857d86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRva3lvJTIwZGlzbmV5fGVufDB8fDB8fHww"
                  alt=""
                  className="w-16 h-16 rounded-lg"
                />
                <div className="px-6">
                  <h1 className="font-medium">東京迪士尼樂園一日護照</h1>
                  <h3 className="text-sm text-gray-500">兌換期內皆適用</h3>
                  <h3 className="text-sm text-gray-500">2024年7月24日 11:20</h3>
                </div>
              </div>
              <div className="px-6 text-xl font-medium">
                <span className="px-20">5張</span>
                <span className="">NT$3600</span>
              </div>
            </div>
          </div>
          <div className="w-3/4 mb-6 p-4 flex flex-col rounded-2xl bg-white">
            <h1 className="px-2 pb-3 text-xl font-bold ">訂購人資料</h1>
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
            <h1 className="px-2 pb-3 text-xl font-bold ">付款方式</h1>
            <hr />
            <div className="flex flex-col my-5 mx-2 text-lg">
              <div className="my-4">
                <i class="fa-regular fa-circle"></i>
                <span className="px-2">信用卡/簽帳金融卡</span>
              </div>
              <div className="my-4">
                <i class="fa-regular fa-circle"></i>
                <span className="px-2">LINE Pay</span>
              </div>
              <div className="my-4">
                <i class="fa-regular fa-circle"></i>
                <span className="px-2">超商繳費</span>
              </div>
            </div>
          </div>
          <div className="w-3/4 flex justify-between">
            <button
              onClick={() => {
                changePage("/cart");
              }}
              class="py-2 px-3 text-xl font-bold rounded-xl bg-bgBlue text-themeBlue cursor-pointer"
            >
              回上一頁
            </button>
            <button
              onClick={() => {
                changePage("/complete-order");
              }}
              class="py-2 px-3 text-xl font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer"
            >
              確定結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Booking;
