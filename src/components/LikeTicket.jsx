import { useState } from "react";
import { useTicketStore } from "@/store/ticket";

const LikeTicket = ({ isLike, id }) => {
  const { storageTickets, setStorageTickets } = useTicketStore(); //存入localStorage
  const [likeStatus, setLikeStatus] = useState(isLike); //點擊後狀態

  const handleLike = () => {
    const newTickets = storageTickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.isLike = !likeStatus;
        return ticket;
      }
      return ticket;
    });
    setStorageTickets(newTickets);
    setLikeStatus(!likeStatus);
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
