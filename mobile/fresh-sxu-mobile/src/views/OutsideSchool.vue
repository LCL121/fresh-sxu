<template>
  <div id="outside-school">
    <Banner :getTop='getTop' />
    <div id="surrounding">
      <div id="surrounding-img"
           class="img">
        <span id="right-next"
              class="iconfont next"
              @click="JumpNext()">&#xe602;</span>
      </div>
      <outside />
    </div>

    <div id="scenicSpots">
      <div id="scenicSpots-img"
           class="img"></div>
      <placeInterest />
    </div>

    <div id="serviceNetwork">
      <div id="serviceNetwork-img"
           class="img"></div>
      <hostpital />
    </div>

    <MessageBoard />
    <ReturnTop />
  </div>
</template>

<script>
import hostpital from '@/components/OutsideSchool/hostpital.vue'
import outside from '@/components/OutsideSchool/outside.vue'
import placeInterest from '@/components/OutsideSchool/place-interest.vue'
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
    outside,
    placeInterest,
    hostpital,
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
      offTop[1] = document.getElementById('scenicSpots').offsetTop
      //
      offTop[2] = document.getElementById('serviceNetwork').offsetTop
      return offTop
    }

  }

}
</script>

<style scoped>
#outside-school {
  width: 100%;
  height: 100%;
}

#surrounding-img {
  background-image: url(../../public/img/周边商圈.jpg);
}

#scenicSpots-img {
  background-image: url(../../public/img/风景名胜.jpg);
  margin-top: 50px;
}

#serviceNetwork-img {
  background-image: url(../../public/img/服务网点.jpg);
}

</style>
