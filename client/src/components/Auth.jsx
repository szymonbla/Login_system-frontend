import React, { useState } from "react";
import jwt_decode from "jwt-decode";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login() {
    this.authenticated = true;

    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!token || refreshToken) {
      return false;
    }

    try {
      const { exp } = jwt_decode(refreshToken);

      if (exp < new Date().getTime() / 1000) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
