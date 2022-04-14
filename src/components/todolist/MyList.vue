<template>
  <div class="todo-list">
    <ul>
        <transition-group name="hello" appear>
        <MyItem v-for="item in todos" :key="item.id" :todo="item" :handDelete="handDelete"  />
        </transition-group>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  name: "MyList",
  props:['todos','handDelete'],
  components:{
      MyItem
  },

 
};
</script>

<style  scoped>
.todo-list{
    width: 100%;
}
ul{
    margin: 0;
    padding: 0;
    margin: 10px 0;
}
.hello-enter-active {
  animation: move .5s;
}
.hello-leave-active {
  animation: move .5s reverse;
}

/* .out-enter-active {
  animation: move .5s;
}
.out-leave-active {
  animation: move .5s reverse;
} */

@keyframes move {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes moveout {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
