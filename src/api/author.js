import axios from "axios";

export const authorApi = {
  getAuthors: async () => {
    const { data } = await axios.get("/mock/authors");
    return { data: data.data, code: data.code };
  },
};
