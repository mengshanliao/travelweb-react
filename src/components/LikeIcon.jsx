import { useState } from "react";
import { usePostStore } from "@/store/post";

const LikeIcon = ({ id }) => {
  const { postLike, setPostLike } = usePostStore(); //存入localStorage
  const isLike = postLike.some((postId) => postId === id);
  const [likeStatus, setLikeStatus] = useState(isLike); //點擊後狀態

  const handleLike = () => {
    // 頁面狀態
    setLikeStatus(!likeStatus);

    // 儲存庫
    if (!likeStatus) {
      //收藏
      const newPostLike = [...postLike, id];
      setPostLike(newPostLike);
    } else {
      //不要收藏
      const newPostLike = postLike.filter((postId) => postId !== id);
      setPostLike(newPostLike);
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

export default LikeIcon;
