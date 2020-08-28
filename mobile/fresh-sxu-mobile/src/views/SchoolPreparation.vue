<template>
  <div id="school-preparation">
    <Banner   :getTop='getTop' />
    <div id="goods">
    <div id="goods-img" class="img">
      <span id="right-next" class="iconfont next"
      @click="JumpNext()"
      >&#xe602;</span>
    </div>
    <div  class="text">
        <div class="title">物品准备</div>
        <div class="main-text">
          <h3>等待2020最新政策出台，我们将第一时间更新，请保持关注。下面是一些经验总结</h3>
          <h4>证件资料类</h4>
          <h5>“两证一书”：</h5>
          <p>▷ 身份证、</p>
          <p>▷ 高考准考证、</p>
          <p>▷ 录取通知书。建议身份证正反两面复印件2份，同时户口本户主页和本人页复印件两份</p>
          <h5> 档案：</h5>
          <p>▷ 团员档案（团员证以及转团组织关系）、</p>
          <p>▷ 学籍档案（灰常重要！要从高中学校那里拿过来，切记不可开封）、</p>
          <p>▷ 户口迁移证明（需要把户口迁到学校的童鞋需要带）、</P>
          <p>▷ 贫困证明材料（这个在申请助学金的时候会用到）、</p>
          <p>▷ 生源地贷款回执单（借着生源地贷款的童鞋一定要记得带上哦）</p>
          <p><span>照片</span>（一寸两寸免冠照电子版纸质版，后续会大量使用）</p>
          <p><span>现金</span>（虽然现在大多数地方可以刷卡或在线支付，但还是带点以备不时之需）</p>
          <h4>生活用品类</h4>
          <h5>服饰</h5>
          <p>▷ 两季衣物（军训过后太原的天气会渐渐转凉，记得带几件秋装，棉袄类的冬装可以国庆假期再带来。）</p>
          <p>▷ 正装（大学有很多场合需要穿正装，像社团组织开全体大会、辩论赛、参与大型活动的工作。因此一身合适的正装很有必要。有的学院开学后也会组织统一订购，许西也有两家正装店，同学们可自行安排。）</p>
          <h5>宿舍用品</h5>
          <p>▷ 床帘（有需要隐私空间的同学可考虑购买，最好选择遮光效果更优秀的）</p>
          <p>▷ 衣架</p>
          <p>▷ 洗漱用品</p>
          <p><span>床上用品</span>（一般学校会统一采购，提前关注下学校通知书里附带的入学须知）</p>
          <h5>电子产品</h5>
          <p>▷ 手机</P>
          <p>▷ 耳机</p>
          <p>▷ 充电器</p>
          <p>▷ 电脑（可以根据专业的需要再决定何时购买，比如文科类对电脑需求不高的专业可延迟购买,有些专业是不允许带电脑的哦）</p>
          <h4>学习用品类</h4>
          <p>▷ 台灯
          <p>▷ 书包</p>
          <p>▷ 笔记本</p>
          <p>▷ 笔</p>
          <p>▷英语四、六级单词书</p>
          <p>▷ 自己感兴趣的书籍</p>
          <h4>药品类</h4>
          <p>▷ 创可贴（必备）、防中暑药、感冒药、止泻药（以防水土不服拉肚子）、退烧药</p>
        </div>
    </div>
    </div>

    <div id="process">
      <div id="process-img" class="img"></div>
      <div class="text">
        <div class="title">报道流程</div>
        <div class="main-text">
          <h3>报到时间：</h3>
          <p>2020年9月6日</p>
          <h3>报到地点：</h3>
          <p>1.坞城校区：初民广场</p>
          <p>2.大东关校区：校前广场</p>
          <h3>报到流程：</h3>
          <p>1.新生注册。</p>
          <p>   学生持录取通知书、本人身份证、高考准考证，前往注册地点（坞城校区：文体馆；大东关校区：主教楼大厅）进行注册及图像采集。</p>
          <p>2.办理住宿。</p>
          <p>   学生持加盖注册章的录取通知书前往学校公寓中心，办理宿舍入住手续。</p>
          <p>3.学生将加盖注册章的录取通知书交回院系。</p>
          <h3>联系电话：</h3>
          <p>1.教务处：0351-7010288。</p>
          <p>2.学生工作部：0351-7010200。</p>
          <p><strong>注：</strong></p>
          <p>报到完成后，接下来的几天学校会安排一些事情：入学教育、体检、校史教育、团队心理辅导、图书馆信息素养教育发放教材及军训服装、激活校园卡、党团组织关系接收等。期间保持手机的畅通，注意关注老师发布的消息，准时参加。</p>
          <h3>激活校园卡</h3>
          <p>具体的时间辅导员会及时下达通知，一般是一个学院同一个时间，大家注意查看Q群或者微信群哦</p>
          <h3>党团组织关系接收</h3>
          <p>1、新生党员入学后一周内将党员组织关系介绍信和党员档案材料交给学院（系）党委（党总支）。学校党委组织部将安排对新生党员进行资格审查，并办理党员组织关系接收手续。负责部门：组织部；联系电话：0351-7011715。</p>
          <p>2、新生团员组织关系材料（包括入团申请书、入团志愿书、入学前所在团组织出具的团组织关系介绍信或证明函件、团员证等），由各院系团委（团总支）统一接收。负责部门：校团委；联系电话：0351-7010244。</p>
          <p>请各院系认真组织安排，保证各项工作有序进行。如有特殊情况，请与相关部门及时联系。</p>
        </div>
      </div>
    </div>

    <div id="way">
      <div id="way-img" class="img"></div>
      <div class="text">
        <div class="title">到校方式</div>
        <div class="main-text">
          <p>“报到当天,到达太原会有山西大学的学长学姐在太原武宿机场、高铁站（太原南站）、火车站接站哦！”</p>
          <h4>坞城校区（太原市小店区坞城路92号）</h4>
          <p><strong>高铁</strong></p>
          <p>如果乘坐高铁的话，最好选择太原南站为终点站，再由南站搭乘868路、861路、826路、849路公交车到达山西大学南门，共经过一站，车费一元。但鉴于大家新生到校可能会带很多行李，这时候也可以选择乘坐出租车，出租车费大概在8～12元。</p>
          <p><strong>飞机</strong></p>
          <p>乘坐飞机到达<strong>太原武宿机场</strong>，可以乘坐机场巴士到太原南站，之后搭乘<strong>868路、861路、826路、849路公交车</strong>到达山西大学南门，共经过一站，车费一元。不过大家可能会携带行李不太方便，乘坐出租车到达学校的费用在20元左右。</p>
          <p><strong>火车</strong></p>
          <p>乘坐火车到达太原站，可以乘坐821路公交车，用时一小时左右到达山西大学坞城校区北门附近，车费一元（等公交用时较长）。搭乘出租车的费用在20元左右。</p>
          <h4>大东关校区（太原市杏花岭区大东关红沟南街36号）</h4>
          <p><strong>高铁</strong></p>
          <p>如果乘坐高铁<strong>最好选择太原东站</strong>为终点站。之后步行460米到达小东门公交站，乘坐904路公交车到达府东街红灯路口站，步行导航十分钟到达山西大学大东关校区，用时30分钟左右，车费一元。搭乘出租车的费用在10元左右。</p>
          <p>万一终点站选成了太原南站，可以在太原南站搭乘861路公交车经20站到达红沟路府东街口站，大约用时一个小时，车费一元。如果搭乘出租车，费用在30元左右。</p>
          <p><strong>飞机</strong></p>
          <p>从太原武宿机场到达山西大学大东关校区，可以乘坐机场巴士到长风街东口公交站，之后步行至建设南路长风街口公交站搭乘<strong>861路公交车</strong>经过10站到达红沟路府东街口公交站，用时一小时左右，费用17元。若乘坐出租车费用在45元左右。</p>
          <p><strong>火车</strong></p>
          <p>从太原站到达山西大学大东关校区，可以从太原站上车，搭乘81路、861路、816路、830路公交车经三站到达红沟路府东街口公交站，用时大约30分钟，花费一元，之后步行导航至山西大学。搭乘出租车费用在8元左右。</p>
          </div>
      </div>
    </div>

    <div id="tip">
      <div id="tip-img" class="img"></div>
      <div class="text">
        <div class="title">军训小贴士</div>
        <div class="main-text">
          <p>▷ 做好防晒防暑工作。不要以为防晒是精致小仙女的事情，事实上，涂抹防晒霜能避免晒黑的同时也避免晒伤。要记得出门前二十分钟涂抹，便于吸收。而且在炎炎烈日下每天涂抹一次是远远不够的哦，可随身携带，每个两个小时涂抹一次。</p>
          <p>▷ 及时补水。室外运动水分流失很严重，教官一般会视情况给予充分的补水时间。同学们可以准备保温水杯、大容量的水杯，不喝冰水。</p>
          <p>▷ 军训期间可能食欲不太好，但一日三餐依然要保证，尤其是早饭，不然可能经受不住高强度的训练。饮食也要尽可能地清淡，避免暴饮暴食。</p>
          <p>▷ 保证充足的睡眠，早睡早起，调节生物钟。</p>
          <p>▷  训练期间，若身体不适不要硬撑，及时向教官打报告。</p>
          <p>▷ 提前购买吸汗鞋垫，学校军训统一胶鞋，没有鞋垫会比较磨脚。</p>
          <p>▷ 多备几件棉质内衣、T恤。</p>
          <p>军训期间定期会有宿舍内务检查评比，建议宿舍里不要有过多杂物，以保持整洁，方便内务整理。</p>
          <p>军训是步入大学的第一课，是对身体与意志的双重磨练。军训可以促进我们与新同学的感情，同时亲身感受教官们的军人担当与爱国情怀。</p>
          <p>这里也祝愿同学们收获满满，乘风破浪。</p>
          </div>
      </div>
    </div>

    <MessageBoard/>
    <ReturnTop/>
</div>
</template>

<script>
import SchoolPreparation1 from '@/components/SchoolPreparation/SchoolPreparation1.vue'
import SchoolPreparation2 from '@/components/SchoolPreparation/SchoolPreparation2.vue'
import SchoolPreparation3 from '@/components/SchoolPreparation/SchoolPreparation3.vue'
import SchoolPreparation4 from '@/components/SchoolPreparation/SchoolPreparation4.vue'
import ReturnTop from '@/components/ReturnTop.vue'
import Banner from '@/components/Banner.vue'
import MessageBoard from '@/components/MessageBoard.vue'

export default {
  name: 'EnterSchool',
  data () {
    return {
      selected: 1,
      publicPath: process.env.BASE_URL
    }
  },
  components: {
    SchoolPreparation1,
    SchoolPreparation2,
    SchoolPreparation3,
    SchoolPreparation4,
    Banner,
    ReturnTop,
    MessageBoard
  },
  methods: {
    JumpNext () {
      this.$router.push({ path: '/in_school' })
    },
    getTop () {
      var offTop = []
      offTop[0] = 0
      // 获取#weclome距离上边距的 px
      offTop[1] = document.getElementById('process').offsetTop
      //
      offTop[2] = document.getElementById('way').offsetTop
      offTop[2] = document.getElementById('tip').offsetTop
      return offTop
    }

  }

}
</script>

<style scoped>
#school-preparation {
  width: 100%;
  height: 100%;
}

#goods-img {
  background-image: url(../../public/img/goods.jpg);
}

#process-img{
  background-image: url(../../public/img/process.jpg);
  margin-top: 50px;
}

#way-img {
  background-image: url(../../public/img/way.jpg);
}

#tip-img {
  background-image: url(../../public/img/tip.jpg);
}

h4,
h5,
h6 {
  font-size: 15px;
}

h3 {
  font-size: 16px;
}

h2 {
  font-size: 18px;
}

</style>
