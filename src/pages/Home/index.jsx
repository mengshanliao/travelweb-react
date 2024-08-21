import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postApi } from "@/api/post";
import { ticketApi } from "@/api/ticket";
import { cityApi } from "@/api/city";
import CityCard from "@/components/CityCard";
import PostCard from "@/components/PostCard";
import TicketCard from "@/components/TicketCard";
import AuthorCard from "@/components/AuthorCard";
import { usePostStore } from "@/store/post";
import { useTicketStore } from "@/store/ticket";
import { useTranslation } from "react-i18next";
import { authorApi } from "@/api/author";
import { Carousel } from "antd";
import { scrollToTop } from "@/utils/scroll";

const navList1 = [
  {
    id: 1,
    name: "start",
    changePage: "/my-new-trip",
  },
  {
    id: 2,
    name: "order",
    changePage: "/order",
  },
];
const navList2 = [
  {
    id: "cities",
    name: "city",
  },
  {
    id: "tickets",
    name: "ticket",
  },
  {
    id: "authors",
    name: "author",
  },
  {
    id: "posts",
    name: "memories",
  },
];

const Home = () => {
  const { storagePosts, setStoragePosts, storageAuthors, setStorageAuthors } =
    usePostStore(); //存入localStorage
  const { storageTickets, setStorageTickets, storageCities, setStorageCities } =
    useTicketStore();

  const [posts, setPosts] = useState(storagePosts);
  const [tickets, setTickets] = useState(storageTickets);
  const [authors, setAuthors] = useState(storageAuthors);
  const [cities, setCities] = useState(storageCities);
  const { t } = useTranslation();

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
  //author setting
  const getAuthors = async () => {
    const { code, data } = await authorApi.getAuthors();
    if (code === 200) {
      setAuthors(data);
      setStorageAuthors(data);
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
      setStorageCities(data);
    }
  };

  //offsetTop
  const scrollToTarget = (id) => {
    const target = document.querySelector(`#${id}`);
    window.scrollTo({
      top: target.offsetTop - 130,
      behavior: "smooth",
    });
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
    getAuthors();
    scrollToTop();
  }, []);

  const carouselImages = [
    "https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1468546211010-9a842bd2026e?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495819427834-1954f20ebb97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599173704879-2e407aa34cde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1671372954216-a1ed945642cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVqaXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1486533803613-e0ce3d009238?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554058501-f6872d688003?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546385040-d48180ede560?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1714022836/photo/bukchon-hanok-village-with-seoul-city-skyline-cityscape-south-korea.jpg?s=612x612&w=0&k=20&c=nB0CLaOdDiiOtFIkoZKPwLoFqHY7OJ9uIf77lMNaeTU=",
  ];

  return (
    <>
      <ul className="mx-24 my-6 flex justify-around text-lg text-gray-400 font-medium">
        {navList1.map((list) => (
          <li
            key={list.id}
            className="cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out"
            onClick={() => {
              changePage(list.changePage);
            }}
          >
            {t(list.name)}
          </li>
        ))}
        {navList2.map((list) => (
          <li
            key={list.id}
            onClick={() => scrollToTarget(list.id)}
            className=" cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            {t(list.name)}
          </li>
        ))}
      </ul>

      <Carousel autoplay autoplaySpeed={4000} speed={3000}>
        {carouselImages.map((image, idx) => (
          <div key={idx}>
            <img
              className="mx-auto w-[85%] h-[500px] rounded object-cover"
              src={image}
              alt="carousel-images"
            />
          </div>
        ))}
      </Carousel>

      <div className="w-[70%] mx-auto min-w-[1000px]">
        <section id="cities" className="my-8">
          <h3 className="flex justify-center text-[27px] mb-6 font-medium text-themeG">
            {t("city")}
          </h3>
          <div className="flex justify-center">
            {cities.map((city) => (
              <div key={city.id}>
                <CityCard
                  id={city.id}
                  key={city.cityKey}
                  title={city.title}
                  cityKey={city.key}
                  image={city.image}
                  onClick={() => changePage(`/cities/${city.cityKey}`)}
                />
              </div>
            ))}
          </div>
        </section>
        <section id="tickets" className="my-12">
          <h3 className="mb-5 flex items-center text-[26px] font-medium  text-themeG">
            <i className="fa-solid fa-ticket pr-2"></i>
            {t("ticket")}
          </h3>
          <div className="flex flex-wrap items-center -mx-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="w-1/4 px-2 mb-4">
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
              </div>
            ))}
          </div>
        </section>
        <section id="authors" className="my-12">
          <h3 className="mb-2 flex items-center text-[26px] font-medium  text-themeG">
            <i className="fa-solid fa-person-walking-luggage pr-2"></i>
            {t("author")}
          </h3>
          <div className="flex flex-wrap items-center -mx-2">
            {authors.map((author) => (
              <div key={author.id} className="w-1/3 px-2 mb-2">
                <AuthorCard
                  id={author.id}
                  key={author.id}
                  desc={author.desc}
                  avatar={author.avatar}
                  name={author.name}
                  isFollow={author.isFollow}
                  onClick={() =>
                    changePage(
                      `/trip/${author.name.replace(" ", "").toLowerCase()}`
                    )
                  }
                />
              </div>
            ))}
          </div>
        </section>
        <section id="posts" className="my-12">
          <h3 className="mb-6 flex items-center text-[26px] font-medium  text-themeG">
            <i className="fa-solid fa-umbrella-beach pr-2"></i>
            {t("memories")}
          </h3>
          <div className="flex flex-wrap items-center">
            {posts.map((post) => (
              <div key={post.id}>
                <PostCard
                  id={post.id}
                  authorId={post.authorId}
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
