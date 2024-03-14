<script setup lang="ts">
  import {ref,reactive} from "vue"
  let count = ref(1)
  let form = reactive({count:1})
  function addCount() {
    count.value++
  }
  function addCount2() {
    form.count++
  }
</script>

<template>
  <main>
    <el-button @click="addCount" type="primary">{{count}}</el-button>
    <el-button @click="addCount2" type="primary">{{form.count}}</el-button>
  </main>
</template>
