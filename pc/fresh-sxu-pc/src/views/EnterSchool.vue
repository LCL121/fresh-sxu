<template>
<div id="navRoot">
  <Banner/>
</div>
</template>

<script>

import Banner from '../components/Banner'
export default {
  name: 'EnterSchool',
  components: {
    Banner
  },
  data () {
    return {
    }
  },
  methods: {
    jump () {
      this.$router.push({ path: '/shool_preparation' })
    },
    date () {
      return [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>
</style>
