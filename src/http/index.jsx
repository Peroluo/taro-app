import Taro from "@tarojs/taro";

const base = "http://202.96.155.121:8888/api";

const request = (params, method = "GET") => {
  const { url, data, token = "" } = params;
  const option = {
    url: base + url,
    data,
    method,
    header: { token }
  };
  return Taro.request(option);
};

export default {
  async get(url, query) {
    const { statusCode, data } = await request({ url, data: query }, "GET");
    return statusCode === 404 ? null : data;
  },
  async post(url, query) {
    const { statusCode, data } = await request({ url, data: query }, "POST");
    return statusCode === 404 ? null : data;
  }
};
