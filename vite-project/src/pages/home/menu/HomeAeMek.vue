<script setup lang="ts">
import {reactive} from "vue";

import Ae from '@/assets/JSON/AeMek/AeMek.json'


/*
*  @label 显示名字
*  @value 服务器传送名字
*  @price 单笔价格
*  @penCount 笔数
* */

const da = reactive(Ae)


</script>

<template>
  <classification :msg='da'/>
</template>

<style scoped>

</style>
