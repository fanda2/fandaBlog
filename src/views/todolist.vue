<template>
    <div class="main">
      <div class="content">
          <TodoList/>
      </div>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  name: "todolist",
  components: {
    TodoList,
  },
  mounted(){
    this.$store.state.toptitle="TodoList"
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  min-height: 900px;
  margin: 10px auto;
  background: white;
  display: flex;
   border-radius: 10px;
  justify-content: space-between;
}
.content{
  display: block;
  width: 100%;
   border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
  .pagenum{
    width: 100%;
    margin:50px auto;
    text-align: center;
  }
}
</style>
