<template>
    <div class="wordshow">
        <div class="showhead"><h1>{{showword}}</h1></div>
        <el-divider border-style="dashed" />
    </div>
</template>

<script>
export default {
  name: 'WordShow',
  props: {
    showword: {
        type: String,
        default(){
            return ""
        }

    }
  }
}
</script>

<style scoped>
.wordshow{
    position: absolute;
    width: 80%;
    height:100%;
    background-color: rgb(247, 246, 245);
    margin-left: 10%;
    border-radius: 15px;
    box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.2);
}
.showhead{
    height: 10%;
}
</style>
