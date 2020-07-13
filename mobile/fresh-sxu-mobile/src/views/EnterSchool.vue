<template>
  <div class="enter-school">
    <router-link to="/home">返回主菜单</router-link>
    EnterSchool
    <ul>
      <li @click="select(1)">1</li>
      <li @click="select(2)">2</li>
      <li @click="select(3)">3</li>
      <li @click="select(4)">4</li>
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
</style>
