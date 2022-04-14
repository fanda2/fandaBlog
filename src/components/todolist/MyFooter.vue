<template>
  <div class="todo-footer" v-show="total">
     <div class="left">
          <label><input type="checkbox" v-model="isAll"></label>
      <span>
          <span>已完成任务{{doneAll}}</span>/全部{{total}}
      </span>
     </div>
      <button class="btn btn-danger" @click="clearDone">清除已完成的任务</button>
  </div>
</template>

<script>
export default {
    name:"MyFooter",
    props:['todos'],
    data(){
        return{

        }
    },
    computed:{
        total(){
            return this.todos.length
        },
        doneAll(){
           return this.todos.reduce((pre,current)=>pre+(current.done? 1:0),0) 
        },
        isAll:{
            set(value){
                this.$emit('checkTodoAll',value)
            },
            get(){
                 return this.total===this.doneAll &&this.total>0
            }
        }
    },
    methods: {
         clearDone(){
          this.$emit('clearAll')
        }
    },
}
</script>

<style  scoped>
.todo-footer{
    width: 100%;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.left{
    line-height: 60px;
}

.btn{
width: 150px;
height: 40px;
margin-top:10px;
border-radius: 5px;
}
span{
    font-size: 16px;
    margin-left: 10px;
}
.btn-danger{
    border: none;
font-size: 16px;
color: white;
background: rgb(196, 83, 83);
}
</style>