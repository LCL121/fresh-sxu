<template>
  <div class="enter-school2">
    <p>坞城，山西大学的大部分专业都在此。坞城校区占地面积大，环境优美，是学习生活的不二选择。</p>
    <p>北区文瀛古朴典雅，南区令德现代别致。从北到南，有四季分明的渊智园，充满活力的鸿猷体育场，文科楼学习氛围浓厚，文瀛苑餐厅饭菜美味多样，点缀的小红楼宿舍更为山大增添几分浓厚的历史记忆。走到南操就到了令德区。与文瀛对应的令德餐厅、理科楼、宿舍都有自己的风格。华北最大的图书馆——山西大学图书馆满足你对知识的所有渴求。</p>
    <p> </p>
    <p> </p>
    <div class="academy">
        <ul>
            <li><a href=""><span>文学院</span></a></li>
            <li><a href=""><span>新闻学院</span></a></li>
            <li><a href=""><span>历史文化学院</span></a></li>
            <li><a href=""><span>哲学社会学学院</span></a></li>
            <li><a href=""><span>政治与公共管理学院</span></a></li>
            <li><a href=""><span>外国语学院</span></a></li>
            <li><a href=""><span>教育科学学院</span></a></li>
            <li><a href=""><span>经济与管理学院</span></a></li>
            <li><a href=""><span>法学院</span></a></li>
            <li><a href=""><span>初民学院</span></a></li>
            <li><a href=""><span>数学科学学院</span></a></li>
            <li><a href=""><span>计算机与信息技术学院</span></a></li>
            <li><a href=""><span>物理电子工程学院</span></a></li>
            <li><a href=""><span>化学化工学院</span></a></li>
            <li><a href=""><span>生命科学学院</span></a></li>
            <li><a href=""><span>环境与资源学院</span></a></li>
            <li><a href=""><span>体育学院</span></a></li>
            <li><a href=""><span>音乐学院</span></a></li>
            <li><a href=""><span>美术学院</span></a></li>
            <li><a href=""><span>环境工程系</span></a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterSchool2',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.enter-school2{
    height:700px;
    background: #fff9e7;
    margin: 15px;
}
p{
    text-indent: 2em;
    padding: 5px;
    width:100%;
    vertical-align:middle;
    font-size: 16px;
}
.academy{
    text-align:center;
    font-weight: bold;
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
    margin:10px;
}
.academy span{
    color:#000;
}
</style>
