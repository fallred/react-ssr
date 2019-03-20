import axios from 'axios';
// import {request} from 'https';
// 创建一个axios的实例,配置baseURL的基准路径
// 服务器访问4000
export default (req)=>axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        cookie:req.get('cookie')||''
    }
});
// request.get('/api/users');