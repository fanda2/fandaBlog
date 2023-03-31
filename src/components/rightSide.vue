<template>
  <div class="rside">
    <Message />
    <IpAbout />
     <Bubble/>
    <Progress/>
  </div>
</template>

<script>
import Message from "../components/myMessage.vue";
import IpAbout from "../components/ipAbout.vue";
import Bubble from '../components/pinkBubble.vue';
import Progress from "../components/Progress.vue"
export default {
    components:{
        Message,
        IpAbout,
        Bubble,
        Progress
    },
  data() {
    return{

    }
  },
};
</script>

<style>
.rside {
width: 200px;
  margin-left: 10px;
  border-radius: 10px;
}
</style>
