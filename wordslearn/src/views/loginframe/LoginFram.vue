<template>
    <div class="loginframe">
        <router-view></router-view>
    </div>
</template>

<script>


export default {
  name: 'LoginFrame',
  components: {
    
  },
  
}
</script>

<style scoped>
.loginframe{
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url('https://img.zcool.cn/community/0183d55762755f0000012e7e455dc4.jpg@1280w_1l_2o_100sh.jpg');
}
</style>
