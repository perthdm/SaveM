import axios from "axios";
import { API_PREFIX, getStorage } from "src/utils/utils";

const ENDPOINT = {
  GET_USERS: `${API_PREFIX}/get-user`,
  LOGIN: `${API_PREFIX}/login`,
};

const AuthService = {
  getUsers: () => {
    return axios({
      method: "GET",
      url: ENDPOINT.GET_USERS,
    });
  },

  login: (requestData) => {
    return axios({
      method: "POST",
      url: ENDPOINT.LOGIN,
      data: requestData,
    });
  },
};

export default AuthService;
