<template>
  <div id="nav">
    <div id="nav-svg"
         class="iconfont"
         @click="isShow=!isShow"
         v-show="!isShow">&#xe601;</div>
    <div id="navs-svg"
         class="iconfont"
         @click="isShow=!isShow"
         v-show="isShow">&#xe601;</div>
    <div id="nav-root"
         class="nav"
         :class="{'nav-hover': isShow}">
      <div id="main">
        <ul id="main-ul">
          <li v-for="(item,index) in navs"
              :key="index">
            <div class="first-d"
                 @click="jumpPage(index)">
              {{item.title}}
              <i class="svg svgs"
                 @click.stop
                 @click="change(index,item)">{{item.svg}}</i>
            </div>
            <ul>
              <li class="second-li"
                  :class="{'second-hover': item.show}"
                  v-for="(it,indexs) in item.list"
                  :key="indexs"
                  @click.stop
                  @click="jump(index,indexs)">{{it}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    getTop: {
      type: Function,
      default: null
    }
  },
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
          list: ['大型活动', '多彩社团', '便利生活', '吃在山大', '住在山大', '学校组织'],
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
          list: ['学习建议', '图书馆', '学校地图', '自我提示'],
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
      // // 跳转
      // if (this.navs[index].path !== this.$route.path) {
      //   this.$router.push({ path: this.navs[index].path })
      // }
    },

    jump (index, indexs) {
      // // 跳转
      if (this.navs[index].path !== this.$route.path) {
        this.$router.push({ path: this.navs[index].path })
        console.log(this.navs[index].path)
        console.log(this.$route.path)
      }
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
      ScrollTop(this.getTop()[indexs], 300)
      this.isShow = false
    },
    jumpPage (index) {
      if (this.navs[index].path !== this.$route.path) {
        this.$router.push({ path: this.navs[index].path })
      }
    }
  },
  created () {
    // 通过url来 修改菜单栏是否展开
    switch (this.$route.path) {
      case '/enter_school':
        this.navs[0].show = true
        break
      case '/shool_preparation':
        this.navs[1].show = true
        break
      case '/in_school':
        this.navs[2].show = true
        break
      case '/outside_school':
        this.navs[3].show = true
        break
      case '/other_info':
        this.navs[4].show = true
        break
    }
  }
}
</script>

<style scoped>
#nav-root {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #009999;
  color: #fff;
  z-index: 2;
  overflow: hidden;
}

#nav-svg {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 18px;
  color: #fff;
  z-index: 3;
}

#navs-svg {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 18px;
  color: #fff;
  z-index: 3;
}

#main {
  margin-top: 80px;
}

.nav {
  opacity: 0;
  width: 0;
  transition: all 0.75s;
}

.nav-hover {
  opacity: 1;
  width: 140px;
  transition: all 0.75s;
}

.svgs {
  vertical-align: middle;
}

.first-d {
  display: block;
  width: 100%;
  line-height: 20px;
  height: 50px;
  text-align: left;
  font-size: 18px;
  text-indent: 1.5em;
  padding: 15px 0;
  white-space: nowrap;
}

.ul-show {
  opacity: 0;
}

.second-li {
  opacity: 0;
  text-indent: 1.5em;
  height: 0;
  font-size: 18px;
  color: #009999;
  background-color: #fff;
  transition: all 0.75s;
  white-space: nowrap;
}

.second-hover {
  height: 39px !important ;
  opacity: 1;
  transition: all 0.75s;
  padding: 7.5px 0;
}
</style>
