<template>
  <ItemMusicTop :playlist="state.playlist"/>
  <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted,reactive } from "vue";
import {getMusicItemList,getItemList} from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/itemMusicTop.vue'
import ItemMusicList from '@/components/item/itemMusicList.vue'
export default {
  setup() {
    const state = reactive({
        playlist:{},//详情页数据
        itemList:[],//歌单歌曲
    }) 
    onMounted(async() => {
        let id = useRoute().query.id
    //   console.log(id)测试使用路由传参
      let res = await getMusicItemList(id);
      // console.log(res);//测试playlist的api接收id是否成功
      state.playlist = res.data.playlist
      //获取歌单的歌曲
      let result = await getItemList(id)
      // console.log(result);//测试歌单songs的数据接收是否成功
      state.itemList = result.data.songs
      //防止页面刷新丢失,存储数据到sessionstorage
      sessionStorage.setItem('itemDetail',JSON.stringify(state))
    });
    return {state}
  },
  components:{
    ItemMusicTop,
    ItemMusicList,
  }
};
</script>
