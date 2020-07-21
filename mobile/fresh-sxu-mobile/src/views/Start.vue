<template>
  <div class="start">
    <div class="mask">
      <!-- 背景图片 -->
      <div style="position: absolute; top: 5rem; text-align: center; z-index: 1;">
        <!-- 中部 -->
        <div class="gohome">
          <img
            :src="`${publicPath}img/2020.png`"
            alt=""
          >
          <router-link to="/home"><span>打开手册</span></router-link>
        </div>
      </div>
      <div>
        <!-- 下方 -->
        <p><span>山西大学计算机与信息技术学院-开源软件协会出品</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.start {
  position: relative;
  background: url("http://bkzs.sxu.edu.cn/images/2019-07/2697caa07b054378829225ef872196f2.jpg") no-repeat center;
  width: 100vw;
  height: 100vh;
  filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
  background-size: 200% 100%;
  overflow: hidden;
}
.mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.3);
}
.gohome {
  position: relative;
  /* background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/25bf5b5aabbd4037857b86811838ec62.png"); */
  /* background-repeat: no-repeat; */
  width: 100%;
  top:4rem;
}

.gohome img {
  width: 140%;
  margin-left: -20%;
}

.gohome span {
  border: 1px solid white;
  font-size: 14px;
  padding: 8px 10px;
  margin: 5px;
  border-radius: 10px;
  position: relative;
  top:-3rem;
}

p {
  position: absolute;
  bottom: 3rem;
  text-align: center;
  z-index: 1;
  width: 100%;
  color: white;
  font-size: 12px;
}
</style>
