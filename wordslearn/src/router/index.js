import Vue from "vue";
import Router from 'vue-router'

const home = () => import("@/views/home/HomeView")

Vue.use(Router)

const routes = [
    {
        path: "",
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
    },
]

const router = new Router({
    routes,
    mode: 'history',
})

export default router