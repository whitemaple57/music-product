<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swiper"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in musicList" :key="item">
          <router-link :to="{ path: 'itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-play"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home.js";
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    //异步接收musiclist数据
    async getGnedan() {
      let res = await getMusicList();
      //   console.log(res);
      //测试musiclist数据
      this.musicList = res.data.result;
    },
    //函数解决播放量太大
    changeCount: function (num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
  mounted() {
    this.getGnedan();
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    widows: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 10px;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 4rem;
    .my-swiper {
      height: 100%;
      img {
        width: 100%;
        height: 150px;
        border-radius: 15px;
      }
      .van-swipe-item {
        margin-right: 10px;
        .playCount {
          position: absolute;
          top: 5px;
          right: 5px;
          color: white;
          .icon {
            position: absolute;
            top: 1px;
            left: -20px;
            // stroke: #fff;
          }
        }
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
