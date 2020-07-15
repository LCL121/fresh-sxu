<template>
  <div class="other-info">
    <div style="position: relative;">
      <div style="position: absolute; top: 30px; left: 20px; font-size: 1rem; color: white;">
        <router-link to="/home">&lt; 返回主菜单</router-link></div>
        <div class="bgi"></div>
        <h1 style="position: absolute; bottom: 20px; left: 20px; font-size: 1.1rem; color: white;">其他信息</h1>
      </div>

    <div id="naver">
      <ul>
      <li @click="select(1)"><span>学习建议</span></li>
      <li @click="select(2)"><span>校园地图</span></li>
      <li @click="select(3)"><span>自我提升</span></li>
      <li @click="select(4)"><span>图书馆</span></li>
    </ul>
    </div>

    <other-info1 v-if="selected === 1"></other-info1>
    <other-info2 v-else-if="selected === 2"></other-info2>
    <other-info3 v-else-if="selected === 3"></other-info3>
    <other-info4 v-else></other-info4>
  </div>
</template>

<script>
import OtherInfo1 from '@/components/OtherInfo/OtherInfo1.vue'
import OtherInfo2 from '@/components/OtherInfo/OtherInfo2.vue'
import OtherInfo3 from '@/components/OtherInfo/OtherInfo3.vue'
import OtherInfo4 from '@/components/OtherInfo/OtherInfo4.vue'

export default {
  name: 'OtherInfo',
  data () {
    return {
      selected: 1
    }
  },
  components: {
    OtherInfo1,
    OtherInfo2,
    OtherInfo3,
    OtherInfo4
  },
  methods: {
    select (index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
.other-info{
  background: #fff9e7;
}

.bgi{
  background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/3ee008edc30a4e709dff116ea7adcfd3.jpg");
  background-size: 100% 230px;
  background-repeat: no-repeat;
  width:100%;
  height:230px;
}

#naver{
    text-align:center;
    font-weight: bold;
    background: #fff9e7;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #808080;
    display:inline-block;
}

li{
    float: left;
    padding:10px;
    margin:0px;
}
span:active{
  color: pink;
}
</style>
