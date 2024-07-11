const NewTrip = () => {
  return (
    <div className="bg-bgBlue flex justify-center">
      <div className="w-[85%] h-[900px] py-12 flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-themeBlue font-semibold text-2xl">
            <i class="fa-solid fa-signs-post p-2"></i>
            開始我的記憶庫
          </h1>
          <button
            onClick={() => {
              changePage("/cart");
            }}
            class="w-[100px] py-2 text-xl font-bold rounded-xl bg-bgBlue text-themeBlue cursor-pointer"
          >
            發布文章
          </button>
        </div>

        <div className="flex flex-col my-3">
          <input
            type="text"
            placeholder="標題"
            className="p-3 m-4 text-lg rounded-lg"
          />
          <input
            type="textarea"
            placeholder="今天想寫些甚麼..."
            className="p-3 m-4 text-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default NewTrip;
