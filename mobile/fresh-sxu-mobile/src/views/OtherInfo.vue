<template>
  <div id="other-info">
    <Banner :getTop='getTop' />
    <span id="right-next"
          class="iconfont next"
          @click="JumpNext()">&#xe602;</span>
    <OtherInfo1 />
    <OtherInfo2 />
    <OtherInfo3 />
    <OtherInfo4 />
    <MessageBoard />
    <ReturnTop />
  </div>
</template>

<script>
import OtherInfo1 from '@/components/OtherInfo/learn-advice.vue'
import OtherInfo2 from '@/components/OtherInfo/library.vue'
import OtherInfo3 from '@/components/OtherInfo/map.vue'
import OtherInfo4 from '@/components/OtherInfo/self-improve.vue'
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'
import MessageBoard from '@/components/MessageBoard.vue'

export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1
    }
  },
  components: {
    OtherInfo1,
    OtherInfo2,
    OtherInfo3,
    OtherInfo4,
    Banner,
    ReturnTop,
    MessageBoard
  },
  methods: {
    JumpNext () {
      this.$router.push({ path: '/about' })
    },
    getTop () {
      var offTop = []
      offTop[0] = 0
      // 获取#weclome距离上边距的 px
      offTop[1] = document.getElementById('library').offsetTop
      //
      offTop[2] = document.getElementById('school-map').offsetTop
      offTop[3] = document.getElementById('self-improve').offsetTop
      return offTop
    }

  }

}
</script>

<style >
#other-info {
  width: 100%;
  height: 100%;
}

.p-img {
  width: 84%;
  margin: 0 auto;
}

img {
  width: 100%;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}
</style>
