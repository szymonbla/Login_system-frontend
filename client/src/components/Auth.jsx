import axios from "axios";
export class Auth {
  constructor() {
    this.authenticated = false;
  }

  login = async (loggedin) => {
    await axios.post("http://localhost:5000/app/login", loggedin).then((response) => {
      if (!response.data.auth) {
        console.log(response.data);
        console.log(this.authenticated);
      } else {
        this.authenticated = true;
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        console.log(this.authenticated);
      }
    });
  };

  logout() {
    this.authenticated = false;
    localStorage.removeItem("token");
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
