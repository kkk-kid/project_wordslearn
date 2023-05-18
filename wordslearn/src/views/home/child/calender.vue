<template>
    <div>
      <el-calendar>
        <template
            slot="dateCell"
            slot-scope="{data}">
            <p :class="data.isSelected" >
              {{ data.day.split('-').slice(2).join('-') }}              
            </p>
            <div v-for="(item,index) in dateContent" :key="index">
                <el-row v-if="item == data.day">
                    <span><el-tag type="success">已背15词</el-tag></span>
                </el-row>  
            </div>
            <div v-for="(item,index) in dateNoContent" :key="index">
                <el-row v-if="item == data.day">
                  <el-tag type="danger">未背3词</el-tag>
                </el-row>  
            </div>
        </template>
  </el-calendar>
    </div>
</template>

<script>
export default {
  name: 'CalenderCpn',
  data(){
    return {
      dateContent: [
        '2023-05-01','2023-05-02'
      ],
      dateNoContent: [
        '2023-05-03','2023-05-04'
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
 .is-selected {
    color: #1989FA;
  }
.el-calendar{
  
  margin-top: 15%;
  line-height: 10px;
}



</style>
