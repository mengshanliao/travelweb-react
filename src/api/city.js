import axios from "axios";

export const cityApi = {
  getCities: async () => {
    const { data } = await axios.get("/mock/cities");
    return { data: data.data, code: data.code };
  },
};
