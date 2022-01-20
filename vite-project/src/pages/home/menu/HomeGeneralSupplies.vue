<script setup lang="ts">

interface ItemDa {
  label: string;
  value: string;
  price: number ;
  penCount: number;
  name:string
}



import {reactive} from "vue";
import {post} from "@/utils/request";

/*
*  @label 显示名字
*  @value 服务器传送名字
*  @price 单笔价格
*  @penCount 笔数
* */
const da = reactive([
  {label: '钻石', value: 'minecraft:diamond', price: 123, penCount:null,name:'66a'},
])

const addClick = async (object: ItemDa) => {
  const obj = {
    ...object,
    price: object.penCount * object.price
  }

  console.log(await post('/user/createUser', obj));

}

</script>

<template>
  <div class="column is-one-fifth " v-for="thing in da">
    <div class="notification is-info">
      <div class="is-flex is-justify-content-space-between">
        <div class="">
          <h1 class="is-size-4">{{ thing.label }}</h1>
          <strong class="is-size-5">￥{{ thing.price }}</strong>
        </div>
        <div class="is-size-5 overflow">
          <strong>{{ thing.penCount === 0 ? '' : thing.penCount }}</strong>
        </div>
      </div>

      <div class="column is-flex is-justify-content-center">
        <figure class="image is-128x128">
          <img class="is-rounded" src="../../../assets/Commodity/img.png" alt="">
        </figure>
      </div>

      <div class="field has-addons mt-6">
        <p class="control">
          <input class="input is-rounded"  type="text" max="200" min="0" placeholder="填写数量 0-200" v-model="thing.penCount">
        </p>
        <p class="control">
          <button class="button is-rounded is-link is-fullwidth" @click="addClick(thing)">
            添加
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
