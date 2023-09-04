import axios from "axios";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}`;

const defaultConfigs = {
  headers: {
    'Accept': 'application/json'
  },
  timeout: 60000
};

function get(path: string, params: object) {
  return axios.get(`${baseUrl}/${path}`, {
    headers: { ... defaultConfigs.headers },
    timeout: defaultConfigs.timeout,
    params: { ...params }
  });
}

function post(path: string, params: object) {
  return axios.get(`${baseUrl}/${path}`, {
    headers: { ... defaultConfigs.headers },
    timeout: defaultConfigs.timeout,
    data: { ...params }
  });
}

export function messageList(params: object = {}) {
  return get('api/messages', params);
}

export function messageCreate(id: number, params: object = {}) {
  return post('api/messages', params);
}
