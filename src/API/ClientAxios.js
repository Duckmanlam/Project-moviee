import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://vanlanggo.com/",
  timeout: 30000,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // Handle token here ...
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosClient.interceptors.response.use(
  (res) => {
    // console.log("🚀 ~ file: ClientAxios.js ~ line 30 ~ res", res);
    if (res?.data) return res.data;

    return res;
  },
  (err) => {
    // Handle error
    // console.log(err);
    //window.location.href = "/login";
    return Promise.reject(err);
  },
);

export default axiosClient;
