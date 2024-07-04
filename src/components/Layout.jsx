import { Modal, message } from "antd";
import { useState } from "react";
import { userApi } from "@/api/module";
import { useUserStore } from "@/store/user";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken } = useUserStore();

  const handleCancel = (bool) => {
    setIsModalOpen(bool);
  };

  const logout = () => {
    setToken("");
    message.success("登出成功");
  };

  const login = async () => {
    try {
      const { data, code } = await userApi.login(username, password);
      if (code === 200) {
        const { token } = data;
        setToken(token);
        message.success("登入成功");
        setIsModalOpen(false);
        setUsername("");
        setPassword("");
      }
      console.log(data);
    } catch {
      message.error("使用者名稱或密碼錯誤");
    }
  };

  return (
    <>
      <div>
        <header class="flex p-2 justify-between h-[110px] bg-white text-[#002143] shadow-lg">
          <section class="mx-2">
            <h1 class="flex text-4xl ">
              Let's Create
              <i class="fa-solid fa-feather-pointed ml-3 text-4xl" />
            </h1>
            <h2 class="mt-1 text-4xl">Your Travels & Memories</h2>
          </section>
          <ul class="flex justify-between items-center text-xl">
            {token ? (
              <li
                onClick={logout}
                class="mr-2 p-2 rounded-3xl hover:bg-[#00224340] cursor-pointer"
              >
                登出
              </li>
            ) : (
              <li
                onClick={() => {
                  setIsModalOpen(true);
                }}
                class="mr-2 p-2 rounded-3xl hover:bg-[#00224340] cursor-pointer"
              >
                登入
              </li>
            )}

            <li class="mr-2 px-3 py-1 rounded-3xl hover:bg-[#00224340] cursor-pointer">
              <i class="fa-solid fa-globe"></i>
            </li>
            <li class="mr-2 px-3 py-1 rounded-3xl hover:bg-[#00224340] cursor-pointer">
              <i class="fa-solid fa-moon"></i>
            </li>
            <li class="mr-2 px-3 py-1 rounded-3xl hover:bg-[#00224340] cursor-pointer">
              <i class="fa-solid fa-cart-shopping"></i>
            </li>
            <li class="mr-2 px-3 py-1 rounded-3xl hover:bg-[#00224340] cursor-pointer">
              <i class="fa-solid fa-bars"></i>
            </li>
          </ul>
        </header>

        <div>
          <Outlet />
        </div>
        <footer class="flex justify-center p-4 text-3xl">Follow Us</footer>
      </div>

      <Modal
        title="登入"
        open={isModalOpen}
        onOk={login}
        onCancel={() => {
          handleCancel(false);
        }}
      >
        <div class="flex flex-col text-base">
          <div class="mt-4 flex items-center">
            {" "}
            <label htmlFor="username">使用者名稱：</label>
            <input
              class="bg-gray-200 rounded-md focus:outline-none"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <div class="mt-8 flex items-center">
            <label htmlFor="password">密碼：</label>
            <input
              class="bg-gray-200 rounded-md focus:outline-none "
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
        </div>
      </Modal>
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-14 right-12 w-10 h-10 border-2 border-black border-solid rounded-full cursor-pointer hover:text-themeColor hover:border-themeColor"
      >
        <i class="fa-solid fa-arrow-up absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"></i>
      </div>
    </>
  );
};
export default Layout;
