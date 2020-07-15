<template>
  <div class="in-school">
    <img src="http://bkzs.sxu.edu.cn/images/2019-07/a74bf07dd058456f9215d79e60e835fa.png" width="100%" />
    <router-link to="/home">&lt;返回主菜单</router-link>
    <span>校内生活</span>
    <ul>
      <li @click="select(1)">住在山大</li>
      <li @click="select(2)">便利生活</li>
      <li @click="select(3)">吃在山大</li>
      <li @click="select(4)">大型活动</li>
      <li @click="select(5)">多彩社团</li>
      <li @click="select(6)">学生组织</li>
    </ul>
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

a{
  position:absolute;
  top:4%;
  left:6%;
  font-size:10px;
}

div.in-school span{
  display:block;
  position:absolute;
  left:6%;
  top:27%;
  font-size: 18.75px;
  color: #ffffff;
  font-weight: 700;
}
ul li{
  font-size: 12px;
  font-weight: 400;
  display:inline-block;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width:16.667%;
  margin-top:-4px;
  padding:20px 0;
  background-color: #fff9e7;
}

</style>
