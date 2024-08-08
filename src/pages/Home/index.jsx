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
    console.log(data);
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
  }, []);

  const carouselImages = [
    "/src/assets/images/bg-image1.jpg",
    "/src/assets/images/bg-image2.jpg",
    "/src/assets/images/bg-image4.jpg",
    "/src/assets/images/bg-image5.jpg",
    "/src/assets/images/bg-image6.jpg",
  ];

  return (
    <>
      <ul className="mx-24 my-6 flex justify-around text-lg text-gray-400 font-medium">
        <li
          className="cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => {
            changePage("/my-new-trip");
          }}
        >
          {t("start")}
        </li>
        <li
          className="cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => {
            changePage("/order");
          }}
        >
          {t("order")}
        </li>
        <li className=" cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a href="#cities" className="scroll-smooth">
            {t("city")}
          </a>
        </li>
        <li className="cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a href="#tickets"> {t("ticket")}</a>
        </li>
        <li className="cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a href="#authors"> {t("author")}</a>
        </li>
        <li className="cursor-pointer hover:text-themeG hover:underline hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a href="#posts"> {t("memories")}</a>
        </li>
      </ul>

      <Carousel autoplay autoplaySpeed={4000} speed={3000}>
        {carouselImages.map((image, idx) => (
          <div key={idx}>
            <img
              className="mx-auto w-[85%] h-full rounded object-cover"
              src={image}
              alt="carousel-images"
            />
          </div>
        ))}
      </Carousel>

      <div className="w-[70%] mx-auto min-w-[1000px]">
        <section className="my-8">
          <h3
            id="cities"
            className="flex justify-center text-[27px] mb-6 font-medium text-themeG"
          >
            {t("city")}
          </h3>
          <div className="flex justify-center">
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
        </section>
        <section id="tickets" className="my-12">
          <h3 className="mb-5 flex items-center text-[26px] font-medium  text-themeG">
            <i className="fa-solid fa-ticket pr-2"></i>
            {t("ticket")}
          </h3>
          <div className="flex flex-wrap items-center -mx-4">
            {tickets.map((ticket) => (
              <div className="w-1/4 px-2 mb-4">
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
            <i class="fa-solid fa-person-walking-luggage pr-2"></i>
            {t("author")}
          </h3>
          <div className="flex flex-wrap items-center -mx-2">
            {authors.map((author) => (
              <div className="w-1/3 px-2 mb-2">
                <AuthorCard
                  id={author.id}
                  key={author.id}
                  desc={author.desc}
                  avatar={author.avatar}
                  name={author.name}
                  isFollow={author.isFollow}
                  onClick={() => changePage(`/trip/${author.name}`)}
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
              <div>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
