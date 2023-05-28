<template>
    <div class="testresult">
        <table>
            <tbody>
              <tr>
                <th>测试单词</th>
                <th>测试单词中文</th>
                <th>对错情况</th>
              </tr>
              <tr v-for="item in this.$store.state.testResult.questionResults" :key="item.id">
                  <td>{{ item.wordValue }}</td>
                  <td>{{ item.wordChineseMeaning }}</td>
                  <td>{{ item.isCorrect }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  name: 'TestResult',
  created() {
    console.log(this.$store.state.testResult)
  }
}
</script>

<style>
td,th{
  width: 120px;
  line-height: 30px;
  text-align: left;
}
</style>
