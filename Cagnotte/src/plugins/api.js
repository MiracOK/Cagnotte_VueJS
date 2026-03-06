import axios from 'axios'


const baseURL = "https://donations.edu.netlor.fr";
const apiKey = "@g[UmmUF.jr<";

let api = null;
api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': `application/json`,
        'Authorization': `key=${apiKey}`
    }
})

export default {
  install(app) {
    app.config.globalProperties.$api = api
  }
}