<template>
  <div class="enter-school">
    <div class="enter-school-head">
      <router-link
        to="/home"
        class="enter-school-head-link"
      >&lt; 返回主菜单</router-link>
      <div class="enter-school-head-title">走进山大</div>
    </div>
    <ul>
      <li @click="select(1)">百年山大</li>
      <li @click="select(2)">大东关篇</li>
      <li @click="select(3)">坞城篇</li>
      <li @click="select(4)">东山篇</li>
    </ul>
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
.enter-school-head {
  height: 150px;
  width: 100%;
  background: url(http://bkzs.sxu.edu.cn/images/2019-07/08b0fdfd58ea4cd1a27e0005c97bd04b.jpg)
    no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.enter-school-head-link {
  position: absolute;
  top: 30px;
  left: 20px;
  font-size: 10px;
  color: white;
}

.enter-school-head-title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 18.75px;
  font-weight: 700;
  color: white;
}

ul {
  display: flex;
}

ul li {
  flex: 1;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 10px;
}
</style>
