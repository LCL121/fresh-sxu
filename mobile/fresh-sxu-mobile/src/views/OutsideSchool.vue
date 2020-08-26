<template>
  <div id="outside-school">
    <Banner   :getTop='getTop' />
    <div id="surrounding">
    <div id="surrounding-img" class="img">
      <span id="right-next" class="iconfont next"
      @click="JumpNext()"
      >&#xe602;</span>
    </div>
    <div  class="text">
        <div class="title">周边商圈</div>
        <div class="main-text">
          <p>有待大家的陆续探索补充</p>
          <h3>北美N1</h3>
          <p> 地址：体育路与晋阳街交叉口东北角</p>
          <p> 优：内有全美影院，观影体验较好；负一层小吃较多</p>
          <p> 劣：入驻服装品牌较少，不建议在此逛街购物</p>
          <h3>北美新天地</h3>
          <p> 优：入驻服装品牌较多，美食多，综合性强</p>
          <h3>茂业天地</h3>
          <p> 地址： 太原市小店区亲贤北街79号</p>
          <p> 优：占地面积大，综合性较强，美食甜品奶茶应有尽有，快时尚品牌在此聚集</p>
        </div>
      </div>
    </div>

    <div id="scenicSpots">
      <div id="scenicSpots-img" class="img"></div>
      <div class="text">
        <div class="title">风景名胜</div>
        <div class="main-text">
          <p>大风泱泱，大潮滂滂。文明圣火，千古未绝者，唯我无双；和天地并存，与日月同光。</p><u></u>
          <p>三晋大地上有着无数光辉而灿烂的文化，我们或许无法亲身地用先辈那样目光打量着历经岁月洗涤仍不染铅华的旧时风采，但我们可以通过不断的探索去塑造这永恒的芳华，闭上眼，与千年前没有差异的风声鸟声犹在耳边。中国文化的真实步履，就贮藏在这山重水复、莽莽苍苍的中华大地上。</p>
          <p>所以，多出去看看是件很棒的事情呢，期待大家的进一步投稿补充</p>
          <p>
            <a href="https://shanxi.cncn.com/jingdian/"><span>山西旅游景点大全</span></a>
            <a href="https://taiyuan.cncn.com/jingdian/"><span>太原旅游景点大全</span></a>
          </p>
          <br /><br />
          <h3>晋祠</h3>
          <p>地址：太原市晋源区晋祠镇</p>
          <h3>山西省博物馆</h3>
          <p>地址：太原市万柏林区滨河西路北段13号</p>
          <h3>迎泽公园</h3>
          <p>地址：迎泽区迎泽大街218</p>
        </div>
      </div>
    </div>

    <div id="serviceNetwork">
      <div id="serviceNetwork-img" class="img"></div>
      <div class="text">
        <div class="title">服务网点</div>
        <div class="main-text">
          <h3>医院</h3>
          <h4>武警山西总队医院</h4>
          <p>地址：师范街36号</p>
          <p>距离学校最近</p>
          <h4>山西医科大学第二医院</h4>
          <p>地址： 太原市杏花岭区五一路382号</p>
          <p>三甲医院</p>
          </div>
      </div>
    </div>

    <MessageBoard/>
    <ReturnTop/>
</div>
</template>

<script>
import OutsideSchool1 from '@/components/OutsideSchool/OutsideSchool1.vue'
import OutsideSchool2 from '@/components/OutsideSchool/OutsideSchool2.vue'
import OutsideSchool3 from '@/components/OutsideSchool/OutsideSchool3.vue'
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
    OutsideSchool1,
    OutsideSchool2,
    OutsideSchool3,
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

#scenicSpots-img{
  background-image: url(../../public/img/风景名胜.jpg);
  margin-top: 50px;
}

#serviceNetwork-img {
  background-image: url(../../public/img/服务网点.jpg);
}

h3 {
  font-size: 18px;
}

</style>
