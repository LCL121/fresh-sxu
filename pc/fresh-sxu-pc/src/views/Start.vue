<template>
  <div class="start">
    <!-- <router-link to="/home">to home</router-link> -->
    <div id="homeRoot">
      <div id="homePicture"></div>

      <button id="homeButton" @click="jump">
        <span>开始阅读</span>&nbsp;&nbsp;
        <span>
          <svg
            t="1594875603229"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1946"
            width="20"
            height="20"
          >
            <path
              d="M341.957209 959.354678c-12.893658 0-25.842575-4.425799-36.386722-13.467733-23.493064-20.10592-26.224268-55.426357-6.064113-78.891791L603.929736 511.789199l-304.423361-355.206978c-20.160155-23.465434-17.427928-58.786894 6.064113-78.891791 23.437805-20.024056 58.786894-17.373693 78.837556 6.064113l335.675132 391.620305c17.974373 20.952194 17.974373 51.875484 0 72.827679l-335.675132 391.620305C373.371686 952.717514 357.691565 959.354678 341.957209 959.354678z"
              p-id="1947"
              fill="#fff"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  methods: {
    jump () {
      this.$router.push({ path: '/enter_school' })
    }
  }

}
</script>

<style scoped>
#homeRoot {
  position: relative;
  width: 100vw;
  background: url(http://bkzs.sxu.edu.cn/images/2019-07/35982080e0bc4df88657e01e05e7c20b.jpg)
    no-repeat;
  height: 100vh;
  background-size: 100% 100%;
  overflow: hidden;
}

#homePicture {
  position: absolute;
  left: 50%;
  height: 400px;
  margin-left: -524px;
  margin-top: -295px;
  width: 1048px;
  height: 100vh;
  top: 50%;
  background: url(http://bkzs.sxu.edu.cn/images/2019-07/25bf5b5aabbd4037857b86811838ec62.png);
  background-size: 100%;
}

#homeButton {
  position: absolute;
  width: 208px;
  height: 70px;
  background: transparent;
  color: #fff;
  border: #000;
  top: 70%;
  right: 10%;
  margin-top: -35px;
  margin-left: -104px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}

#homeButton:hover {
    transform: scale(1.1) translateX(20px);
    transition: all .5s;
    cursor: pointer;
    border: 2px solid #fff;
}

</style>
