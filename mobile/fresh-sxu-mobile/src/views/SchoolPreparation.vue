<template>
  <div class="school-preparation">
    <div style="position: relative;">
        <div style="position: absolute; top: 30px; left: 20px; font-size: 1rem; color: white;">
        <router-link to="/home">&lt; 返回主菜单</router-link></div>
        <div class="bgi"></div>
        <h1 style="position: absolute; bottom: 20px; left: 20px; font-size: 1.1rem; color: white;">入学准备</h1>
    </div>
    <div id="naver">
        <ul>
            <li @click="select(1)"><span>军训小贴士</span></li>
            <li @click="select(2)"><span>到校方式</span></li>
            <li @click="select(3)"><span>报道流程</span></li>
            <li @click="select(4)"><span>物品准备</span></li>
        </ul>
    </div>

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
.school-preparation{
  background: #fff9e7;
  width:100%;
  overflow:hidden;
}

.bgi{
    background-image: url("http://bkzs.sxu.edu.cn/images/2019-07/d88f160d4fa045b6be772e0293b8e6b0.png");
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
    /* font-size: 80%; */
}

</style>
