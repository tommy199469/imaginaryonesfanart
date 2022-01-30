import { getLocalStorage } from "../utils";
import axios, { Method } from "axios";

require("dotenv").config();
const GET: Method = "GET";
const POST: Method = "POST";
const PUT: Method = "PUT";

const callApi = (
  method: Method,
  url: string,
  params: any = null,
  header = {}
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await getLocalStorage("token");
      axios({
        method: method,
        url: url,
        data: params,
        headers: {
          ...header,
          authentication: token || null,
        },
      })
        .then((response) => {
          resolve(response ? response.data : null);
        })
        .catch(async (error) => {
          const { data } = error.response || {};
          reject(data);
        });
    } catch (e) {
      reject({ code: 500, message: "Please try again later", data: null });
    }
  });
};

export { callApi };
