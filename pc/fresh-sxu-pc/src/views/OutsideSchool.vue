<template>
  <div id="navRoot">
    <div id="outside-school" class="body-w">
      <div class="most-top"></div>
      <div id="outside-b" class="before-component">
        <div id="outside-btext" class="text">
          <p>有待补充</p>
          <p>
            <strong>北美N1</strong>
          </p>
          <p class="indent">地址：体育路与晋阳街交叉口东北角</p>
          <p class="indent">优：内有全美影院，观影体验较好；负一层小吃较多</p>
          <p class="indent">劣：入驻服装品牌较少，不建议在此逛街购物</p>
          <p>
            <strong>北美新天地</strong>
          </p>
          <p class="indent">优：入驻服装品牌较多，美食多，综合性强</p>
          <p>
            <strong>茂业天地</strong>
          </p>
          <p class="indent">地址： 太原市小店区亲贤北街79号</p>
          <p class="indent">优：占地面积大，综合性较强，美食甜品奶茶应有尽有，快时尚品牌在此聚集</p>
        </div>
        <div id="outside-img" class="img"></div>
      </div>

      <div id="place-interest" class="before-component">
        <div id="place-text" class="text">
          <p class="a-text">
            太原旅游景点大全：
            <a
              href=" https://taiyuan.cncn.com/jingdian/"
              target="_blank"
            >https://taiyuan.cncn.com/jingdian/</a>
          </p>
          <p class="a-text">
            山西旅游景点大全：
            <a
              href=" https://shanxi.cncn.com/jingdian/"
              target="_blank"
            >https://shanxi.cncn.com/jingdian/</a>
          </p>
          <p>有待补充</p>
          <p>
            <strong>晋祠</strong>
          </p>
          <p class="indent">地址：太原市晋源区晋祠镇</p>
          <p>
            <strong>山西省博物馆</strong>
          </p>
          <p class="indent">地址：太原市万柏林区滨河西路北段13号</p>
          <p>
            <strong>迎泽公园</strong>
          </p>
          <p class="indent">地址：迎泽区迎泽大街218</p>
        </div>
        <div id="place-img" class="img"></div>
      </div>
      <div id="serve-place" class="before-component">
        <div id="serve-text" class="text">
          <p>有待补充</p>
          <blockquote>
            <h3>医院</h3>
          </blockquote>
          <p>
            <strong>武警山西总队医院</strong>
          </p>
          <p class="indent">地址：师范街36号</p>
          <p class="indent">距离学校最近</p>
          <p>
            <strong>山西医科大学第二医院</strong>
          </p>
          <p class="indent">地址： 太原市杏花岭区五一路382号</p>
          <p>三甲医院</p>
          <blockquote>
            <h3>便利店</h3>
          </blockquote>
          <p>超市.....</p>
        </div>
        <div id="serve-img" class="img">
          <button id="toNext" class="button-animation" @click="jump">
            <span>
              其他信息&nbsp;&nbsp;
              <i></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'

export default {
  name: 'OutsideSchool',
  components: {
    Banner
  },
  methods: {
    jump () {
      this.$router.push({ path: '/other_info' })
    },
    getTop () {
      var offTop = []
      offTop[0] = 0
      offTop[1] = document.getElementById('place-interest').offsetTop
      offTop[2] = document.getElementById('serve-place').offsetTop
      return offTop
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
#outside-b {
  position: relative;
  width: 100%;
}

#outside-b::before {
  content: "周边商圈";
}

.indent {
  margin-left: 1em;
}

#outside-img {
  background-image: url(http://bkzs.sxu.edu.cn/images/2019-07/12a1c1d5b5684c9d8c204acfc7705707.jpg);
}

#place-interest {
  position: relative;
}

#place-interest::before {
  content: "风景名胜";
}

.a-text {
  margin-bottom: 90px;
}

#place-img {
  background-image: url(http://bkzs.sxu.edu.cn/images/2019-07/c38dd82d48374d23960bc1c409fa2d63.jpg);
}

#serve-place {
  position: relative;
}

#serve-place:before {
  content: "服务网点";
}

#serve-img {
  background-image: url(http://bkzs.sxu.edu.cn/images/2019-07/df11d837bde64a9a99bed190f78432a6.jpg);
}
</style>
