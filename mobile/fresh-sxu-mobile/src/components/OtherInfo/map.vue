<template>
  <div class="onther-info1">
    <div id="school-map">
      <div id="school-map-img"
           class="img">
      </div>
      <div class="text" v-html="content"></div>

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
} from '@/doc/OtherInfo/school-map.js'
export default {
  name: 'OtherInfo1',
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
#school-map-img {
  background-image: url(../../../public/img/school-map.jpg);
}
</style>
