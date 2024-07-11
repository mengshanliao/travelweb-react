import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postApi } from "@/api/post";
import { ticketApi } from "@/api/ticket";
import CityCard from "@/components/CityCard";
import PostCard from "@/components/PostCard";
import TicketCard from "@/components/TicketCard";

const cityData = [
  {
    cityKey: "japan",
    title: "日本",
    image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFufGVufDB8fDB8fHww",
  },
  {
    cityKey: "korea",
    title: "韓國",
    image:
      "https://images.unsplash.com/photo-1597552571860-136a103d5eb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNlb3VsfGVufDB8fDB8fHww",
  },
  {
    cityKey: "thailand",
    title: "泰國",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    cityKey: "taipei",
    title: "台北",
    image:
      "https://images.unsplash.com/photo-1572715381359-002b1eabd56b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MTAxfGVufDB8fDB8fHww",
  },
  {
    cityKey: "tainan",
    title: "台南",
    image:
      "https://images.unsplash.com/photo-1621315892013-f32af7358947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFpbmFufGVufDB8fDB8fHww",
  },
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };

  //post setting
  const getPosts = async () => {
    const { code, data } = await postApi.getPosts();
    if (code === 200) {
      setPosts(data);
    }
  };

  //ticket setting
  const getTickets = async () => {
    const { code, data } = await ticketApi.getTickets();
    if (code === 200) {
      setTickets(data);
    }
  };

  //useEffect
  useEffect(() => {
    getPosts();
    getTickets();
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
        {cityData.map((data) => (
          <CityCard
            key={data.cityKey}
            title={data.title}
            cityKey={data.key}
            image={data.image}
            onClick={() => changePage(`/cities/${data.cityKey}`)}
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
            key={post.id}
            cover={post.cover}
            tags={post.tags}
            title={post.title}
            desc={post.desc}
            avatar={post.avatar}
            name={post.name}
            createdAt={post.createdAt}
            onClick={() => changePage(`/post/${post.id}`)}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
