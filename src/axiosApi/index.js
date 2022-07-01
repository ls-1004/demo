import axios from 'axios'

const axiosInstance = axios.create({
    timeout: 5000 // 超时时间阈值
})


axiosInstance.interceptors.request.use((config) => {
    console.log(config)
})

axiosInstance.interceptors.response.use((response) => {
    console.log(response)
})


export default axiosInstance