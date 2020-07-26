<template>
  <div class="enter-school1">
    <div
      class="fresh-sxu-content text-content"
      v-html="content"
    ></div>
    <!-- <div class="fresh-sxu-content text-content">
        <p>山大的故事</p>
        <p>要从这里说起</p>
        <p>1902年，山西大学堂挂牌开学</p>
        <p>以学习近代学问之身</p>
        <p>怀增中西合璧、文理并重之愿</p>
        <p>正如校歌所唱：勤耕四野，勇拓八荒</p>
        <p>山大人坚守“中西汇通，自强报国”的信念</p>
        <p>走过百年风华</p>
        <p>今天的山大</p>
        <p>也要从这里说起</p>
        <p>以“教授高深学术，养成硕学闳材”为己任</p>
        <p>秉承“求真至善、登崇俊良”的优良传统</p>
        <p>踏上中国高等教育的探索之途</p>
        <p>在这里，国学良史，西文科学，交相辉映</p>
        <p>在这里，名师大家，科学巨擘，荟萃一堂</p>
        <p>过去，人文学术，理工实验，成绩斐然</p>
        <p>如今，理工共进，人文日新，再创辉煌</p>
        <p>求实与创新</p>
        <p>求真与至善</p>
        <p>融入在山大人日常生活里</p>
        <p>激励着莘莘学子</p>
        <p>埋首在学习与实践的征途之上</p>
        <p>百年之路，一如既往</p>
        <p>百年风华，薪火相传</p>
        <p>这是我的山大</p>
        <p>也是你的山大</p>
        <p>山西大学，欢迎你</p>
    </div> -->
    <div id="tailer">
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import { renderConfigMarked, getCheckInfo, scrollToChecked } from '@/utils/marked.utils.js'
import { markdown, classNames, routePath, pageName } from '@/doc/enterSchool/bainianshanda.js'

export default {
  name: 'EnterSchool1',
  data () {
    return {
      content: '',
      check: '山西大学'
    }
  },
  mounted () {
    const renderer = renderConfigMarked({ pClassName: classNames.pClassName })
    if (this.check !== '') {
      const { html, checkedList } = getCheckInfo(renderer, markdown, this.check, routePath, classNames.pClassName, pageName)
      this.content = html
      // 选择第几个
      const checkedIndex = 2
      scrollToChecked(this, checkedList, checkedIndex)
    } else {
      marked.use({ renderer })
      this.content = marked(markdown)
    }
  }
}
</script>

<style scoped>
.enter-school1 {
  /* height: 900px; */
  background: #fff9e7;
  margin: 15px;
}
.text-content >>> p {
  padding: 5px;
  width: 100%;
  text-align: center;
  /*display: table-cell;*/
  vertical-align: middle;
  font-size: 16px;
}

#tailer {
  clear: both;
}
</style>
