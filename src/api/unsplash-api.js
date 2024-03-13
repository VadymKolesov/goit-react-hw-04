import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers = {
  Authorization: "Client-ID G3MqBSO21_KDHwIFQ9sxPH7e-FnQAY8j4Rc70cks9Fg",
};

export default async function getPhotosByQuery(searchQuery, page) {
  const response = await axios.get("search/photos", {
    params: {
      query: searchQuery,
      per_page: 9,
      page,
    },
  });

  return response.data.results;
}
