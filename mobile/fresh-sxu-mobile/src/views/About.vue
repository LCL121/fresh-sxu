<template>
    <div id="about">
    <Banner   :getTop='getTop' />
    <div id="about0">
      <div id="about-img" class="img">

      </div>
      <div class="text">
        <div class="title">关于我们</div>
        <div>
          <p>山西大学 新生手册</p>
          <p>技术支持：山西大学计算机与信息技术学院创新创业中心——开源软件协会</p>
          <p>代码开源:<a href="https://github.com/LCL121/fresh-sxu"><span>GitHub</span></a></p>
          <br />
          <h2>贡献者（排名不分先后）</h2>
          <h3>特别感谢以下组织与同学参与本新生手册的撰写工作</h3>
          <h3>网站实现</h3>
          <p>2020版 | 开源软件协会：雷晨龙 ◇ 王青 ◇ 陈舜泽 ◇ 夏江 ◇ 史佳豪</p>
          <p>2019版 | 开源软件协会：崔晋瑜 ◇ 李政兴 ◇ 杨九懿 ◇ 雷晨龙 ◇ 李润泽 ◇ 张博淇 ◇ 尹智轩</p>
          <h3>网站设计</h3>
          <p>2020及2019版 | 开源软件协会：王青</p>
          <h3>网站文案撰写</h3>
          <h4>组织&社团（不分版本）</h4>
          <p>山西大学学生会 ◇ 山西大学学生社团联合会 ◇ 山西大学图书馆学生管理委员会 ◇ 山大报社 </p>
          <p>山大青年 ◇ 山西大学电视台 ◇ 山西大学有线广播电台 ◇ 君宇网通讯社</p>
          <p>开源软件协会 ◇ 山西大学自行车协会 ◇ Du百科俱乐部 ◇ 山西大学红枫志愿者协会 </p>
          <p>山西大学健美操协会 ◇ 教育知行社 ◇ 轮滑社 ◇ 演讲与口才协会 </p>
          <p>音乐爱好者协会 ◇ 英语沙龙学社 ◇ 羽林汉学学社 ◇ 山西大学天文协会 </p>
          <p>沙画协会 ◇ 民俗与非遗学社 ◇ 法之信仰同行社 ◇ 山西大学心理协会 </p>
          <p>印象刀画协会 ◇ 化学爱好者协会 ◇ 草木青学社</p>
          <h4>个人</h4>
          <p>2020版 | 开源软件协会：李文婧</p>
          <p>2020版 | 开源软件协会：李文婧</p>
          <h3>图片来源(遗漏了一些红领巾，欢迎来报道)</h3>
          <h4>组织&社团（不分版本）</h4>
          <p>山西大学学生会 ◇ 山西大学学生社团联合会 ◇ 山西大学图书馆学生管理委员会 ◇ 山大报社 </p>
          <p>山大青年 ◇ 山西大学电视台 ◇ 山西大学有线广播电台 ◇ 君宇网通讯社</p>
          <p>开源软件协会 ◇ 山西大学自行车协会 ◇ Du百科俱乐部 ◇ 山西大学红枫志愿者协会 </p>
          <p>山西大学健美操协会 ◇ 教育知行社 ◇ 轮滑社 ◇ 演讲与口才协会 </p>
          <p>音乐爱好者协会 ◇ 英语沙龙学社 ◇ 羽林汉学学社 ◇ 山西大学天文协会 </p>
          <p>沙画协会 ◇ 民俗与非遗学社 ◇ 法之信仰同行社 ◇ 山西大学心理协会 </p>
          <p>印象刀画协会 ◇ 化学爱好者协会 ◇ 草木青学社</p>
          <h4>个人（不分版本）</h4>
          <p>牛泽海 ◇ 冯旭 ◇ 宋小奚 ◇ 王星凯 ◇ 王金凤 </p>
          <br />
          <h2>设计参考</h2>
          <h3>电脑端设计</h3>
          <p><a href="http://www.qsc.zju.edu.cn/freshman/"><span>浙江大学新生手册</span></a></p>
          <p><a href="http://life.shanghaitech.edu.cn/fresh/"><span>上海科技大学迎新网</span></a></p>
          <h2>补充</h2>
          <p>此新生手册于2020年7月完成第二版的过渡版本，由于各种不可抗力因素，上线略晚，内容准备仓促，我们将会继续迭代，若存在浏览体验不好的情况，望海涵。欢迎大家提出意见，如果有好的想法或者想参与新生手册的更新迭代，请随时联系负责人：雷晨龙 QQ1391436522</p>
          <p>如果有好看的图片也欢迎投稿！！邮箱：1391436522@qq.com</p>
          <p>另外，欢迎大家加入山西大学开源软件协会，一起玩耍，一起成长！</p>
        </div>
     </div>
    </div>

    </div>
</template>

<script>
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'
import MessageBoard from '@/components/MessageBoard.vue'

export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1,
      publicPath: process.env.BASE_URL
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

  }

}
</script>

<style scoped>

#about-img{
  background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/a79806ff9ab54b1ea6f084ac6906cf7c.jpg");
}

span {
  color:#69c;
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
