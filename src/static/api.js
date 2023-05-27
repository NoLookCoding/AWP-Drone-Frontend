import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://13.209.13.212:8000',
});


export default api;