import axios from "axios";

const Router = (method, endpoint, body) => {
  const URL = "http://localhost:3000";

  if (method === "GET" || method === "PUT" || method === "DELETE") {
    return axios({
      method,
      url: `${URL}/${endpoint}`,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  } else if (method === "POST" || method === "PATCH") {
    return axios({
      method,
      url: `${URL}/${endpoint}`,
      data: body,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
};

export default Router;
