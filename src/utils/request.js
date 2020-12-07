import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
let instance = null;

class Request {
  constructor() {
    this.axios = axios;
    this.apiUrl = publicRuntimeConfig.apiUrl;
  }

  static async getInstance() {
    if (!instance) {
      instance = new Request();
    }
    return instance;
  }

  async RESTRequest(requestType, url, data) {
    try {
      switch (requestType) {
        case 'get':
          return this.axios.get(url);
        case 'post':
          return this.axios.post(url, data);
        case 'put':
          return this.axios.put(url, data);
        case 'delete':
          return this.axios.delete(url, data);
        default:
          return { data: null };
      }
    } catch (error) {
      throw error;
    }
  }
}

export default Request.getInstance();
