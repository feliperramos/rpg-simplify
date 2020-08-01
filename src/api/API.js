import { backend } from "../api.json";
import axios from "axios";

export const ApiRequest = async (type, route, data) => {
  let resp;

  switch (type) {
    case "GET_LIST":
      resp = await axios.get(backend + route);
      break;
    case "GET_WITH_DATA":
      resp = await axios.get(backend + route, data);
      break;
    case "POST":
      resp = await axios.post(backend + route, data);
      break;
    case "PUT":
      resp = await axios.put(backend + route, data);
      break;
    case "DELETE":
      resp = await axios.delete(backend + route);
      break;

    default:
      resp = await axios.get(backend + route + data);
      break;
  }

  return resp;
};
