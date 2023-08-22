import { axiosInstance } from "../configs";
import { ICredential } from "../types";

class UserAPI {
  register(credential: ICredential | FormData) {
    return axiosInstance.post("/users/create", credential);
  }

  login(credential: ICredential) {
    return axiosInstance.post("/users/login", credential);
  }
}

export default new UserAPI();
