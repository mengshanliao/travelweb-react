import { formatDateTW } from "@/utils/time";

const OrderCard = ({
  id,
  firstName,
  lastName,
  phone,
  payment,
  email,
  order,
  total,
}) => {
  return (
    <div className="mb-8 py-4 px-6 bg-bgG rounded-md">
      <p className="mb-4 font-semibold text-lg">訂單編號 {id}</p>
      <div className="flex flex-col justify-center bg-white rounded-lg">
        {order.map((order) => (
          <div className="">
            <div className="m-3">
              <span className="mr-4 text-gray-500">訂單內容</span>
              <span>{order.title}</span>
            </div>
            <div className="m-3">
              <span className="mr-4 text-gray-500">使用日期</span>
              <span>{formatDateTW(order.time)}</span>
            </div>
            <div className="m-3">
              <span className="mr-4 text-gray-500">訂單金額</span>
              <span>{order.price}</span>
            </div>
            <div className="m-3">
              <span className="mr-4 text-gray-500">門票張數</span>
              <span>{order.quantity} 張</span>
            </div>
            <hr className="mt-2 mx-2" />
          </div>
        ))}
        <div className="m-4 text-themeRed font-bold text-lg">
          <span className="mr-6 text-gray-500">總金額</span>
          <span>{total}</span>
        </div>
      </div>
      <p className="my-4 font-semibold text-lg">訂購人資料</p>
      <div className=" bg-white rounded-md">
        <div className="p-3">
          <span className="mr-4 text-gray-500">訂購姓名</span>
          <span>
            {lastName}
            {firstName}
          </span>
        </div>
        <div className="p-3">
          <span className="mr-4 text-gray-500">訂購電話</span>
          <span>{phone}</span>
        </div>
        <div className="p-3">
          <span className="mr-4 text-gray-500">訂購信箱</span>
          <span>{email}</span>
        </div>
        <div className="p-3">
          <span className="mr-4 text-gray-500">付款方式</span>
          <span>{payment}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
