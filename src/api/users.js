import axios from 'axios';

// const baseUrl = 'https://brawny-neighborly-arthropod.glitch.me/'
const baseUrl = process.env.REACT_APP_SERVER_URI;

export const client = axios.create({
  baseURL: baseUrl,
});
