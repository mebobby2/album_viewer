import http from "./http";

export default class Users {
  static all() {
    return http.get('/users');
  }
}
