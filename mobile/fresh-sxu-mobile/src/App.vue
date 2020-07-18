<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

a {
  display: block;
  color: #fff;
}

a:visited {
  color: #fff;
}

a:hover {
  color: #fff;
}

body {
  background: rgba(0, 0, 0, 0.5);
}

#app {
  width: 100vw;
  height: 100vh;
}

:root {
  overflow-x: hidden;
}
</style>
