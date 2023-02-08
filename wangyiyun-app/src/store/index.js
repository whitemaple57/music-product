import { getPhoneLogin } from "@/request/api/home";
import { getMusicLyric } from "@/request/api/item";
import { createStore } from "vuex";
export default createStore({
  state: {
    playList: [
      {
        al: {
          id: 36525952,
          name: "Call Me By Your Name (Original Motion Picture Soundtrack)",
          pic: 109951165980140350,
          picUrl:
            "https://p1.music.126.net/o0NJVjyHT3anDiYxpPXt5Q==/109951165980140346.jpg",
          pic_str: "109951165980140346",
        },
        id: 516358164,
        name: "Mystery of Love",
      },
    ],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //暂停播放按钮显示
    detailShow: false, //歌曲详情页
    lyricList: {}, //歌词
    currentTime: 0, //当前歌词时间
    duration: 0, //歌曲总时长
    isLogin: false, //是否登录
    isFooterMusic: true, //是否页面需要底部组件
    token:"",//是否已经登录
    user:{},//用户信息
  },
  getters: {},
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value;
    },
    pushPlayList: function (state, value) {
      state.playList.push(value);
    },
    updatePlayList: function (state, value) {
      state.playList = value;
      //检测点击歌曲传输的值
      // console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value;
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    updateLyricList: function (state, value) {
      state.lyricList = value;
    },
    updatecurrentTime: function (state, value) {
      state.currentTime = value;
      // console.log(state.currentTime);
      //测试播放时的所在时间
    },
    updateDuration: function (state, value) {
      state.duration = value;
    },
    updateIsLogin: function (state, value) {
      state.isLogin = true;
    },
    updateToken: function (state, value) {
      state.token = value;
      localStorage.setItem('token',state.token)
    },
    updateUser: function (state, value) {
      state.user = value;
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value);
      // console.log(res);
      //测试拿到的大歌单歌词数据
      context.commit("updateLyricList", res.data.lrc);
    },
    getLogin: async function (context, value) {
      let res = await getPhoneLogin(value);
      //测试登录成功或失败返回值测试
      // console.log(res);
      return res;
    },
  },
  modules: {},
});
