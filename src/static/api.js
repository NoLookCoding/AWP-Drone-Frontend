import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://3.36.90.145:8000',
});

export default api;