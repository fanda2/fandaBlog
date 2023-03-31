<template>
  <div class="p_content">
    <div class="skill_item" v-for="(item,i) in skill" :key="i">
      <span>{{item.skillname}}</span>
       <Progress :percent="item.value" :stroke-color="['#108ee9', '#87d068']" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skill: [
        { skillname: "HTML", value: 42 },
        { skillname: "CSS", value: 44 },
        { skillname: "JavaScript", value: 43 },
        { skillname: "Vue", value: 30 },
        { skillname: "C++", value: 35 },
        { skillname: "Node.js", value: 30 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.p_content {
  width: 98%;
  min-width: 250px;
  margin: 10px auto;
  padding: 0 10px;
 border-radius: 10px;
  box-shadow: 4px 4px 4px #ccc,-3px -3px 4px rgb(238, 238, 238);
}
.skill_item {
  display: flex;
  line-height: 50px;
  justify-content: space-between;
  span {
    color: #108ee9;
    font-size: 14px;
  }
}
.ivu-progress {
  width: 70%;
}
</style>
>
