<template>
  <div class="onther-info1">
    <div id="school-map">
      <div id="school-map-img" class="img">
        <span id="right-next" class="iconfont next"
        @click="JumpNext()"
        >&#xe602;</span>
      </div>
    <div  class="text">
        <div class="title">校园地图</div>
      </div>
    <div class="p-img">
      <img alt="" src="http://bkzs.sxu.edu.cn/images/2019-07/2291bb3010454a9088e9887d92f09f4d.jpg">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherInfo1',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

#school-map-img {
  background-image: url(../../../public/img/school-map.jpg);
}

</style>
