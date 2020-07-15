<template>
  <div class="enter-school">
    <div style="position: relative;">
      <div style="position: absolute; top: 30px; left: 20px; font-size: 1rem; color: white;">
        <router-link to="/home">&lt; 返回主菜单</router-link></div>
        <div class="bgi"></div>
        <h1 style="position: absolute; bottom: 20px; left: 20px; font-size: 1.1rem; color: white;">走进山大</h1>
      </div>

    <div id="naver">
      <ul>
      <li @click="select(1)"><span>百年山大</span></li>
      <li @click="select(2)"><span>坞城校区</span></li>
      <li @click="select(3)"><span>大东关校区</span></li>
      <li @click="select(4)"><span>东山校区</span></li>
    </ul>
    </div>

    <enter-school1 v-if="selected === 1"></enter-school1>
    <enter-school2 v-else-if="selected === 2"></enter-school2>
    <enter-school3 v-else-if="selected === 3"></enter-school3>
    <enter-school4 v-else></enter-school4>
  </div>
</template>

<script>
import EnterSchool1 from '@/components/EnterSchool/EnterSchool1.vue'
import EnterSchool2 from '@/components/EnterSchool/EnterSchool2.vue'
import EnterSchool3 from '@/components/EnterSchool/EnterSchool3.vue'
import EnterSchool4 from '@/components/EnterSchool/EnterSchool4.vue'

export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1
    }
  },
  components: {
    EnterSchool1,
    EnterSchool2,
    EnterSchool3,
    EnterSchool4
  },
  methods: {
    select (index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
.enter-school{
  background: #fff9e7;
  border-radius: 10px;
}
.bgi{
  background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/08b0fdfd58ea4cd1a27e0005c97bd04b.jpg");
  background-size: 100% 230px;
  background-repeat: no-repeat;
  width:100%;
  height:230px;
}
#naver{
    text-align:center;
    font-weight: bold;
    background: #fff9e7;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #808080;
    display:inline-block;
}

li{
    float: left;
    padding:10px;
    margin:0px;
}

span:active{
  color: pink;
}
</style>
