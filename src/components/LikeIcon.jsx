import { useState } from "react";
import { usePostStore } from "@/store/post";

const LikeIcon = ({ isLike, id }) => {
  const { storagePosts, setStoragePosts } = usePostStore(); //存入localStorage
  const [likeStatus, setLikeStatus] = useState(isLike); //點擊後狀態

  const handleLike = () => {
    const newPosts = storagePosts.map((post) => {
      if (post.id === id) {
        post.isLike = !likeStatus;
        return post;
      }
      return post;
    });
    setStoragePosts(newPosts);
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

export default LikeIcon;
