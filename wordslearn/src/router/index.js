import Vue from "vue";
import Router from 'vue-router'

const home = () => import("@/views/home/HomeView")
const profile =() => import("@/views/profile/ProfileView")
const setting =() => import("@/views/setting/SettingView")
const books = () => import("@/views/books/BooksView")
const test = () => import("@/views/test/WordsTest")
const plan = () => import("@/views/plan/WordsPlan")
const book = () => import("@/views/book/BookView")

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
    },
    {
        path: '/books',
        component: books,
    },
    {
        path: '/book:bookname',
        component: book
    },
    {
        path: 'test',
        component: test
    },
    {
        path: '/plan',
        component: plan
    }
]

const router = new Router({
    routes,
    mode: 'history',
})

export default router