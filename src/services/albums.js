import http from "./http";

export default class Albums {
  static all() {
    return http.get('/albums');
  }
}
