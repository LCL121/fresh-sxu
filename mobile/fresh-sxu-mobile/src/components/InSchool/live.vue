<template>
  <div class="in-school1">
    <div id="live">
      <div id="live-img"
           class="img">
      </div>
      <div class="text"
           v-html="content"></div>

      <!-- <div class="text">
        <div class="title">住在山大</div>
        <div id="welcome-text"
             class="main-text">
          <p><strong>坞城校区整体上山大的宿舍分为“文瀛”与“令德”两部分</strong></p>
          <hr>
          <h2>文瀛</h2>
          <p>在文瀛一斋至文瀛十二斋里面生活着的大多是研究生。</p>
          <p>这些宿舍又被人们称为小红楼，他们具有时代感的外观正是山西大学悠久历史的见证。</p>
          <p>文瀛十三斋到十五斋基本在学校的中心区域，地理位置优越。</p>
          <p><strong>文瀛十三斋——经济与管理学院</strong></p>
          <p>内部多为八床位，但基本安排为六人间，上下铺，无阳台，无公共浴室，无独卫，11点断电。</p>
          <p><strong>文瀛十四斋——哲学社会学学院</strong></p>
          <p>拥有所有文瀛宿舍区最好的环境条件，四人间并且是上床下桌的宿舍，令其他文瀛人很是羡慕，无阳台，无公共浴室，无独卫，不断电。</p>
          <p><strong>文瀛十五斋——外国语学院</strong></p>
          <p>六人间、上下铺，无阳台，无公共浴室，无独卫，不断电。</p>
          <p><strong>文瀛十二斋B——文学院、新闻学院</strong></p>
          <p>两个学院都有一些女生在其他宿舍生活。六人间、上下铺，晚上12点断电熄灯。</p>
          <p><strong>文瀛区洁美苑</strong></p>
          <p>洁美苑在文瀛十二斋B座往南50米左右的位置，较为显眼，一二层是澡堂，女生浴室在左边，男生浴室在右边。</p>
          <hr>
          <h2>令德</h2>
          <p><strong>令德一斋——经济与管理学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德二斋——环境与资源学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德三斋——经济与管理学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德四斋——数学科学学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德五斋——美术学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德六斋——教育科学学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德七斋——生命科学学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德八斋——化学化工学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德九斋——物理电子工程学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德十斋——政治与公共管理学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德十一斋——体育学院</strong> </p>
          <p>四人间，上床下桌，有阳台，有公共浴室，无独卫。</p>
          <p><strong>令德十二斋——计算机与信息技术学院、环境与资源学院、文学院、新闻学院、物理电子工程学院</strong> </p>
          <p>这栋楼也算是最特立独行的宿舍楼了，它是校园里唯一一栋坐东朝西、规模最大的宿舍楼，八人间，有阳台，无独立卫浴，一楼拥有浴室，不断电。同时，公寓服务中心也在这栋楼一层。</p>
          <p><strong>令德十四斋——法学院、初民学院</strong> </p>
          <p>六人间、上床下桌，无独卫，有公共浴室，有阳台，瓷砖地板。宿舍内含两张上下铺的床和两张上床下桌的床，一张桌子三人份。</p>
          <p><strong>令德十五斋——历史文化学院、文学院</strong> </p>
          <p>六人间、上床下桌，无独卫，有公共浴室，有阳台，瓷砖地板。宿舍内含两张上下铺的床和两张上床下桌的床，一张桌子三人份。</p>
          <p><strong>令德十六斋——音乐学院、新闻学院、环境与资源学院、数学科学学院</strong> </p>
          <p>六人间、上床下桌，无独卫，有公共浴室，有阳台，瓷砖地板。宿舍内含两张上下铺的床和两张上床下桌的床，一张桌子三人份。</p>
          <p><strong>*具体信息以最新公布信息为准，如有问题，请联系我们</strong></p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import {
  renderConfigMarked,
  getCheckInfo,
  scrollToChecked
} from '@/utils/marked.utils.js'
import {
  markdown,
  classNames,
  routePath,
  pageName
} from '@/doc/InSchool/live.js'
export default {
  name: 'InSchool1',
  data () {
    return {
      content: '',
      check: ''
    }
  },
  mounted () {
    const renderer = renderConfigMarked({ pClassName: classNames.pClassName })
    if (this.check !== '') {
      const { html, checkedList } = getCheckInfo(
        renderer,
        markdown,
        this.check,
        routePath,
        classNames.pClassName,
        pageName
      )
      this.content = html
      // 选择第几个
      const checkedIndex = 0
      scrollToChecked(this, checkedList, checkedIndex)
    } else {
      marked.use({ renderer })
      this.content = marked(markdown)
    }
  }
}
</script>

<style scoped>
#live-img {
  background-image: url(../../../public/img/live.jpg);
}
</style>
