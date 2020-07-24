<template>
  <div id="enter-school">
    <Banner/>
    <div id="bgi" class="img after"></div>
    <div id="block"></div>
    <!-- <div style="position: relative;">
        <div style="position: absolute; top: 30px; left: 20px; font-size: 1rem; color: white;">
        <router-link to="/home">&lt; 返回主菜单</router-link></div>
        <div class="bgi"></div>
        <h1 style="position: absolute; bottom: 20px; left: 20px; font-size: 1.1rem; color: white;">走进山大</h1>
    </div>
    <div id="naver">
        <ul>
            <li @click="select(1)"><span class="item1">百年山大</span></li>
            <li @click="select(2)"><span class="item2">坞城校区</span></li>
            <li @click="select(3)"><span class="item3">大东关校区</span></li>
            <li @click="select(4)"><span class="item4">东山校区</span></li>
        </ul>
    </div>
    <enter-school1 v-if="selected === 1"></enter-school1>
    <enter-school2 v-else-if="selected === 2"></enter-school2>
    <enter-school3 v-else-if="selected === 3"></enter-school3>
    <enter-school4 v-else></enter-school4> -->

<!-- 测试底部 -->
  <div id="blocks"></div>
<ReturnTop/>
  </div>

</template>

<script>
import EnterSchool1 from '@/components/EnterSchool/EnterSchool1.vue'
import EnterSchool2 from '@/components/EnterSchool/EnterSchool2.vue'
import EnterSchool3 from '@/components/EnterSchool/EnterSchool3.vue'
import EnterSchool4 from '@/components/EnterSchool/EnterSchool4.vue'
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1,
      publicPath: process.env.BASE_URL
    }
  },
  components: {
    EnterSchool1,
    EnterSchool2,
    EnterSchool3,
    EnterSchool4,
    Banner,
    ReturnTop
  },
  methods: {
    select (index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
/* #enter_school {
  width: 100%;
  height: 100%;
} */

#bgi {
  /* background-image: url("../../public/img/cmqxs4.jpg");/
   */
   background-image: url(http://bkzs.sxu.edu.cn/images/2019-07/a43bb5de8a31408c8003f0873c033112.jpg);
}

#bgi::after{
  content: '\ea51';
}

#blocks{
  width: 300px;
  height: 1222px;
}

</style>
