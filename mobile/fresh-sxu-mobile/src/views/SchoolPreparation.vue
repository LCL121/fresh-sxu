<template>
  <div class="school-preparation">
    <router-link to="/home">返回主菜单</router-link>
    SchoolPreparation
    <ul>
      <li @click="select(1)">1</li>
      <li @click="select(2)">2</li>
      <li @click="select(3)">3</li>
      <li @click="select(4)">4</li>
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
</style>
