<template>
  <div id="app">
    <div id="start">
      <img src="../../public/img/2020.png" alt="" id="startPicture">
      <button id="startButton" class="button-animation" @click="jump">
        <span>开始阅读</span>&nbsp;&nbsp;
          <i></i>
      </button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  methods: {
    jump () {
      this.$parent.$children[0].isFirst = true
      setTimeout(() => {
        this.$parent.$children[0].isFirst = false
      }, 2500)
      this.$router.push({ path: '/enter_school' })
    }
  }
}
</script>

<style scoped>
i {
    vertical-align: middle;
}

#start {
  position: relative;
  width: 100%;
  height: 100vh;
  background:url(http://bkzs.sxu.edu.cn/images/2019-07/35982080e0bc4df88657e01e05e7c20b.jpg) no-repeat;
  background-size: 100% 100% ;
}

#startPicture {
  position: absolute;
  left:50%;
  top:50%;
  width: 1048px;
  margin-left: -524px;
  margin-top: -335px;
}

#startButton {
  position:absolute;
  font-size: 30px;
  left: 80%;
  top: 70%;
  width: 250px;
  height: 75px;
  line-height: 45px;
  color: white;
  background-color: transparent;
  transition: all .5s;
  font-family: Arial, Helvetica, sans-serif;
}

#startButton:hover {
  /* transform: scale(1.1) translateX(20px);
  transition: all .5s;
  cursor: pointer; */
  border: 2px solid #fff;
}

</style>
