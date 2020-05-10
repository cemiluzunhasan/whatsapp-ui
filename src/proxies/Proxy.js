import Axios from "axios";

class Proxy {
  constructor(endpoint) {
    this.address = 'https://5eb718f4875f1a00167e137d.mockapi.io/api';
    this.endpoint = endpoint;
  }

  async getData(params) {
    const { address, endpoint } = this;
    try {
      const { data } = await Axios.get(`${address}/${endpoint}`, { params });
      return data;
    } catch (err) {
      return err.response;
    }
  }
}

export default Proxy;