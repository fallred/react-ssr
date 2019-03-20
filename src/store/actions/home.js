import * as types from '../action-types';
import axios from 'axios';
export default {
    getHomeList(){
        // 调接口
        // 返回一个函数，store.dispatch(action);
        // redux-thunk中间件
        return function(dispatch,getState, request){
            // 如果是服务端读数据，则直接访问API服务器，4000
            // 如果是客户端，则要访问3000的node服务器，让node服务器帮我们访问4000服务器
            return request.get('/api/users').then(function(result){
                let list = result.data;
                // console.log('list:', list);
                dispatch({
                    type:types.SET_HOME_LIST,
                    payload:list
                });
            });
        }
    }
}