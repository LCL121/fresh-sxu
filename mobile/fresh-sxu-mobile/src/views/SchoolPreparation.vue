<template>
  <div id="school-preparation">
    <Banner :getTop='getTop' />
    <span id="right-next"
          class="iconfont next"
          @click="JumpNext()">&#xe602;</span>
    <div id="goods">
      <div id="goods-img"
           class="img">
      </div>
      <goods />
    </div>

    <div id="process">
      <div id="process-img"
           class="img"></div>
      <process />

    </div>

    <div id="way">
      <div id="way-img"
           class="img"></div>
      <way />

    </div>

    <div id="tip">
      <div id="tip-img"
           class="img"></div>
      <tip />
    </div>

    <MessageBoard />
    <ReturnTop />
  </div>
</template>

<script>
import goods from '@/components/SchoolPreparation/goods.vue'
import tip from '@/components/SchoolPreparation/tip.vue'
import way from '@/components/SchoolPreparation/way.vue'
import process from '@/components/SchoolPreparation/process.vue'
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'
import MessageBoard from '@/components/MessageBoard.vue'

export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1 // publicPath: process.env.BASE_URL
    }
  },
  components: {
    way,
    tip,
    process,
    goods,
    Banner,
    ReturnTop,
    MessageBoard
  },
  methods: {
    JumpNext () {
      this.$router.push({ path: '/in_school' })
    },
    getTop () {
      var offTop = []
      offTop[0] = 0
      // 获取#weclome距离上边距的 px
      offTop[1] = document.getElementById('process').offsetTop
      //
      offTop[2] = document.getElementById('way').offsetTop
      offTop[3] = document.getElementById('tip').offsetTop
      return offTop
    }

  }

}
</script>

<style scoped>
#school-preparation {
  width: 100%;
  height: 100%;
}

#goods-img {
  background-image: url(../../public/img/goods.jpg);
}

#process-img {
  background-image: url(../../public/img/process.jpg);
  margin-top: 50px;
}

#way-img {
  background-image: url(../../public/img/way.jpg);
}

#tip-img {
  background-image: url(../../public/img/tip.jpg);
}

h4,
h5,
h6 {
  font-size: 15px;
}

h3 {
  font-size: 16px;
}

h2 {
  font-size: 18px;
}
</style>
