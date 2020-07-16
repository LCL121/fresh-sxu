<template>
  <div class="home">
    <router-link to="/enter_school" class="enter-school">走进山大</router-link>
    <router-link to="/shool_preparation" class="school-pre">入学准备</router-link>
    <router-link to="/in_school" class="in-school">校内生活</router-link>
    <router-link to="/outside_school" class="outside-school">校外生活</router-link>
    <router-link to="/other_info" class="other-info">其他信息</router-link>
    <router-link to="/about" class="about">关于我们</router-link>
    <router-link to="/" class="back">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

div.home{
  width: 100%;
  height:100%;
  background: url(http://bkzs.sxu.edu.cn/images/2019-07/12a1c1d5b5684c9d8c204acfc7705707.jpg);
  background-position: 50%;
  background-size: 190% 100%;

}

a{
  border:2px solid #fff;
  border-radius: 10px;
  font-size: 24px;
  width: 130px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  /* margin-bottom: 20px; */
  background-color: transparent;
}

a.enter-school{
  position: absolute;
  top:12%;
  left:50%;

  margin-left: -66px;
}

a.school-pre{
  position: absolute;
  top:23%;
  left:50%;

  margin-left: -66px;
}

a.in-school{
  position: absolute;
  top:34%;
  left:50%;

  margin-left: -66px;
}

a.outside-school{
  position: absolute;
  top:45%;
  left:50%;

  margin-left: -66px;
}

a.other-info{
  position: absolute;
  top:56%;
  left:50%;

  margin-left: -66px;
}

a.about{
  position: absolute;
  top:67%;
  left:50%;

  margin-left: -66px;
}

a.back{
  position: absolute;
  top:78%;
  left:50%;

  margin-left: -66px;
}

</style>
