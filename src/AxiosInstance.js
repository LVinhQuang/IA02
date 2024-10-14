import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com', 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Client-ID gpfBpkOwaTkqugCNv9aECuMDH3uSnUvcopt0hBEAmkg`
  }
});

export default axiosInstance;