import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "index",
        component: Index,
    },
    {
        path: "/about",
        component: () =>
            import ("../views/about.vue"),
        name: "About",
    },
    {
        path: "/file",
        component: () =>
            import ("../views/file.vue"),
        name: "File",
    },
    {
        path: "/chat",
        component: () =>
            import ("../views/chat.vue"),
        name: "Chat",
    },
    {
        path: "/practice",
        component: () =>
            import ("../views/practice.vue"),
        name: "Practice",
    },
    {
        path: "/detial",
        component: () =>
            import ("../views/detial.vue"),
        name: "Detial",
    },
    {
        path: "/photo",
        component: () =>
            import ("../views/photo.vue"),
        name: "Photo",
    },
    {
        path: "/space",
        component: () =>
            import ("../views/space.vue"),
        name: "Space",
    },
    {
        path: "/todolist",
        component: () =>
            import ("../views/todolist.vue"),
        name: "TodoList",
    },


];

const router = new VueRouter({
    routes,
});


export default router;