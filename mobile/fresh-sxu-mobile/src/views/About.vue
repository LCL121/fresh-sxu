<template>
  <div id="about">
    <Banner :getTop='getTop' />
    <div id="about0">
      <div id="about-img"
           class="img">
      </div>
      <div class="text"
           v-html="content"></div>
    </div>

  </div>
</template>

<script>
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'
import MessageBoard from '@/components/MessageBoard.vue'
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
} from '@/doc/About/about.js'
export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1,
      content: '',
      check: ''
    }
  },
  components: {
    Banner,
    ReturnTop,
    MessageBoard
  },
  methods: {
    getTop () {
      var offTop = []
      offTop[0] = 0
      return offTop
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
#about-img {
  background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/a79806ff9ab54b1ea6f084ac6906cf7c.jpg");
}

span {
  color: #69c;
}

h2 {
  font-size: 18px;
  margin: 10px 0;
}

h3,
h4 {
  font-size: 16px;
  margin: 10px 0;
}
</style>
