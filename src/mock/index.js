import Mock from "mockjs";
import posts from "./data/posts.json";
import tickets from "./data/tickets.json";
import cities from "./data/cities.json";
import authors from "./data/authors.json";

Mock.mock("/mock/posts", {
  code: 200,
  data: posts,
});

Mock.mock("/mock/tickets", {
  code: 200,
  data: tickets,
});

Mock.mock("/mock/cities", {
  code: 200,
  data: cities,
});
Mock.mock("/mock/authors", {
  code: 200,
  data: authors,
});
