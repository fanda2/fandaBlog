<template>
  <div class="todo-header">
      <input type="text" v-model="title" placeholder="请输入你的任务名称，按回车键结束" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:"MyHeader",
    data() {
        return {
            title:"",
        }
    },
    methods: {
        add(){
            if(this.title.trim()=="")
            {
                alert("输入内容不能为空")
            }
            else{
                  const todoObj={id:nanoid(),title:this.title,done:false,isedit:false};
                  this.$emit('addTodo',todoObj);
            }
            this.title=' '
        }
    },
}
</script>

<style  scoped>
.todo-header{
    width: 100%;
    line-height: 60px;
}
input{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 10px;
    border: 2px solid paleturquoise;
    outline-color: rgb(94, 170, 180);
}
</style>