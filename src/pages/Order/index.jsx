import { useUserStore } from "@/store/user";
import OrderCard from "@/components/OrderCard";
import { useEffect } from "react";
import { scrollToTop } from "@/utils/scroll";
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t } = useTranslation();
  const { order } = useUserStore();
  console.log(order);

  useEffect(() => scrollToTop(), []);

  return (
    <div className="w-[70%] mx-auto m-8">
      <div className="text-themeG my-4 font-medium text-2xl flex items-center">
        <h3 className="pr-2">
          <i className="fa-solid fa-table-list pr-2" />
          {t("allOrder")}
        </h3>
        <span>({order.length})</span>
      </div>
      {order.map((order) => (
        <OrderCard
          id={order.id}
          key={order.id}
          lastName={order.lastName}
          firstName={order.firstName}
          phone={order.phone}
          payment={order.payment}
          email={order.email}
          order={order.order}
          total={order.total}
        />
      ))}
    </div>
  );
};
export default Order;
