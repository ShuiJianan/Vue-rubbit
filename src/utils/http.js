import axios from 'axios'

// ����axiosʵ��
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios����������
http.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios��Ӧʽ������
http.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default http
