//2次封装直接给HOme页使用请求
import service from "..";
//导入一次封装
//轮播图API
export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=2",
    })
}
//推荐歌单API
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=10"
    })
}
//搜索引擎
export function getSearchMusic(data){
    return service({
        method:"GET",
        url:`/search?keywords=${data}`
    })
}
//获取电话登录
export function getPhoneLogin(data){
    return service({
        method:"GET",
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
//获取用户详情/user/detail?uid=32953014
export function getLoginUser(data){
    return service({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}