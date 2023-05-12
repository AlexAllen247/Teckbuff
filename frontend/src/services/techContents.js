import axios from "axios";

const baseUrl = "/api/techcontents";

const techContentService = {
  getAll: async () => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      throw error;
    }
  },
};

export default techContentService;
