import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "e4bf683378ac488090bc51d13526abca" },
});
