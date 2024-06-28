import Logo from "@/assets/images/quill.png";

const Layout = ({ children }) => {
  return (
    <div>
      <header class="flex justify-between items-center h-[120px] m-[20px] p-[10px]">
        <section>
          <h1 class="flex p-2 text-[2.5rem]">
            Let's Create
            <img
              src={Logo}
              alt="旅遊網logo"
              class="pl-[10px] w-[65px] h-[55px]"
            />
          </h1>
          <h2 class="p-2 text-[2.8rem]">Your Travels & Memories</h2>
        </section>
        <ul class="flex">
          <li class="mr-10 text-[1.5rem]">開始你的旅遊記憶庫</li>
          <li class="mr-10 text-[1.5rem]">登入</li>
          <li class="mr-10 text-[1.5rem]">
            <i class="fa-solid fa-globe"></i>
          </li>
          <li class="text-[1.5rem]">
            <i class="fa-solid fa-moon"></i>
          </li>
        </ul>
      </header>
      <div>{children}</div>
      <footer class="flex justify-center p-4 text-[2rem]">Follow Us</footer>
    </div>
  );
};
export default Layout;
