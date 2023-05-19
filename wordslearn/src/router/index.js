import Vue from "vue";
import Router from 'vue-router'

const home = () => import("@/views/home/HomeView")
const profile =() => import("@/views/profile/ProfileView")
const setting =() => import("@/views/setting/SettingView")

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
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/setting',
        component: setting
    }
]

const router = new Router({
    routes,
    mode: 'history',
})

export default router