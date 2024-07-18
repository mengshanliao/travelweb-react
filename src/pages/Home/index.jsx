import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postApi } from "@/api/post";
import { ticketApi } from "@/api/ticket";
import { cityApi } from "@/api/city";
import CityCard from "@/components/CityCard";
import PostCard from "@/components/PostCard";
import TicketCard from "@/components/TicketCard";
import { usePostStore } from "@/store/post";
import { useTicketStore } from "@/store/ticket";

const Home = () => {
  const { storagePosts, setStoragePosts } = usePostStore(); //存入localStorage
  const { storageTickets, setStorageTickets } = useTicketStore();

  const [posts, setPosts] = useState(storagePosts);
  const [tickets, setTickets] = useState(storageTickets);
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  //post setting
  const getPosts = async () => {
    const { code, data } = await postApi.getPosts();
    if (code === 200) {
      setPosts(data);
      setStoragePosts(data);
    }
  };

  //ticket setting
  const getTickets = async () => {
    const { code, data } = await ticketApi.getTickets();
    if (code === 200) {
      setTickets(data);
      setStorageTickets(data);
    }
  };

  //city setting
  const getCities = async () => {
    const { code, data } = await cityApi.getCities();
    if (code === 200) {
      setCities(data);
    }
  };

  //useEffect
  useEffect(() => {
    if (!posts.length) {
      getPosts();
    }
    if (!tickets.length) {
      getTickets();
    }
    getCities();
  }, []);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            changePage("/my-new-trip");
          }}
          className="absolute z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-4 py-3 text-[22px] font-medium rounded-2xl bg-[#ffffffcc] text-[#002143] hover:text-white hover:bg-[#002143]"
        >
          開始我的旅遊記憶庫
        </button>
        <img
          src="/src/assets/images/lake拷貝2.jpg"
          alt=""
          className="my-1 w-full h-[320px] "
        />
        <div className="absolute z-10 w-full h-[320px] top-0 left-0 bg-[#0000002a]"></div>
      </div>

      <div className="flex justify-center mt-[60px]">
        {cities.map((city) => (
          <CityCard
            id={city.id}
            key={city.cityKey}
            title={city.title}
            cityKey={city.key}
            image={city.image}
            onClick={() => changePage(`/cities/${city.cityKey}`)}
          />
        ))}
      </div>

      <h2 className="flex p-2 m-6 mt-[50px] text-[27px] font-medium text-themeBlue">
        <i className="fa-solid fa-ticket"> 行程及門票</i>
      </h2>
      <section className="my-4 flex flex-wrap justify-center items-center">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            tags={ticket.tags}
            cover={ticket.cover}
            discount={ticket.discount}
            priceDiscount={ticket.priceDiscount}
            priceOrigin={ticket.priceOrigin}
            sold={ticket.sold}
            isLike={ticket.isLike}
            onClick={() => changePage(`/ticket/${ticket.id}`)}
          />
        ))}
      </section>

      <h2 className="flex p-2 m-6 text-[27px] mt-[50px] font-medium text-themeBlue">
        <i className="fa-solid fa-umbrella-beach"> 熱門記憶庫</i>
      </h2>
      <section className="my-12 flex flex-wrap justify-center p-2 items-center">
        {posts.map((post) => (
          <PostCard
            id={post.id}
            key={post.id}
            cover={post.cover}
            tags={post.tags}
            title={post.title}
            desc={post.desc}
            avatar={post.avatar}
            name={post.name}
            createdAt={post.createdAt}
            isLike={post.isLike}
            isFollow={post.isFollow}
            onClick={() => changePage(`/post/${post.id}`)}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
