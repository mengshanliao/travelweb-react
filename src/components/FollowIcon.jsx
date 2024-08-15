import { useState } from "react";
import { useUserStore } from "@/store/user";

const FollowIcon = ({ id }) => {
  const { followList, setFollowList } = useUserStore(); //存入localStorage
  const [followStatus, setFollowStatus] = useState(
    followList.some((followId) => followId === id)
  ); //點擊後狀態

  const handleClick = () => {
    if (followStatus) {
      const newFollowList = followList.filter((followId) => followId !== id);
      setFollowList(newFollowList);
    } else {
      const newFollowList = [...followList, id];
      setFollowList(newFollowList);
    }
    setFollowStatus(!followStatus);
  };

  return (
    <div onClick={handleClick}>
      {followStatus ? (
        <span className="px-2 py-1 text-sm font-medium rounded-sm text-themeRed bg-bgRed cursor-pointer border border-solid border-themeRed">
          追蹤中
        </span>
      ) : (
        <span className="px-2 py-1 text-sm font-medium rounded-sm text-themeRed hover:bg-bgRed cursor-pointer border border-solid border-themeRed">
          追蹤
        </span>
      )}
    </div>
  );
};

export default FollowIcon;
