import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization:
      "Client-ID 8697a5426eff67bdbbdff778e5224d83ef7aec385b25f5c284ef2ca2d27ca290"
  }
});
