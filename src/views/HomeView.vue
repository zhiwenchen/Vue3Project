<script setup lang="ts">
  import {ref,reactive} from "vue"
  import { useCookies } from '@vueuse/integrations/useCookies'

  const cookies = useCookies()


  let count = ref(1)
  let form = reactive({count:1})
  function addCount() {
    count.value++
  }
  function addCount2() {
    form.count++
  }

  function setCookie() {
    cookies.set("token",123456)
  }

  const getCookie = () =>{
    return cookies.get("token")
  }

  function deleteCookie() {
    cookies.remove("token")
  }

</script>

<template>
  <main>
    <el-button @click="addCount" type="primary">{{count}}</el-button>
    <el-button @click="addCount2" type="primary">{{form.count}}</el-button>

    <el-button @click="setCookie" type="primary">设置cookie</el-button>
    <el-button type="primary">cookie值：{{ getCookie() }}</el-button>
    <el-button @click="deleteCookie" type="primary">删除cookie</el-button>
  </main>
</template>
