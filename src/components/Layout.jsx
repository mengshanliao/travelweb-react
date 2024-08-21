import { Modal, message } from "antd";
import { useState } from "react";
import { userApi } from "@/api/user";
import { useUserStore } from "@/store/user";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Layout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    token,
    setToken,
    cart,
    isDarkTheme,
    setIsDarkTheme,
    language,
    setLanguage,
  } = useUserStore();

  const languageList = {
    zh: "zh_TW",
    en: "en_US",
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const changePage = (url) => {
    navigate(url);
  };
  //
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
      <div
        className={clsx(
          { darkMode: isDarkTheme },
          "flex flex-col min-h-screen"
        )}
      >
        <header className="px-4 flex items-center bg-white justify-between h-[110px] shadow-lg sticky top-0 z-40">
          <div onClick={() => changePage("/")} className="mx-2 cursor-pointer">
            <h1 className="flex text-4xl  text-themeG">
              Let's Create
              <i className="fa-solid fa-feather-pointed ml-3 text-4xl" />
            </h1>
            <h2 className="mt-1 text-4xl text-lightG">
              Your Travels & Memories
            </h2>
          </div>
          <ul className="flex justify-between items-center text-xl font-medium text-themeG">
            <li className="mr-2 px-2 py-1 rounded-3xl hover:bg-bgColor cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out">
              {language === languageList.zh ? (
                <div
                  className="flex items-center"
                  onClick={() => changeLanguage(languageList.en)}
                >
                  <i className="fa-solid fa-globe p-1"></i>
                  <p className="text-base">EN</p>
                </div>
              ) : (
                <div
                  className="flex items-center"
                  onClick={() => changeLanguage(languageList.zh)}
                >
                  <i className="fa-solid fa-globe p-1"></i>
                  <p className="text-base">繁中</p>
                </div>
              )}
            </li>
            <li className="mr-2 px-3 py-1 rounded-3xl hover:bg-bgColor cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out">
              <div
                onClick={() => {
                  setIsDarkTheme(!isDarkTheme);
                  message.success(`${!isDarkTheme ? "暗黑模式" : "明亮模式"}`);
                }}
              >
                {!isDarkTheme ? (
                  <div>
                    <i className="fa-regular fa-moon" />
                  </div>
                ) : (
                  <i className="fa-solid fa-moon" />
                )}
              </div>
            </li>
            <li
              onClick={() => changePage("/cart")}
              className="mr-2 px-3 py-1 rounded-3xl hover:bg-bgColor cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
            >
              <div className="relative w-6">
                <i className="fa-solid fa-cart-shopping"></i>
                {cart.length ? (
                  <span className="absolute bg-themeRed block -top-3 -right-3 w-5 h-5 rounded-full">
                    <span className="absolute text-sm text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {cart.length}
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </li>
            <li
              onClick={() => changePage("/my-trip")}
              className="mr-2 px-3 py-1 rounded-3xl hover:bg-bgColor cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
            >
              <i className="fa-solid fa-user"></i>
            </li>
            {token ? (
              <li
                onClick={logout}
                className="mr-2 p-2 rounded-3xl hover:bg-bgColor cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                {t("logout")}
              </li>
            ) : (
              <li
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="mr-2 p-2 rounded-3xl hover:bg-bgColor cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                {t("login")}
              </li>
            )}
          </ul>
        </header>

        <div className="flex-1">
          <Outlet />
        </div>
        <footer className="flex justify-center p-4 text-3xl">Follow Us</footer>
      </div>

      <Modal
        title={t("login")}
        open={isModalOpen}
        onOk={login}
        onCancel={() => {
          handleCancel(false);
        }}
      >
        <div className="flex flex-col text-base">
          <div className="mt-4 flex items-center">
            <label htmlFor="username" className="w-[100px] text-right">
              {t("username")} :
            </label>
            <input
              className="bg-gray-200 rounded-md focus:outline-none pl-2 py-1 mx-2"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <div className="mt-8 flex items-center text-right">
            <label htmlFor="password" className="w-[100px]">
              {t("password")} :
            </label>
            <input
              className="bg-gray-200 rounded-md focus:outline-none pl-2 py-1 mx-2"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
        </div>
      </Modal>

      <div>
        {!isDarkTheme ? (
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 right-8 w-10 h-10 border-2 border-themeG text-themeG border-solid rounded-full cursor-pointer hover:bg-amber-100"
          >
            <i className="fa-solid fa-arrow-up absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"></i>
          </div>
        ) : (
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 right-8 w-10 h-10 border-2 border-black border-solid text-black rounded-full cursor-pointer hover:bg-gray-400"
          >
            <i className="fa-solid fa-arrow-up absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"></i>
          </div>
        )}
      </div>
    </>
  );
};
export default Layout;
