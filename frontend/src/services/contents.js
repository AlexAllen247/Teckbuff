import axios from "axios";

const baseUrl = "/api/contents";

const contentService = {
  getAll: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
};

export default contentService;
