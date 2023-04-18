<template>
 <div class="todo_main">
          <div class="todo-container">
            <MyHeader @addTodo="addTodo" />
            <MyList :todos="todolist" :handDelete="handDelete" />
            <hr />
            <MyFooter
              :todos="todolist"
              @checkTodoAll="checkTodoAll"
              @clearAll="clearAll"
            />
          </div>
        </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "@/components/todolist/MyHeader.vue";
import MyList from "@/components/todolist/MyList.vue";
import MyFooter from "@/components/todolist/MyFooter.vue";
export default {
  name: "todolist",
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      todolist: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(x) {
      this.todolist.unshift(x);
    },
    //选择
    checkTodo(id) {
      this.todolist.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除
    handDelete(id) {
      this.todolist = this.todolist.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全选
    checkTodoAll(status) {
      this.todolist.forEach((todo) => {
        todo.done = status;
      });
    },
    //清除已经完成的todo
    clearAll() {
      this.todolist = this.todolist.filter((todo) => {
        return !todo.done;
      });
    },
    todoEdit(Msg, data) {
      this.todolist.forEach((todo) => {
        if (todo.id === data.id) todo.title = data.title;
      });
    },
  },
  watch: {
    todolist: {
      deep: true, //开启深度监视
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    (this.pubid = pubsub.subscribe("checkTodo", (MsgName, data) => {
      this.checkTodo(data);
    })),
      (this.pubid2 = pubsub.subscribe("todoEdit", this.todoEdit));
  },
  beforeUnmount() {
    pubsub.unsubscribe(this.pubid);
    pubsub.unsubscribe(this.pubid2);
  },
};
</script>

<style lang="less" scoped>
.todo-main{
    width: 100%;
    margin-top: 10px;

}
.todo-container {
  width: 98%;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  background: #acb2bb;
}
.code {
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
}
</style>
