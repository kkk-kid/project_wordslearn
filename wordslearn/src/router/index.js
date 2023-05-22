import Vue from "vue";
import Router from 'vue-router'

const home = () => import("@/views/home/HomeView")
const profile =() => import("@/views/profile/ProfileView")
const setting =() => import("@/views/setting/SettingView")
const books = () => import("@/views/books/BooksView")

const test = () => import("@/views/test/WordsTest")
const testqs = () => import("@/views/test/child/TestQs")
const testssetting = () => import("@/views/test/child/TestSetting")
const testcontent = () => import("@/views/test/child/TestContent")

const plan = () => import("@/views/plan/WordsPlan")
const book = () => import("@/views/book/BookView")
const learn = () => import("@/views/learn/LearnView")


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
        path: '/test',
        component: test,
        children: [
            {
                path:'',
                redirect: 'testqs'
            },
            {
                path: 'testqs',
                component: testqs,
            },
            {
                path: 'testsetting',
                component: testssetting
            },
            {
                path: 'testcontent',
                component: testcontent,
            }
        ]
    },
    {
        path: '/plan',
        component: plan
    },
    {
        path: '/learn',
        component: learn
    }
]

const router = new Router({
    routes,
    mode: 'history',
})

export default router