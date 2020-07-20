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
            <li @click="select(1)"><span class="item1">百年山大</span></li>
            <li @click="select(2)"><span class="item2">坞城校区</span></li>
            <li @click="select(3)"><span class="item3">大东关校区</span></li>
            <li @click="select(4)"><span class="item4">东山校区</span></li>
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
  width:100%;
  overflow:hidden;
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
    padding:10px 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #808080;
    display:inline-block;
}

span{
    width: 25%;
    position: absolute;
    top:240px;
    font-size: 4vw;
}

.item1{
    left:3%;
}

.item2{
    left: 26%;
}
.item3{
    left: 49%;
}
.item4{
    right: 3%;
}

span:active{
    color: pink;
    font-size: 90%;
}

a{
  font-weight: bold;
}

</style>
