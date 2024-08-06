import { useState } from "react";
import { usePostStore } from "@/store/post";

const FollowIcon = ({ isFollow, id }) => {
  const { storagePosts, setStoragePosts, storageAuthors, setStorageAuthors } =
    usePostStore(); //存入localStorage
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
  const authorFollow = () => {
    const newAuthorFollow = storageAuthors.map((author) => {
      if (author.id === id) {
        author.isFollow = !followStatus;
        return author;
      }
      return author;
    });
    setStorageAuthors(newAuthorFollow);

    setFollowStatus(!followStatus);
  };

  return (
    <div onClick={(handleFollow, authorFollow)}>
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
