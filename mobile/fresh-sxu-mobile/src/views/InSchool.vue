<template>
  <div id="in-school">
    <span id="right-next"
          class="iconfont next"
          @click="JumpNext()">&#xe602;</span>
    <Banner :getTop='getTop' />
    <InSchool1 />
    <InSchool2 />
    <InSchool3 />
    <InSchool4 />
    <InSchool5 />
    <InSchool6 />

    <MessageBoard />
    <ReturnTop />
  </div>
</template>

<script>
import InSchool1 from '@/components/InSchool/activity.vue'
import InSchool2 from '@/components/InSchool/association.vue'
import InSchool3 from '@/components/InSchool/convenience.vue'
import InSchool4 from '@/components/InSchool/eat.vue'
import InSchool5 from '@/components/InSchool/live.vue'
import InSchool6 from '@/components/InSchool/organization.vue'
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'
import MessageBoard from '@/components/MessageBoard.vue'

export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1,
      publicPath: process.env.BASE_URL
    }
  },
  components: {
    InSchool1,
    InSchool2,
    InSchool3,
    InSchool4,
    InSchool5,
    InSchool6,
    Banner,
    ReturnTop,
    MessageBoard
  },
  methods: {
    getTop () {
      var offTop = []
      offTop[0] = 0
      // 获取#weclome距离上边距的 px
      //
      offTop[1] = document.getElementById('organization').offsetTop
      offTop[2] = document.getElementById('convenience').offsetTop
      offTop[3] = document.getElementById('eat').offsetTop
      offTop[4] = document.getElementById('live').offsetTop
      offTop[5] = document.getElementById('association').offsetTop
      return offTop
    },
    JumpNext () {
      this.$router.push({ path: '/outside_school' })
    }

  }

}
</script>

<style >
.in-school {
  position: relative;
  width: 100%;
  height: 100%;
}

.m-img {
  margin: 20px 0;
}

img {
  width: 100%;
}

h2 {
  font-size: 18px;
  margin: 10px 0;
}
</style>
