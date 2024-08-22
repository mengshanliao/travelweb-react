import { formatDateTW } from "@/utils/time";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className="mb-8 py-4 px-6 bg-bgG rounded-md">
      <p className="mb-4 font-semibold text-lg">
        {t("orderNumber")} {id}
      </p>
      <div className="flex flex-col justify-center bg-white rounded-lg">
        {order.map((order) => (
          <div className="">
            <div className="m-3">
              <span className="mr-4 text-gray-500">{t("orderContent")}</span>
              <span>{order.title}</span>
            </div>
            <div className="m-3">
              <span className="mr-4 text-gray-500">{t("usageDate")}</span>
              <span>{formatDateTW(order.time)}</span>
            </div>
            <div className="m-3">
              <span className="mr-4 text-gray-500">{t("orderAmount")}</span>
              <span>{order.price}</span>
            </div>
            <div className="m-3">
              <span className="mr-4 text-gray-500">{t("quantity")}</span>
              <span>{order.quantity} 張</span>
            </div>
            <hr className="mt-2 mx-2" />
          </div>
        ))}
        <div className="m-4 text-themeRed font-bold text-lg">
          <span className="mr-6 text-gray-500">{t("total")}</span>
          <span>{total}</span>
        </div>
      </div>
      <p className="my-4 font-semibold text-lg">{t("orderInfo")}</p>
      <div className=" bg-white rounded-md">
        <div className="p-3">
          <span className="mr-4 text-gray-500">{t("name")}</span>
          <span>
            {lastName}
            {firstName}
          </span>
        </div>
        <div className="p-3">
          <span className="mr-4 text-gray-500">{t("phone")}</span>
          <span>{phone}</span>
        </div>
        <div className="p-3">
          <span className="mr-4 text-gray-500">{t("email")}</span>
          <span>{email}</span>
        </div>
        <div className="p-3">
          <span className="mr-4 text-gray-500">{t("payment")}</span>
          <span>{payment}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
