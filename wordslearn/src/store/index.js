import Vue from "vue"
import Vuex from "vuex"



Vue.use(Vuex)

const store = new Vuex.Store({
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        userId: null,  //用户id
        allWords: [],  //全部单词
        plan: {},      //计划
        BookList: [],  //总单词书
        currentWordsBookList: [], //单词书界面的当前单词书
        currentShowWord: {    //搜索界面展示的单词
            value: '',
            meaningChinese: '',
            example: ''
        },   
        learnModule: {    //背单词模块
            learnNumber: null,
            learnChoice: [],
            learnBook: null
        },
        learnList: [],   //用户背单词内容

        testModule: {    //自测模块
            testNumber: null,
            testChoice: [],
            testBook: null,
            testPercentage: null
        },
        testList: new Object,  //测试题目
        testResult: new Object,  //测试结果
    },
    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },
        setuserId (state,id) {
            state.userId = id
        },
        setAllWords(state,words) {
            state.allWords.push(...words)
        },
        setPlan(state,plan) {
            state.plan = plan
        },
        setBookList(state,booklist) {
            state.BookList = booklist
        },
        setcurrentWordsBookList(state,book) {
            state.currentWordsBookList = book;
        },
        setcurrentShowWord(state,word) {
            state.currentShowWord = word
        },
        setlearnModule(state,module) {   //背单词模块数据更改
            state.learnModule.learnNumber = module.learnNumber
            state.learnModule.learnChoice = module.learnChoice
            state.learnModule.learnBook = module.learnBook
            Object.assign({},state.learnModule)
        },
        setlearnList(state,learnlist) {     //背单词题目内容
            state.learnList = learnlist
        },
        settestModule(state,testlist) {
            state.testModule = testlist
        },
        settestList(state,list) {
            state.testList = list
        },
        settestResult(state,testResult) {
            state.testResult = testResult
        }
    },
    actions: {
        
    },
    getters: {

    },
    modules: {
        
    }
})

export default store