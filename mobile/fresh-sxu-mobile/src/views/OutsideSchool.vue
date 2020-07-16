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
            <li @click="select(1)"><span>百年山大</span></li>
            <li @click="select(2)"><span>坞城校区</span></li>
            <li @click="select(3)"><span>大东关校区</span></li>
            <li @click="select(4)"><span>东山校区</span></li>
        </ul>
    </div>

    <outside-school1 v-if="selected === 1"></outside-school1>
    <outside-school2 v-else-if="selected === 2"></outside-school2>
    <outside-school3 v-else-if="selected === 3"></outside-school3>
    <outside-school4 v-else></outside-school4>
  </div>
</template>

<script>
import OutsideSchool1 from '@/components/OutsideSchool/OutsideSchool1.vue'
import OutsideSchool2 from '@/components/OutsideSchool/OutsideSchool2.vue'
import OutsideSchool3 from '@/components/OutsideSchool/OutsideSchool3.vue'
import OutsideSchool4 from '@/components/OutsideSchool/OutsideSchool4.vue'

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
    OutsideSchool3,
    OutsideSchool4
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

span{
    font-size: 2.7vw;
}

span:active{
    color: pink;
    font-size: 80%;
}
</style>
