import axios from "axios";

const baseUrl = "/api/portfolioitems";

const portfolioItemService = {
  getAll: async () => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch portfolio:", error);
      throw error;
    }
  },
};

export default portfolioItemService;
