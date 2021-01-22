<template>
  <div id="enter-school">
    <span id="right-next"
          class="iconfont next"
          @click="JumpNext()">&#xe602;</span>
    <Banner :getTop='getTop' />

    <welcome />
    <wu />
    <ddg />
    <ds />

    <MessageBoard />
    <ReturnTop />
  </div>
</template>

<script>
import welcome from '@/components/EnterSchool/welcome.vue'
import wu from '@/components/EnterSchool/wu.vue'
import ddg from '@/components/EnterSchool/ddg.vue'
import ds from '@/components/EnterSchool/ds.vue'
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
    welcome,
    wu,
    ddg,
    ds,
    Banner,
    ReturnTop,
    MessageBoard
  },
  methods: {
    JumpNext () {
      this.$router.push({ path: '/shool_preparation' })
    },
    getTop () {
      var offTop = []
      offTop[0] = 0
      // 获取#weclome距离上边距的 px
      offTop[1] = document.getElementById('wuC').offsetTop
      //
      offTop[2] = document.getElementById('daDongG').offsetTop
      offTop[3] = document.getElementById('dongS').offsetTop
      return offTop
    }

  }

}
</script>

<style scoped>
</style>
