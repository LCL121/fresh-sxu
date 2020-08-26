<template>
  <div id="in-school">
    <Banner   :getTop='getTop' />
    <InSchool1/>
    <InSchool2/>
    <InSchool3/>
    <InSchool4/>
    <InSchool5/>
    <InSchool6/>

    <MessageBoard/>
    <ReturnTop/>
</div>
</template>

<script>
import InSchool1 from '@/components/InSchool/InSchool1.vue'
import InSchool2 from '@/components/InSchool/InSchool2.vue'
import InSchool3 from '@/components/InSchool/InSchool3.vue'
import InSchool4 from '@/components/InSchool/InSchool4.vue'
import InSchool5 from '@/components/InSchool/InSchool5.vue'
import InSchool6 from '@/components/InSchool/InSchool6.vue'
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
      offTop[1] = document.getElementById('eat').offsetTop
      offTop[2] = document.getElementById('organization').offsetTop
      offTop[3] = document.getElementById('association').offsetTop
      offTop[4] = document.getElementById('activity').offsetTop
      offTop[5] = document.getElementById('convenience').offsetTop
      return offTop
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
