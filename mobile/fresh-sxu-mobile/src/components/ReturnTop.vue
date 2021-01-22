<template>
  <div id="returnTop">
    <div id="return_item" @click="jump()">返回顶部</div>
  </div>
</template>

<script>
export default {
  name: 'returnTop',
  data () {
    return {

    }
  },
  methods: {
    jump (index) {
      // 将二级标题再原界面中的offsetTop获取并赋值，实现页面内的跳转
      // 页面滚动动画函数
      const ScrollTop = (number = 0, time) => {
        if (!time) {
          document.body.scrollTop = document.documentElement.scrollTop = number
          return number
        }
        const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
        let spacingInex = time / spacingTime // 计算循环的次数
        let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
        const everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
        const scrollTimer = setInterval(() => {
          if (spacingInex > 0) {
            spacingInex--
            ScrollTop(nowTop += everTop)
          } else {
            clearInterval(scrollTimer) // 清除计时器
          }
        }, spacingTime)
      }
      ScrollTop(0, 300)
    }

  }
}

</script>

<style  scoped>
#returnTop {
  width: 100%;
  height: 40px;
}

#return_item {
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  background-color: #009999;
  color: #fff;
  font-size: 18px;
}
</style>
