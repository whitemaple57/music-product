<template>
  <div>
   <TopNav/>
   <Swiper/>
   <IconList/>
   <MusicList/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import Swiper from '@/components/home/SwiperTop.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList.vue'
export default {
  name: 'HomeView',
  components: {
   TopNav,
   Swiper,
   IconList,
   MusicList,
  }
}
</script>
