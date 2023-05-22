<template>
    <div class="testcontent">
      <div class="block">
          <el-carousel trigger="click" height="800px"  indicator-position="none" :autoplay="false">
              <el-carousel-item v-for="item in 4" :key="item">
                  <div>
                    <div class="head">
                        <h3>11111111111111</h3>                       
                    </div>
                    <el-divider></el-divider>
                    <div>
                        <input type="radio"  v-model="radio" value="1"/>
                        <label for="contactChoice1">select 1</label>
                        <br>
                        <input type="radio"  v-model="radio" value="2"/>
                        <label for="contactChoice1">select 2</label>
                        <br>
                        <input type="radio"  v-model="radio" value="3"/>
                        <label for="contactChoice1">select 3</label>
                        <br>
                        <input type="radio"  v-model="radio" value="4"/>
                        <label for="contactChoice1">select 4</label>
                    </div>
                  </div>
                 
              </el-carousel-item>
          </el-carousel>
  </div>
    </div>
</template>

<script>
export default {
  name: 'TestContent',
  data() {
    return {
      radio: '',
      ans: ['1','2']
    }
  }
}
</script>

<style scoped>
.block{
  width:50%;
  margin-left: 25%;
}

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

 

</style>
