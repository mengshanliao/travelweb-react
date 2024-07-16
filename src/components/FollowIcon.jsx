import { useState } from "react";
import { usePostStore } from "@/store/post";

const FollowIcon = ({ isFollow, id }) => {
  const { storagePosts, setStoragePosts } = usePostStore(); //存入localStorage
  const [followStatus, setFollowStatus] = useState(isFollow); //點擊後狀態

  const handleFollow = () => {
    const newFollow = storagePosts.map((post) => {
      if (post.id === id) {
        post.isFollow = !followStatus;
        return post;
      }
      return post;
    });
    setStoragePosts(newFollow);

    setFollowStatus(!followStatus);
  };

  return (
    <div onClick={handleFollow}>
      {followStatus ? (
        <span className="mx-5 px-3 py-1 text-base font-medium rounded-sm text-themeRed bg-bgRed cursor-pointer border border-solid border-themeRed">
          追蹤中
        </span>
      ) : (
        <span className="mx-5 px-3 py-1 text-base font-medium rounded-sm text-themeRed hover:bg-bgRed cursor-pointer border border-solid border-themeRed">
          追蹤
        </span>
      )}
    </div>
  );
};

export default FollowIcon;
