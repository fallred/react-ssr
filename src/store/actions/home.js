import * as types from '../action-types';
import axios from 'axios';
export default {
    getHomeList(){
        // 调接口
        // 返回一个函数，store.dispatch(action);
        // redux-thunk中间件
        return function(dispatch,getState){
            return axios.get('http://localhost:4000/api/users').then(function(result){
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