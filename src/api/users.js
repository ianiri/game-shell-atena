import axios from "axios";

const baseUrl = 'https://brawny-neighborly-arthropod.glitch.me/'
 
export const client = axios.create({
  baseURL: baseUrl,
});