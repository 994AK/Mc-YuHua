<script setup lang="ts">
import {defineProps} from 'vue'
import {post} from "@/utils/request";
import {useUserStore} from '@/store'
import _ from 'lodash'

const UserStore = useUserStore()


interface Trade {
  price: number,
  penCount: number,
  label: string,
  name?: string,
  value: string,
  src?: string,
  quantity?:number
}


const props = defineProps<{
  msg: Trade
}>()


const addClick = _.throttle(async function (object: Trade) {
  const obj = {
    ...object,
    price: object.penCount * object.price,
    name: UserStore.userData.username
  }
  await post('/user/createUser', obj).then(v => {
    alert(v.msg)
  })
},2000)



</script>

<template>
  <div class="column is-one-fifth " v-for="thing in props.msg">
    <div class="notification is-info">
      <div class="is-flex is-justify-content-space-between">
        <div class="">
          <h1 class="is-size-4">{{ thing?.label }}</h1>
          <strong class="is-size-5">￥{{ thing?.price }}</strong>
        </div>
        <div class="is-size-5 overflow">
          <strong>{{ thing?.penCount === "0" ? '' : thing?.penCount }}</strong>
        </div>
      </div>

      <div class="column is-flex is-justify-content-center">
        <figure class="image is-128x128">
          <img :src="thing.src" alt="">
        </figure>
      </div>

      <div class="field has-addons mt-6">
        <p class="control">
          <input class="input is-rounded" type="text" max="200" min="0" placeholder="填写数量"
                 v-model="thing.penCount">

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
