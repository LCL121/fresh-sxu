<template>
  <div class="in-school2">
    <div id="convenience">
      <div id="convenience-img"
           class="img"></div>
           <div class="text" v-html="content"></div>
      <!-- <div class="text">
        <div class="title">便利生活</div>
        <div class="main-text">
          <p><strong>快递点</strong></p>
          <p>圆通、申通、百世 、顺丰：令德地超菜鸟驿站</p>
          <p>中通：令德地超创新文印旁&amp;北家属院</p>
          <p>韵达快递：文瀛地超口</p>
          <p>天天 建华 天猫：北家属院9号楼</p>
          <p>京东：北家属院23号楼2单元101室</p>
          <p>邮政：北家属院29号楼</p>
          <p><strong>购物</strong></p>
          <p>文瀛餐厅地下超市&amp;令德地下超市</p>
          <p><strong>医疗</strong></p>
          <p>山西大学医院：在靠近西门处</p>
          <p>文瀛餐厅及令德餐厅负一层都有药店</p>
          <p><strong>文体</strong></p>
          <p>游泳馆：山大的游泳馆是集游泳健身于一体的场馆，还设有乒乓球室、棋牌室与瑜伽馆，理科楼与图书馆之间的小路</p>
          <p>羽毛球场：山大只有露天的羽毛球场开放，位于令德十二斋宿舍旁</p>
          <p>乒乓球台</p>
          <p>网球场：南操旁</p>
          <p>篮球场：令德十二斋宿舍前&amp;南操&amp;北操</p>
          <p>ps:山大开设的体育公共课门类齐全，游泳、足球、篮球、网球应有尽有，在大学除了学习文化课，拥有一个健康的体魄也是至关重要的事情。</p>
          <p><strong>文印</strong></p>
          <p>令德地超创新文印</p>
          <p>国际交流学院对面印刷店</p>
          <p>山西大学医院附近山西大学印刷厂</p>
          <p><strong>理发洗衣</strong></p>
          <p>洁美苑二层理发店</p>
          <p>令德地超</p>
          <p><strong>网络通讯</strong></p>
          <p>开学伊始，三大通讯运营公司会免费赠送校园手机卡。价格便宜，流量多多。</p>
          <p>山大校内的校园网是联通，宿舍内部接网需要三名同学是联通手机卡，同学们可根据需要自行选择</p>
          <p>联通营业厅：令德餐厅南侧门</p>
          <p>移动营业厅：文瀛超市地下室</p>
          <p><strong>维修</strong></p>
          <p>电脑维修</p>
          <p>手表维修及配钥匙：文瀛餐厅南侧门口</p>
          <p>裁缝店：许西罗氏正装</p>
          <p><strong>丢失一卡通</strong></p>
          <p>如果不小心丢了一卡通，莫慌莫慌，走以下流程就好啦</p>
          <p>①挂失：山大官网——常用链接——卡通里面很详细的有各类问题的解答；学校大门外的建行可以直接帮你挂失。</p>
          <p>②补卡：带着身份证，（学生证带着以防万一）到校外建行办卡，已成年的直接到机器处补卡，未成年的到人工窗口。</p>
          <p>③办卡时不收取任何费用，但拿到卡上没有照片的，未被激活，需到商学楼15、16号窗口印上照片，（拿到印照片的卡不要接触照片部分，会花。）然后记得往卡里充钱，到一定时间后会自动扣除10块钱激活卡用，在此之前你的卡是不能用的。</p>
          <p>④领取冻结金额：补卡后至少等三天去圈存机领取冻结金额，之前使用圈存机需解除旧卡的绑定，绑定新卡。</p>
          <p>同学们一定要保存这个流程，以后用处会很大的......</p>
          <p>PS：大学有很多场合需要穿正装，像社团组织开全体大会、辩论赛、参与大型活动的工作。因此一身合适的正装很有必要。有的学院开学后也会组织统一订购，同学们也可自行安排。</p>
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
} from '@/doc/InSchool/convenience.js'
export default {
  name: 'InSchool6',
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
#convenience-img {
  background-image: url(../../../public/img/convenience.jpg);
  margin-top: 50px;
}
</style>
