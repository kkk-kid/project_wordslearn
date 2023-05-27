import Vue from "vue";
import Router from 'vue-router'

const login = () => import("@/views/loginframe/LoginFram")
const signin = () => import("@/views/loginframe/child/SignIn")
const register = () => import("@/views/loginframe/child/RegisterFrame")

const home = () => import("@/views/home/HomeView")
const profile =() => import("@/views/profile/ProfileView")
const setting =() => import("@/views/setting/SettingView")
const books = () => import("@/views/books/BooksView")

const test = () => import("@/views/test/WordsTest")
const testqs = () => import("@/views/test/child/TestQs")
const testssetting = () => import("@/views/test/child/TestSetting")
const testcontent = () => import("@/views/test/child/TestContent")
const testresult = () => import("@/views/test/child/TestResult")
const testhistory = () => import("@/views/test/child/HistoryTest")

const plan = () => import("@/views/plan/WordsPlan")
const book = () => import("@/views/book/BookView")
const learn = () => import("@/views/learn/LearnView")

const learnsetting = () => import("@/views/learn/child/LearnSetting")
const learnstart = () => import("@/views/learn/child/LearnStart")
const learncontent = () => import("@/views/learn/child/LearnContent")

Vue.use(Router)

const routes = [
    {
        path: "/login",
        component: login,
        children: [
            {
                path: '',
                redirect: 'signin'
            },
            {
                path: 'signin',
                component: signin
            },
            {
                path: 'register',
                component: register
            }
        ]
    },
    {
        path: "",
        redirect: '/login'
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
        path: '/book:bookid',
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
            },
            {
                path: 'testresult',
                component: testresult
            },
            {
                path: 'testhistory',
                component: testhistory
            }
        ]
    },
    {
        path: '/plan',
        component: plan
    },
    {
        path: '/learn',
        component: learn,
        children: [
            {
                path: '',
                redirect: 'learnstart'
            },
            {
                path: 'learnsetting',
                component: learnsetting
            },
            {
                path: 'learnstart',
                component: learnstart,
            },
            {
                path: 'learncontent',
                component: learncontent
            }
        ]
    }
]

const router = new Router({
    routes,
    mode: 'history',
})

export default router

// 导航守卫：使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login/signin' || to.path === '/login/register') {
      next();
    } else {
      let token = localStorage.getItem('Authorization');
   
      if (token === null || token === '') {
        next('/login');
      } else {
        next();
      }
    }
  });
  
  