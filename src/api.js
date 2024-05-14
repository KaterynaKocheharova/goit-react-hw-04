import axios from "axios";

export default async function getImages({ query }) {
  const BASE_URL = "https://api.unsplash.com/";
  const endpoint = "/search/photos";
  const response = await axios.get(
    `${BASE_URL}${endpoint}?query=${query}&&client_id=EHCNLl4TFox6GXcyfqcsUAoNkewaV3JBBTw-e4_oEiE`
  );
  console.log(response.data);
  return response.data;
}
