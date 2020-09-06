<template>
  <div id="navRoot">
    <div id="about" class="body-w">
      <div id="top">
        <h3>山西大学新生手册</h3>
        <p>技术支持：山西大学计算机与信息技术学院创新创业中心——开源软件协会</p>
        <p>
          代码开源：
          <a href="https://github.com/LCL121/fresh-sxu" target="_blank">GitHub</a>
        </p>
        <h4>文案撰写</h4>
        <p>2.0版本 | 开源软件协会：李文婧</p>
        <p>1.0版本 | 山西大学学生社团联合会 开源软件协会：郭梓莹 石佳</p>

        <h4>网站实现</h4>
        <p>2.0版本 | 开源软件协会：雷晨龙 王青 陈舜泽 夏江 史佳豪</p>
        <p>1.0版本 | 开源软件协会：崔晋瑜 李政兴 杨九懿 雷晨龙 李润泽 张博淇 尹智轩</p>

        <h4>网站设计</h4>
        <p>王青</p>

        <h4>图片来源(遗漏了一些红领巾，欢迎来报道)</h4>
        <p>牛泽海 冯旭 宋小奚 王星凯 王金凤 山西大学学生社团联合会 山西大学电视台 山西大学电台</p>

        <h4>pc端设计参考</h4>
        <p>
          <a href="http://www.qsc.zju.edu.cn/freshman/" target="_blank">浙江大学新生手册</a>
          <a href target="_blank" id="a-sh">上海科技大学迎新网</a>
        </p>

        <h4>补充</h4>
        <p>此新生手册于2020年7月完成第二版的过渡版本，由于各种不可抗力因素，上线略晚，内容准备仓促，我们将会继续迭代，若存在浏览体验不好的情况，望海涵。</p>
        <p>欢迎大家提出意见，如果有好的想法或者想参与新生手册的更新迭代，请随时联系负责人雷晨龙 QQ：1391436522</p>
        <p>如果有好看的图片也欢迎投稿！！邮箱：1391436522@qq.com</p>
        <p>另外，欢迎大家加入山西大学开源软件协会，一起玩耍，一起成长！</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
export default {
  components: {
    Banner
  }
}
</script>

<style scope>
#about {
  line-height: 45px;
}
#top {
  margin: 20px 60px 20px 70px;
  letter-spacing: 2px;
  border: 1px solid #e1e4e8;
  padding: 75px;
  padding-top: 40px;
}
#a-sh {
  padding-left: 30px;
}
#about p {
  margin: 0;
  padding: 0;
  text-indent: 0;
}
#about h3 {
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 16px;
  padding: 0 8px 8px 0;
  font-size: 26px;
}
#about h4 {
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 5px;
  padding: 12px 8px 5px 0;
  font-size: 22px;
}
</style>
