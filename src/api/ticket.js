import axios from "axios";

export const ticketApi = {
  getTickets: async () => {
    const { data } = await axios.get("/mock/tickets");
    return { data: data.data, code: data.code };
  },
};
