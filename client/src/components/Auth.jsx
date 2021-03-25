import axios from "axios";
export class Auth {
  constructor() {
    this.authenticated = false;
  }

  isloggedin() {
    this.authenticated = true;
  }

  login = async (loggedin) => {
    await axios
      .post("http://localhost:5000/app/login", loggedin)
      .then((response) => {
        if (!response.data.auth) {
          console.log(response.data.error);
        } else {
          this.authenticated = true;
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
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
