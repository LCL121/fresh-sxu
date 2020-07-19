<template>
<div id="navRoot">
</div>
</template>

<script>
export default {
  name: 'EnterSchool',
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
