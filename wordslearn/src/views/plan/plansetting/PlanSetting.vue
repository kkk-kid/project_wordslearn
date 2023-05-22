<template>
    <div class="plansetting">
        <table>           
            <tbody>
                <tr>
                    <td>开始日期</td>
                    <td>
                        <div class="block">
                            <el-date-picker
                                v-model="valuedate"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>计划天数</td>
                    <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td>选择单词书</td>
                    <td>
                        <template>
                            <el-transfer
                                filterable
                                :filter-method="filterMethod"
                                filter-placeholder="请输入"
                                v-model="value"
                                :data="data">
                            </el-transfer>
                        </template>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'PlanSetting',
  data() {
      const generateData = () => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        valuedate: '2023-5-10',
        input: ''
      };
    }
}
</script>

<style>
table {
    border-collapse: collapse;
    border: 1px solid rgb(200, 200, 200);
    border-collapse:collapse;
    
    width: 100%;
    text-align: left;
    border: none;
    
}


tbody {
    font-size: 20px;
    border: none;
    
}

td {
    border: 1px solid rgb(190, 190, 190);
    padding: 5px 10px;
    border: none;
    width: 20px;
    height: 30px;
    text-align: left;
    border-left: none;
    border-right: none;
    
}


</style>
