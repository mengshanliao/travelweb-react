import { useState } from "react";
import { useTicketStore } from "@/store/ticket";

const LikeTicket = ({ id }) => {
  const { ticketLike, setTicketLike } = useTicketStore(); //存入localStorage
  const isLike = ticketLike.some((ticketId) => ticketId === id);
  const [likeStatus, setLikeStatus] = useState(isLike); //點擊後狀態

  const handleLike = () => {
    // 頁面狀態
    setLikeStatus(!likeStatus);
    // 儲存庫
    if (!likeStatus) {
      //收藏
      const newTicketLike = [...ticketLike, id];
      setTicketLike(newTicketLike);
    } else {
      //不要收藏
      const newTicketLike = ticketLike.filter((ticketId) => ticketId === id);
      setTicketLike(newTicketLike);
    }
  };

  return (
    <div onClick={handleLike}>
      {likeStatus ? (
        <i className="fa-solid fa-heart text-themeRed"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </div>
  );
};

export default LikeTicket;
