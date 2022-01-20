<script setup lang="ts">
import {reactive} from "vue";
import generalSupplies from '@/assets/JSON/generalSupplies/generalSupplies.json'

/*
*  @label 显示名字
*  @value 服务器传送名字
*  @price 单笔价格
*  @penCount 笔数
* */
const da = reactive(generalSupplies)

</script>

<template>
  <classification  :msg="da"/>
</template>

<style scoped>

</style>
