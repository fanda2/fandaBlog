import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "index",
        component: Index,
        meta: { title: '主页' }
    },
    {
        path: "/about",
        component: () =>
            import ("../views/about.vue"),
        name: "About",
        meta: { title: '关于我' }
    },
    {
        path: "/file",
        component: () =>
            import ("../views/file.vue"),
        name: "File",
        meta: { title: '归档' }
    },
    {
        path: "/chat",
        component: () =>
            import ("../views/chat.vue"),
        name: "Chat",
        meta: { title: '互动' }
    },
    {
        path: "/practice",
        component: () =>
            import ("../views/practice.vue"),
        name: "Practice",
        meta: { title: '实战项目' }
    },
    {
        path: "/detial",
        component: () =>
            import ("../views/detial.vue"),
        name: "Detial",
        meta: { title: '文章详情' }
    },
    {
        path: "/photo",
        component: () =>
            import ("../views/photo.vue"),
        name: "Photo",
        meta: { title: '图库' }
    },
    {
        path: "/space",
        component: () =>
            import ("../views/space.vue"),
        name: "Space",
        meta: { title: '空间' }
    },
    {
        path: "/todolist",
        component: () =>
            import ("../views/todolist.vue"),
        name: "TodoList",
        meta: { title: '待办事项' }
    },


];

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "梵大的小站"
    }
})


export default router;