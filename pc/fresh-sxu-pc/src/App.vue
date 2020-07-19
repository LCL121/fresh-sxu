<template>
  <div id="app">
    <Banner v-show="$route.path !== '/'"/>
    <router-view/>
  </div>
</template>

<script>
import Banner from './components/Banner'

export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>

<style>

</style>
