import { useState } from "react";
import { usePostStore } from "@/store/post";

const CollectIcon = ({ id }) => {
  const { collection, setCollection } = usePostStore(); //存入localStorage
  const isCollect = collection.some((postId) => postId === id);
  const [collectStatus, setCollectStatus] = useState(isCollect); //點擊後狀態

  const handleCollect = () => {
    // 頁面狀態
    setCollectStatus(!collectStatus);

    // 儲存庫
    if (!collectStatus) {
      //收藏
      const newCollection = [...collection, id];
      setCollection(newCollection);
    } else {
      //不要收藏
      const newCollection = collection.filter((postId) => postId !== id);
      setCollection(newCollection);
    }
  };

  return (
    <div onClick={handleCollect}>
      {collectStatus ? (
        <i className="fa-solid fa-bookmark text-yellow-500"></i>
      ) : (
        <i className="fa-regular fa-bookmark"></i>
      )}
    </div>
  );
};
export default CollectIcon;
