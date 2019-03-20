import axios from 'axios';
// import {request} from 'https';
// 创建一个axios的实例,配置baseURL的基准路径
// 客户端访问3000
export default axios.create({
    baseUrl: '/'
});
// request.get('/api/users');