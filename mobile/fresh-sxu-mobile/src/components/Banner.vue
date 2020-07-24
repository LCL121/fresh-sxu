<template>
  <div id="nav">
    <div id="nav-svg" class="svg" @click="IsShowMain() "></div>
    <div id="nav-root" v-if="isShow">
      <div id="main">
        <ul id="main-ul">
          <li v-for="(item,index) in navs" :key="index" @click="change(index,item)">
            <div class="first-d">
              {{item.title}}
              <i class="svg">{{item.svg}}</i>
            </div>
            <transition name="fade">
              <ul id="second-ul" v-show="item.show">
                <li class="second-li" v-for="(it,index) in item.list" :key="index">{{it}}</li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      isShow: false,
      navs: [
        {
          title: '走进山大',
          list: ['百年山大', '坞城校区', '大东关校区', '东山校区'],
          listUrl: [],
          show: false,
          svg: '',
          path: '/enter_school'
        },
        {
          title: '入学准备',
          list: ['物品准备', '报到流程', '到校方式', '军训小贴士'],
          show: false,
          svg: '',
          path: '/shool_preparation'
        },
        {
          title: '校内生活',
          list: ['住在山大', '学生组织', '大型活动', '便利生活'],
          show: false,
          svg: '',
          path: '/in_school'
        },
        {
          title: '校外生活',
          list: ['周边商圈', '风景名胜', '服务网点'],
          show: false,
          svg: '',
          path: '/outside_school'
        },
        {
          title: '其他信息',
          list: ['校园地图', '自我提升', '学习建议', '图书馆'],
          show: false,
          svg: '',
          path: '/other_info'
        },
        {
          title: '关于我们',
          show: false,
          svg: '',
          path: '/about'
        },
        {
          title: '留言板',
          show: false,
          svg: '',
          path: '/'
        },
        {
          title: '返回首页',
          show: false,
          svg: '',
          path: '/'
        }
      ]
    }
  },
  methods: {
    IsShowMain () {
      this.isShow = !this.isShow
    //   this.document.on('touchstart', function (e) {
    //     console.log()
    //   })
    },

    change (index, item) {
      // 菜单栏展开收缩
      for (var i = 0; i < this.navs.length; i++) {
        if (i !== index && this.navs[i].svg) {
          this.navs[i].show = false
          this.navs[i].svg = ''
        }
      }
      item.show = !item.show
      // 变换svg上下图标
      if (this.navs[index].svg) {
        if (item.show) {
          this.navs[index].svg = ''
        } else {
          this.navs[index].svg = ''
        }
      }
      // 跳转
      if (this.navs[index].path !== this.$route.path) {
        this.$router.push({ path: this.navs[index].path })
      }
    },

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
        let nowTop =
          document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
        const everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
        const scrollTimer = setInterval(() => {
          if (spacingInex > 0) {
            spacingInex--
            ScrollTop((nowTop += everTop))
          } else {
            clearInterval(scrollTimer) // 清除计时器
          }
        }, spacingTime)
      }
      ScrollTop(this.$parent.$children[1].getTop()[index] - 63, 300)
    }
  }
}
</script>

<style>
#nav-root {
  position: fixed;
  left: 0;
  top: 0;
  width: 140px;
  height: 100vh;
  background-color: #009999;
  opacity: 0.8;
  color: #fff;
  z-index: 2;
  overflow: hidden;
}

#nav-svg {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 18px;
  vertical-align: middle;
  color: #fff;
  z-index: 3;
}

#main {
  margin-top: 80px;
}

.first-d {
  display: block;
  width: 100%;
  line-height: 20px;
  text-align: left;
  font-size: 18px;
  text-indent: 1.5em;
  margin: 10.5px 0;
}

.second-li {
  text-indent: 1.5em;
  font-size: 18px;
  padding: 7.5px 0;
  color: #009999;
  background-color: #fff;
}

/* .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
}
.fade-enter, .fade-leave-to  .fade-leave-active, 2.1.8 版本以下  {
    height: 0;
} */
</style>
