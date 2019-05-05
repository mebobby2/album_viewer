import http from "./http";

export default class Photos {
  static all(albumId = null) {
    let urlPath = '/photos';
    if (albumId) urlPath += `?albumId=${albumId}`;
    return http.get(urlPath);
  }
}
