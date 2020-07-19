<template>
  <div id="root" class="root-two">
    <div id="new-book">
      新生手册
      <div id="nav-word">
        <span>
          <i></i>导航栏
          <i></i>
        </span>
      </div>
    </div>
    <div id="logo" class="logo-two"></div>

    <div id="main">
      <ul>
        <li v-for="(item,index) in navs" :key="index" @click="change(index,item)">
          <a href="javascript:;" class="a-text">
            {{item.title}}
            <i>{{item.svg}}</i>
          </a>

          <ul class="ul-show" @click.stop>
            <li
              v-for="(navList,index) in item.list"
              :key="index"
              class="list-text"
              :class="{'list-hover': item.show}"
              @click="jump(index)"
            >{{navList}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
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
          path: '/about'
        }
      ]
    }
  },
  methods: {
    change: function (index, item) {
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
    scrollAnimation (targetY) {
      // 获取当前位置方法

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
      ScrollTop(this.$parent.$children[1].getTop()[index] - 63, 300)
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
#root {
  height: 100%;
  position: fixed;
  width: 70px;
  background: rgba(0, 0, 0, 0.8);
  color: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  z-index: 3;
  transition: all 0.75s;
}

#root:hover {
  width: 180px;
  transition: all 0.75s;
}

#new-book {
  opacity: 1;
  width: 18px;
  padding: 50px 27px;
  position: absolute;
  top: 0;
  font-size: 16px;
}

#nav-word {
  opacity: 1;
  position: absolute;
  top: 45vh;
  color: #999;
}

#root:hover #new-book,
#root:hover #nav-word {
  opacity: 0;
}

#logo {
  opacity: 0;
  height: 140px;
  background: url(http://bkzs.sxu.edu.cn/images/2019-07/d451653d059c4a6f843ca1a4a9621b36.gif)
    no-repeat;
  background-size: 75%;
  background-position: center;
}

#root:hover #logo {
  opacity: 1;
  transition: all 0.75s;
}

#main {
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}

#root:hover #main {
  opacity: 1;
}

#main > ul {
  margin-top: 10px;
}

.a-text {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 14px;
  padding: 10px 43px;
  font-weight: 600;
  width: 170px;
  color: #f5f5f5;
  letter-spacing: 7px;
  position: relative;
  text-align: center;
  cursor: pointer;
}

.a-text:hover {
  color: #099;
  transition: all 0.75s;
}

.ul-show {
  opacity: 0;
}

#root:hover .ul-show {
  opacity: 1;
}

.list-text {
  opacity: 0;
  font-size: 14px;
  height: 0;
  color: #f5f5f5;
  padding: 0 48px;
  letter-spacing: 4px;
  width: 160px;
  text-align: center;
  line-height: 31px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.75s;
}
.list-text:hover {
  color: #099;
  transition: all 0.75s;
}

.list-hover {
  opacity: 1;
  height: 31px !important;
  transition: all 0.75s;
}
</style>
