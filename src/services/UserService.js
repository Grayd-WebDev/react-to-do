import http from "../helpers/httpCommon.js";

class UserService {
  static register(email, password) {
    try {
      const res = http.post("registration", { email, password });
      console.log("UserService, Registration", res);
      return res;
    } catch (error) {
      console.log(error); 
    }
  }
  static login(email, password) {
    try {
      const res = http.post("login", { email, password });
      console.log("UserService, Login", res);
      return res;
    } catch (error) {
      console.log(error); 
    }
  }
}

export default UserService;
