<template>
    <div class="about">
    <div style="position: relative;">
        <div style="position: absolute; top: 30px; left: 20px; font-size: 1rem; color: white;">
        <router-link to="/home" class="back">&lt; 返回主菜单</router-link></div>
        <div class="bgi"></div>
        <h1 style="position: absolute; bottom: 20px; left: 20px; font-size: 1.1rem; color: white;">关于我们</h1>
    </div>

    <div class="text-content">
        <p>山西大学 新生手册</p>
        <p>技术支持：山西大学计算机与信息技术学院创新创业中心——开源软件协会</p>
        <p>代码开源:<a href="https://github.com/LCL121/fresh-sxu">GitHub</a></p>
        <hr>
        <h2>贡献者（排名不分先后）:</h2>
        <h3>特别感谢以下组织与同学参与本新生手册的撰写工作</h3>
        <h3>网站实现</h3>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会：</p>
        <p>雷晨龙 王青 陈舜泽 夏江 史佳豪</p>
        <h3>网站设计</h3>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会：</p>
        <p>王青</p>
        <h3>网站文案撰写</h3>
        <p>山西大学学生社团联合会</p>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会：</p>
        <p>李文婧</p>
        <h3>图片来源(遗漏了一些红领巾，欢迎来报道)</h3>
        <p>牛泽海 冯旭 宋小奚 王星凯 王金凤 山西大学学生社团联合会 山西大学电视台 山西大学电台</p>
        <h2>往期贡献者</h2>
        <h3>网站实现</h3>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会：</p>
        <p>崔晋瑜 李政兴 杨九懿 雷晨龙 李润泽 张博淇 尹智轩</p>
        <h3>网站设计</h3>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会：</p>
        <p>王青</p>
        <h3>网站文案撰写</h3>
        <p>山西大学学生社团联合会</p>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会：</p>
        <p>郭梓莹 石佳</p>
        <h3>图片来源</h3>
        <p>牛泽海 冯旭 宋小奚 王星凯 王金凤 山西大学学生社团联合会 山西大学电视台 山西大学电台</p>
        <h3>设计参考</h3>
        <h3>电脑端设计</h3>
        <p><a href="http://www.qsc.zju.edu.cn/freshman/">浙江大学新生手册</a></p>
        <p><a href="http://life.shanghaitech.edu.cn/fresh/">上海科技大学迎新网</a></p>
        <h3>补充</h3>
        <p>此新生手册于2020年7月完成第二版的过渡版本，由于各种不可抗力因素，上线略晚，内容准备仓促，我们将会继续迭代，若存在浏览体验不好的情况，望海涵。欢迎大家提出意见，如果有好的想法或者想参与新生手册的更新迭代，请随时联系负责人：雷晨龙 QQ1391436522</p>
        <p>如果有好看的图片也欢迎投稿！！邮箱：1391436522@qq.com</p>
        <p>另外，欢迎大家加入山西大学开源软件协会，一起玩耍，一起成长！</p>
        <div class="blank"></div>
    </div>

  </div>
</template>

<style scoped>

.about{
  background: #fff9e7;
  width:100%;
  overflow:hidden;
}
.bgi{
  background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/a79806ff9ab54b1ea6f084ac6906cf7c.jpg");
  background-size: 100% 230px;
  background-repeat: no-repeat;
  width:100%;
  height:230px;
}

h2,h3{
  padding:8px 10px;
}

.text-content p{
    display:inline-block;
    padding: 5px;
    line-height: 25px;
    vertical-align:middle;
}

.text-content a{
  display: inline-block;
  color: purple;
  text-decoration: underline;
}

.back{
  font-weight: bold;
}

.blank{
  height:100px;
}

</style>
