<template>
  <div id="enter-school">
    <Banner   :getTop='getTop' />

    <EnterSchool1/>
    <EnterSchool2/>
    <EnterSchool3/>
    <EnterSchool4/>

    <MessageBoard/>
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
    EnterSchool1,
    EnterSchool2,
    EnterSchool3,
    EnterSchool4,
    Banner,
    ReturnTop,
    MessageBoard
  },
  methods: {

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
