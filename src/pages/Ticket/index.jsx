import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTicketStore } from "@/store/ticket";
import { useUserStore } from "@/store/user";
import { useParams } from "react-router-dom";
import OptionCard from "@/components/OptionCard";
import CommentCard from "@/components/CommentCard";
import { formatDateTW } from "@/utils/time";
import clsx from "clsx";

const Ticket = () => {
  const { storageTickets } = useTicketStore();
  const { cart, setCart } = useUserStore();
  const { id } = useParams();
  const ticket = storageTickets.find((ticket) => ticket.id === Number(id));
  const [selectedTime, setSelectedTime] = useState(ticket.dates[0]);
  const [selectedOption, setSelectedOption] = useState(ticket.detail[0].id);

  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };
  const addToCart = () => {
    const product = {
      id: Math.floor(Math.random() * 1000),
      time: selectedTime,
      title: ticket.detail.find((item) => item.id === selectedOption).title,
      price: ticket.detail.find((item) => item.id === selectedOption).price,
      quantity: 1,
    };
    setCart([...cart, product]);
    navigate("/cart");
  };

  return (
    <div className="mx-20 my-12">
      <img
        src={ticket.cover}
        alt=""
        className="mb-4 w-full h-[420px] object-cover"
      />
      <h1 className="mx-2 mb-4 text-[27px] font-semibold">{ticket.title}</h1>
      <div className="mb-4">
        {ticket.tags.map((tag) => (
          <span
            key={tag}
            className="m-2 p-1 text-base rounded bg-bgRed text-themeRed"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mx-2 mb-4 text-lg flex flex-col">
        <div className=" text-yellow-500 flex items-center ">
          <p className="mr-1 font-bold">4.5</p>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke"></i>
          <span className="ml-2 text-gray-400 ">(1600)</span>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <p className=" text-gray-500">{ticket.sold} 人參加過</p>
          <i className="fa-regular fa-heart text-3xl hover:text-themeRed cursor-pointer" />
        </div>
      </div>
      <hr />
      <i className="fa-solid fa-angles-right mt-8 py-5 px-2"></i>
      <span className="w-3/4 text-2xl font-medium">方案選擇</span>
      <div className="mb-4">
        <div className="mt-4 p-1 text-base">
          {ticket.dates.map((date) => (
            <span
              key={date}
              onClick={() => setSelectedTime(date)}
              className={clsx(
                {
                  "border-2 border-themeRed text-themeRed":
                    date === selectedTime,
                },
                "mr-3 py-1 px-3 border border-solid border-black cursor-pointer rounded-lg hover:bg-bgRed hover:border-themeRed hover:text-themeRed"
              )}
            >
              {formatDateTW(date)}
            </span>
          ))}
        </div>
        {ticket.detail.map((item) => (
          <OptionCard
            onClick={() => setSelectedOption(item.id)}
            className={clsx({
              "border-2 border-themeRed text-themeRed":
                item.id === selectedOption,
            })}
            key={item.id}
            title={item.title}
            tags={item.tags}
            drawer={item.drawer}
            price={item.price}
          />
        ))}
      </div>
      <div className="w-3/4 my-10 flex justify-between">
        <button
          onClick={() => {
            changePage("/");
          }}
          className="py-2 px-5 text-lg font-bold rounded-lg bg-bgBlue text-themeBlue cursor-pointer"
        >
          回上一頁
        </button>
        <button
          onClick={addToCart}
          className="py-2 px-5 text-lg font-bold rounded-lg bg-[#cd333339] text-[#cd3333] cursor-pointer"
        >
          加入購物車
        </button>
      </div>
      <hr />
      <i className="fa-solid fa-angles-right mt-8 py-5 px-2"></i>
      <span className="w-3/4 text-2xl font-medium">活動詳情</span>
      <div className="w-3/4 mt-3">
        <p>{ticket.desc}</p>
        <img src={ticket.descImg} alt="" className="my-9 h-[320px]" />
      </div>
      <hr />
      <i className="fa-solid fa-angles-right mt-8 py-5 px-2"></i>
      <span className="w-3/4 text-2xl font-medium">最新評價</span>
      <div className="mx-7 text-yellow-500 flex items-center text-xl ">
        <p className="mr-1 font-bold">4.5</p>
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star-half-stroke"></i>
        <span className="ml-2 text-gray-400 ">(1600)</span>
      </div>
      <div className="w-2/3 mx-7 mt-6 my-20 flex flex-col">
        {ticket.comments.map((comment) => (
          <CommentCard
            key={comment.id}
            name={comment.name}
            avatar={comment.avatar}
            message={comment.message}
            createdAt={comment.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Ticket;
