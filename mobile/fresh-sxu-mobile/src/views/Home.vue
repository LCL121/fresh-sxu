<template>
  <div class="home">
    <Banner/>
    <img id="header-img"  src="../../public/img/head.jpg" >
    <input id="search-input" type="text" placeholder="请输入想要查询的关键字">

   <span id="top-search" class="iconfont">&#xe603;</span>
<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"  v-for="(item,index) in ImageUrl" :key="index">
        <img class="swiper-img" :src="item" >
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

</div>
    <MessageBoard/>
    <ReturnTop/>
  </div>
</template>

<script>
import Swiper from 'swiper'
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'
import MessageBoard from '@/components/MessageBoard.vue'
export default {
  name: 'Home',
  components: {
    ReturnTop,
    Banner,
    MessageBoard
  },
  data () {
    return {
      ImageUrl: [
        require('../../public/img/enter-school.jpg'),
        require('../../public/img/about2.jpg'),
        require('../../public/img/in-school.jpg'),
        require('../../public/img/other-info.jpg'),
        require('../../public/img/outside-school.jpg'),
        require('../../public/img/school-preparation.jpg')
      ]
    }
  },
  mounted () {
    new Swiper('.swiper-container', { //eslint-disable-line
      loop: false,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'my-bullet-active'
      },
      autoplay: true, // 自动播放
      delay: 3000// 3秒切换一次
    })
  }
}

</script>

<style scoped >

#home {
  position: relative;
  background-color: #fff;
}

#header-img {
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
}

#search-input {
  position: absolute;
  top: 165px;
  left: 8%;
  height: 40px;
  letter-spacing: 3px;
  width: 84%;
  font-size: 16px ;
  background-color: #fff;
  border-radius: 3px;
  max-lines: 1;
  padding-left: 1em;
  padding-right: 2em;
  box-shadow: 1px 1px 1px 1px #D3D3D3;
}

#top-search {
  position: absolute;
  top: 178px;
  right: 9%;
}

/* 轮播图 */
.MessageBoards {
  background-color: #fff;
}

.swiper-container {
  width: 100%;
}

.swiper-img {
  width: 100%;
  height: 100%;
}

.swiper-container>>>.my-bullet-active{
  /* background: #ff6600; */
  opacity: 1;
}

/*  */
</style>
