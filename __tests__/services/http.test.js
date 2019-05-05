import http from "../../src/services/http";

describe("HTTP", () => {
  it("should configure the baseUrl", () => {
    expect(http.defaults.baseURL).toEqual('http://jsonplaceholder.typicode.com');
  });
});
