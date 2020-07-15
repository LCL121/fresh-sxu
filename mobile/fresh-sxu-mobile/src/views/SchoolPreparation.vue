<template>
  <div class="school-preparation">
    <img src="http://bkzs.sxu.edu.cn/images/2019-07/d88f160d4fa045b6be772e0293b8e6b0.png" width="100%" />
    <router-link to="/home">&lt;返回主菜单</router-link>
    <span>入学准备</span>
    <ul>
      <li @click="select(1)">军训小贴士</li>
      <li @click="select(2)">到校方式</li>
      <li @click="select(3)">报道流程</li>
      <li @click="select(4)">物品准备</li>
    </ul>
    <school-preparation1 v-if="selected === 1"></school-preparation1>
    <school-preparation2 v-else-if="selected === 2"></school-preparation2>
    <school-preparation3 v-else-if="selected === 3"></school-preparation3>
    <school-preparation4 v-else></school-preparation4>
  </div>
</template>

<script>
import SchoolPreparation1 from '@/components/SchoolPreparation/SchoolPreparation1.vue'
import SchoolPreparation2 from '@/components/SchoolPreparation/SchoolPreparation2.vue'
import SchoolPreparation3 from '@/components/SchoolPreparation/SchoolPreparation3.vue'
import SchoolPreparation4 from '@/components/SchoolPreparation/SchoolPreparation4.vue'

export default {
  name: 'SchoolPreparation',
  data () {
    return {
      selected: 1
    }
  },
  components: {
    SchoolPreparation1,
    SchoolPreparation2,
    SchoolPreparation3,
    SchoolPreparation4
  },
  methods: {
    select (index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
div.school-preparation a{
  position:absolute;
  top:4%;
  left:6%;
  font-size:10px;
}
div.school-preparation span{
  display:block;
  position:absolute;
  left:6%;
  top:27%;
  font-size: 18.75px;
  color: #ffffff;
  font-weight: 700;
}

div.school-preparation ul li{
  font-size: 12px;
  font-weight: 400;
  display:inline-block;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width:25%;
  margin-top:-4px;
  background-color: #fff9e7;
}

</style>
