<template>
    <div class="searchbar">
      <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      @keyup.enter.native="checkSearch"
      suffix-icon="el-icon-search"
      >
    </el-autocomplete>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookSearchBar',
    data() {
        return {
          restaurants: [],
          state: '',
          timeout:  null
        };
      },
      methods: {
        loadAll() {
          return [
          { "value": "三全鲜食（北新泾店）长宁区新渔路144号" },
            { "value": "Hot honey 首尔炸鸡（仙霞路）上海市长宁区淞虹路661号" },
            { "value": "新旺角茶餐厅上海市普陀区真北路988号创邑金沙谷6号楼113" },
            { "value": "泷千家(天山西路店)天山西路438号" },
            { "value": "胖仙女纸杯蛋糕（上海凌空店）上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
            { "value": "贡茶上海市长宁区金钟路633号" },
            { "value": "豪大大香鸡排超级奶爸上海市嘉定区曹安公路曹安路1685号" },
            { "value": "茶芝兰（奶茶，手抓饼）上海市普陀区同普路1435号" },
            { "value": "十二泷町上海市北翟路1444弄81号B幢-107" },
            { "value": "星移浓缩咖啡上海市嘉定区新郁路817号" },
            { "value": "阿姨奶茶/豪大大嘉定区曹安路1611号" },
            { "value": "新麦甜四季甜品炸鸡嘉定区曹安公路2383弄55号" },
            { "value": "Monica摩托主题咖啡店嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
            { "value": "浮生若茶（凌空soho店）上海长宁区金钟路968号9号楼地下一层" },
            { "value": "NONO JUICE  鲜榨果汁上海市长宁区天山西路119号" },
            { "value": "CoCo都可(北新泾店）上海市长宁区仙霞西路" },
            { "value": "快乐柠檬（神州智慧店）上海市长宁区天山西路567号1层R117号店铺" },
            { "value": "Merci Paul cafe上海市普陀区光复西路丹巴路28弄6号楼819" },
            { "value": "猫山王（西郊百联店）上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
            { "value": "枪会山上海市普陀区棕榈路" },
            { "value": "纵食元丰天山花园(东门) 双流路267号" },
            { "value": "钱记上海市长宁区天山西路" },
            { "value": "壹杯加上海市长宁区通协路" },
            { "value": "唦哇嘀咖上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
            { "value": "爱茜茜里(西郊百联)长宁区仙霞西路88号1305室" },
            { "value": "爱茜茜里(近铁广场)上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
            { "value": "鲜果榨汁（金沙江路和美广店）普陀区金沙江路2239号金沙和美广场B1-10-6" },
            { "value": "开心丽果（缤谷店）上海市长宁区威宁路天山路341号" },
            { "value": "超级鸡车（丰庄路店）上海市嘉定区丰庄路240号" },
            { "value": "妙生活果园（北新泾店）长宁区新渔路144号" },
            { "value": "香宜度麻辣香锅长宁区淞虹路148号" },
            { "value": "凡仔汉堡（老真北路店）上海市普陀区老真北路160号" },
            { "value": "港式小铺上海市长宁区金钟路968号15楼15-105室" },
            { "value": "蜀香源麻辣香锅（剑河路店）剑河路443-1" },
            { "value": "北京饺子馆长宁区北新泾街道天山西路490-1号" },
            { "value": "饭典*新简餐（凌空SOHO店）上海市长宁区金钟路968号9号楼地下一层9-83室" },
            { "value": "焦耳·川式快餐（金钟路店）上海市金钟路633号地下一层甲部" },
            { "value": "动力鸡车长宁区仙霞西路299弄3号101B" },
            { "value": "浏阳蒸菜天山西路430号" },
            { "value": "四海游龙（天山西路店）上海市长宁区天山西路" },
            { "value": "樱花食堂（凌空店）上海市长宁区金钟路968号15楼15-105室" },
            { "value": "壹分米客家传统调制米粉(天山店)天山西路428号" },
            { "value": "福荣祥烧腊（平溪路店）上海市长宁区协和路福泉路255弄57-73号" },
            { "value": "速记黄焖鸡米饭上海市长宁区北新泾街道金钟路180号1层01号摊位" },
            { "value": "红辣椒麻辣烫上海市长宁区天山西路492号" },
            { "value": "(小杨生煎)西郊百联餐厅长宁区仙霞西路88号百联2楼" },
            { "value": "阳阳麻辣烫天山西路389号" },
            { "value": "南拳妈妈龙虾盖浇饭普陀区金沙江路1699号鑫乐惠美食广场A13" }
          ];
        },
        querySearchAsync(queryString, cb) {
          var restaurants = this.restaurants;    
          var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(results);
          }, 1000 );
        },
        createStateFilter(queryString) {
          return (state) => {  
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        handleSelect(item) {  //选中下拉列表内容
          console.log(item);
        },
        checkSearch() {  //回车确认，查找单词
          console.log(this.state);
          /*this.$emit('searchword',this.state)*/
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
  }
  </script>
  
  <style scoped>
  .el-autocomplete{
    position: absolute;
    width: 80%;
  }
  </style>
  