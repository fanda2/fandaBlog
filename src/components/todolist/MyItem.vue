<template>
    <div class="todo-item">
      <li class="">
        <label>
          <input
            type="checkbox"
            :checked="todo.done"
            @change="changedone(todo.id)"
          />
          <span v-show="!todo.isedit">{{ todo.title }}</span>
          <input
            v-show="todo.isedit"
            ref="inputtype"
            type="text"
            name=""
            id="title"
            :value="todo.title"
            @blur="handeSave(todo, $event)"
          />
        </label>
        <div class="right">
          <button class="btn btn-primery" @click="todoEdit(todo)">编辑</button>
          <button class="btn btn-danger" @click="todoDelete(todo.id)">
            删除
          </button>
        </div>
      </li>
    </div>
  
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo", "handDelete"],
  methods: {
    changedone(e) {
      pubsub.publish("checkTodo", e);
    },
    //删除
    todoDelete(id) {
      if (confirm("确定删除吗？")) {
        this.handDelete(id);
      } else {
        return;
      }
    },
    //编辑
    todoEdit(todo) {
      todo.isedit = true;
      this.$nextTick(function () {
        this.$refs.inputtype.focus();
      });

      //    this.$set(todo,'isEdit',true)
      //    pubsub.publish('todoEdit',e)
    },
    //失去焦点存储数据,真正实行修改逻辑
    handeSave(todo, e) {
      todo.isedit = false;
      if (e.target.value.trim() == "") return alert("输入内容不能为空！");
      const obj = { id: todo.id, title: e.target.value };
      pubsub.publish("todoEdit", obj);
    },
  },
};
</script>

<style scoped>
.todo-item {
  width: 100%;
}
li {
  list-style: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border-radius: 5px;
  line-height: 40px;
  background: rgb(226, 226, 226);
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
}
span {
  margin-left: 20px;
}
.right {
  display: none;
}
#title {
  line-height: 35px;
  font-size: 18px;
  margin-left: 20px;
  outline-style: none;
  padding: 0 5px;
  border: none;
  background: rgb(226, 226, 226);
}
.btn {
  width: 80px;
  line-height: 30px;
  border-radius: 5px;
  margin-left: 10px;
}
.btn-danger {
  border: none;
  font-size: 16px;
  color: white;
  background: rgb(196, 83, 83);
}
.btn-primery {
  border: none;
  font-size: 16px;
  color: white;
  background: rgb(91, 181, 241);
}
li:hover .right {
  display: block;
}
li:hover {
  background: rgb(77, 153, 124);
}
li:hover #title {
  background: rgb(77, 153, 124);
}

</style>
