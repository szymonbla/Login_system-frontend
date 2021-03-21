import axios from "axios";
class Auth {
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
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        console.log(this.authenticated);
        this.authenticated = true;
      }
    });
  };

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
