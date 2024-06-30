const PostCard = ({
  id,
  title,
  label,
  postImg,
  postDesc,
  author,
  authorImg,
  postTime,
}) => {
  return (
    <section class="p-[30px] flex flex-wrap justify-center items-center">
      <div class=" w-[360px] m-5 overflow-hidden">
        <div class=" h-[300px] relative overflow-hidden cursor-pointer">
          <img class=" w-auto h-auto" src={postImg} />
        </div>
        <div class=" h-52 p-2">
          <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
            {label}
          </span>
          <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
            {label}
          </span>
          <span class="mr-2 mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
            {label}
          </span>
          <span class="mt-1 py-[2px] px-1 bg-gray-300 text-gray-600 text-[14px]">
            {label}
          </span>
          <h1 class="whitespace-nowrap overflow-hidden text-ellipsis my-3 mx-0 text-2xl font-extrabold">
            {title}
          </h1>
          <h3 class=" whitespace-nowrap overflow-hidden text-ellipsis mb-2 text-gray-600">
            {postDesc}
          </h3>
          <hr />
          <div class="flex items-center ">
            <img class="w-9 h-9 rounded-full" src={authorImg} alt="" />
            <div class=" p-[2px] m-1 ml-2 text-[23px] font-medium ">
              {author}
            </div>
          </div>
          <div class=" flex justify-between items-center ml-1">
            <span class="text-[18px] font-medium text-gray-700">
              {postTime}｜
            </span>
            <div class="text-[25px] ">
              <span class="mr-3">
                <i class="fa-regular fa-star"></i>
              </span>
              <span class="mr-3">
                <i class="fa-regular fa-heart"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
