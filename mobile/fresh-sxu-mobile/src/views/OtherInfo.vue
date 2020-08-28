<template>
  <div id="other-info">
    <Banner   :getTop='getTop' />
    <OtherInfo1/>
    <OtherInfo2/>
    <OtherInfo3/>
    <OtherInfo4/>
    <MessageBoard/>
    <ReturnTop/>
</div>
</template>

<script>
import OtherInfo1 from '@/components/OtherInfo/OtherInfo1.vue'
import OtherInfo2 from '@/components/OtherInfo/OtherInfo2.vue'
import OtherInfo3 from '@/components/OtherInfo/OtherInfo3.vue'
import OtherInfo4 from '@/components/OtherInfo/OtherInfo4.vue'
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
      offTop[1] = document.getElementById('self-improve').offsetTop
      //
      offTop[2] = document.getElementById('learn-experience').offsetTop
      offTop[3] = document.getElementById('library').offsetTop
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
