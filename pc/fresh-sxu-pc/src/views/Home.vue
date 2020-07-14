<template>
  <div class="home">
    <router-link to="/enter_school">走进山大</router-link>
    <router-link to="/shool_preparation">入学准备</router-link>
    <router-link to="/in_school">校内生活</router-link>
    <router-link to="/outside_school">校外生活</router-link>
    <router-link to="/other_info">其他信息</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
