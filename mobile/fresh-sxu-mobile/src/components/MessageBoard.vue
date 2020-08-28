<template>
<div class="MessageBoards">
<div id="message-main">
  <span id="message-title" class="clearfix">留言板</span>
  <span id="message-number" class="clearfix">222</span>

  <input id="message-input" type="text" name="Message"  placeholder="写留言"  v-model="inputMessage"
  >

  <span id="bottom-search" class="iconfont" @click="PostData()"
  >&#xe603;</span>
</div>
<ul id="message-ul">
    <li class="board-text" v-for="(item,index) in MessageShow"
    :key= "index"
    >
      <p class="message-text">{{item.content}}</p>
      <span class="message-time">{{item.date}}</span>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'MessageBoard',
  data () {
    return {
      MessageShow: [{
        content: 'xxx',
        date: 'xxx',
        name: 'xxx'
      },
      {
        content: 'xxxasdasd',
        date: 'xxxasdasd',
        name: 'xxxasdasd'
      }
      ],
      inputMessage: ''

    }
  },
  methods: {
    PostData () {
      this.inputMessage = ''
    }
  }
}
</script>

<style scoped>

#message-main {
  position: relative;
  margin: 0 8%;
  padding-top: 20px;
  margin-bottom: 10px;
}

#message-title {
  float: left;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
}

#message-number {
  float: right;
  color: #a9a9a9;
}

#message-input {
  display: block;
  width: 100%;
  height: 35px;
  line-height: 30px;
  max-lines: 1;
  font-size: 16px;
  margin-top: 40px;
  letter-spacing: 3px;
  padding-left: 1em;
  padding-right: 2em;
  color: #515a6e;
  background-color: #D3D3D3;
  border-radius: 3px;
}

#bottom-search{
  position: absolute;
  top: 70px;
  right: 4px;
}

.board-text {
  width: 100%;
  background-color: #fff;
  padding: 20px 8%;
  padding-bottom: 40px;
  border-bottom: 1px solid #515a6e;
}

.message-text {
  width: 100%;
  word-wrap:break-word;
  color: #515a6e;
}

.message-time {
  float: right;
  color: #515a6e;
}

</style>
