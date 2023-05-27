<template>
  <div>
    <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :popper-append-to-body="false"
          :key="item.id"
          :label="item.name"
          :value="item.name">
        </el-option>
    </el-select>
    
  </div>
</template>

<script>
export default {
name: 'SelectBooks',
computed: {
  options() {
      return this.$store.state.BookList
  }
}
}
</script>

<style scoped>

</style>
