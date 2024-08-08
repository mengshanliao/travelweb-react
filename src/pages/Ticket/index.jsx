import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTicketStore } from "@/store/ticket";
import { useUserStore } from "@/store/user";
import { useParams } from "react-router-dom";
import OptionCard from "@/components/OptionCard";
import CommentCard from "@/components/CommentCard";
import LikeTicket from "@/components/LikeTicket";

import { formatDateTW } from "@/utils/time";
import clsx from "clsx";

const Ticket = (isLike) => {
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
    <div className="m-6 min-w-[1000px] w-[80%] mx-auto">
      <img
        src={ticket.cover}
        alt=""
        className="mb-4 w-full h-[380px] object-cover"
      />
      <h1 className="mb-4 text-[27px] font-semibold">{ticket.title}</h1>
      <div className="mb-4">
        {ticket.tags.map((tag) => (
          <span
            key={tag}
            className="mr-2 p-1 text-base rounded bg-bgRed text-themeRed"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mr-2 mb-4 text-lg flex flex-col">
        <div className=" text-yellow-500 flex items-center">
          <p className="mr-1 font-bold">4.5</p>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke"></i>
          <span className="ml-2 text-gray-400 ">(1600)</span>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <p className=" text-gray-500">
            {ticket.sold} <span className="text-sm">人參加過</span>
          </p>
          <span className="text-3xl hover:text-themeRed cursor-pointer">
            <LikeTicket id={id} isLike={isLike} />
          </span>
        </div>
      </div>
      <hr />
      <i className="fa-solid fa-angles-right pr-2 my-6"></i>
      <span className="w-3/4 text-2xl font-medium">方案選擇</span>
      <div className="p-1 text-base">
        {ticket.dates.map((date) => (
          <span
            key={date}
            onClick={() => setSelectedTime(date)}
            className={clsx(
              {
                "border-2 border-themeRed text-themeRed": date === selectedTime,
              },
              "mr-3 py-1 px-3 border border-solid border-black cursor-pointer rounded-lg hover:bg-bgRed hover:border-themeRed hover:text-themeRed"
            )}
          >
            {formatDateTW(date)}
          </span>
        ))}
      </div>
      <div className="my-6">
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
      <div className="w-[60%] my-6 flex justify-between">
        <button
          onClick={() => {
            changePage("/");
          }}
          className="p-2 text-lg font-bold rounded-lg bg-bgG text-themeG cursor-pointer hover:shadow-lg"
        >
          回上一頁
        </button>
        <button
          onClick={addToCart}
          className="p-2 text-lg font-bold rounded-lg bg-bgRed text-themeRed cursor-pointer hover:shadow-lg"
        >
          加入購物車
        </button>
      </div>
      <hr />
      <i className="fa-solid fa-angles-right pr-2 my-6"></i>
      <span className="text-2xl font-medium">活動詳情</span>
      <div className="w-[60%]">
        <p>{ticket.desc}</p>
        <img src={ticket.descImg} alt="" className="my-9 h-[320px]" />
      </div>
      <hr />
      <i className="fa-solid fa-angles-right pr-2 my-6"></i>
      <span className="text-2xl font-medium">最新評價</span>
      <div className=" text-yellow-500 flex items-center text-xl ">
        <p className="mr-1 font-bold">4.5</p>
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star-half-stroke"></i>
        <span className="ml-2 text-gray-400 ">(1600)</span>
      </div>
      <div className="w-[60%] flex flex-col">
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
