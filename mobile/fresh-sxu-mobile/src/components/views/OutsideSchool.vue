<template>
  <div class="outside-school">
    <div style="position: relative;">
      <div style="position: absolute; top: 30px; left: 20px; font-size: 1rem; color: white;">
        <router-link to="/home">&lt; 返回主菜单</router-link></div>
        <div class="bgi"></div>
        <h1 style="position: absolute; bottom: 20px; left: 20px; font-size: 1.1rem; color: white;">校外生活</h1>
      </div>

    <div id="naver">
        <ul>
            <li @click="select(1)"><span class="item1">周边商圈</span></li>
            <li @click="select(2)"><span class="item2">风景名胜</span></li>
            <li @click="select(3)"><span class="item3">服务网点</span></li>
        </ul>
    </div>

    <outside-school1 v-if="selected === 1"></outside-school1>
    <outside-school2 v-else-if="selected === 2"></outside-school2>
    <outside-school3 v-else></outside-school3>
  </div>
</template>

<script>
import OutsideSchool1 from '@/components/OutsideSchool/OutsideSchool1.vue'
import OutsideSchool2 from '@/components/OutsideSchool/OutsideSchool2.vue'
import OutsideSchool3 from '@/components/OutsideSchool/OutsideSchool3.vue'

export default {
  name: 'OutsideSchool',
  data () {
    return {
      selected: 1
    }
  },
  components: {
    OutsideSchool1,
    OutsideSchool2,
    OutsideSchool3
  },
  methods: {
    select (index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
.outside-school{
  background: #fff9e7;
  width:100%;
  overflow:hidden;
}

.bgi{
  background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/08b0fdfd58ea4cd1a27e0005c97bd04b.jpg");
  background-size: 100% 230px;
  background-repeat: no-repeat;
  width:100%;
  height:230px;
}

#naver{
    text-align:center;
    font-weight: bold;
    background: #fff9e7;
    padding:10px 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #808080;
    display:inline-block;
}

span{
    width: 33.334%;
    position: absolute;
    top:240px;
    font-size: 4vw;
}

.item1{
    left:3%;
}

.item2{
    left: 34%;
}

.item3{
    right: 3%;
}

span:active{
    color: pink;
    font-size: 90%;
}

a{
  font-weight: bold;
}

</style>
