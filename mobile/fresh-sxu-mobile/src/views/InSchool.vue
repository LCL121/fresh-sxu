<template>
  <div class="in-school">
    <div style="position: relative;">
        <div style="position: absolute; top: 30px; left: 20px; font-size: 1rem; color: white;">
        <router-link to="/home">&lt; 返回主菜单</router-link></div>
        <div class="bgi"></div>
        <h1 style="position: absolute; bottom: 20px; left: 20px; font-size: 1.1rem; color: white;">校内生活</h1>
    </div>
    <div id="naver">
        <ul>
            <li @click="select(1)"><span class="item1">住在山大</span></li>
            <li @click="select(2)"><span class="item2">吃在山大</span></li>
            <li @click="select(3)"><span class="item3">学生组织</span></li>
            <li @click="select(4)"><span class="item4">多彩社团</span></li>
            <li @click="select(5)"><span class="item5">大型活动</span></li>
            <li @click="select(6)"><span class="item6">便利生活</span></li>
        </ul>
    </div>

    <in-school1 v-if="selected === 1"></in-school1>
    <in-school2 v-else-if="selected === 2"></in-school2>
    <in-school3 v-else-if="selected === 3"></in-school3>
    <in-school4 v-else-if="selected === 4"></in-school4>
    <in-school5 v-else-if="selected === 5"></in-school5>
    <in-school6 v-else></in-school6>
  </div>
</template>

<script>
import InSchool1 from '@/components/InSchool/InSchool1.vue'
import InSchool2 from '@/components/InSchool/InSchool2.vue'
import InSchool3 from '@/components/InSchool/InSchool3.vue'
import InSchool4 from '@/components/InSchool/InSchool4.vue'
import InSchool5 from '@/components/InSchool/InSchool5.vue'
import InSchool6 from '@/components/InSchool/InSchool6.vue'

export default {
  name: 'InSchool',
  data () {
    return {
      selected: 1
    }
  },
  components: {
    InSchool1,
    InSchool2,
    InSchool3,
    InSchool4,
    InSchool5,
    InSchool6
  },
  methods: {
    select (index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
.school-preparation{
  background: #fff9e7;
  width:100%;
  overflow:auto;
}

.bgi{
  background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/a74bf07dd058456f9215d79e60e835fa.png");
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
    width: 16%;
    position: absolute;
    top:240px;
    font-size: 3.5vw;
}

.item1{
    left:3%;
}

.item2{
    left: 19%;
}
.item3{
    left: 34%;
}

.item4{
  right: 34%;
}

.item5{
  right: 19%;
}

.item6{
    right: 3%;
}

span:active{
    color: pink;
    font-size: 80%;
}

a{
  font-weight: bold;
}

</style>
