<script setup lang="ts">
import {post} from '@/utils/request'
import {onMounted, reactive, Ref, ref} from 'vue'
import ClassificationJSON from '@/assets/JSON/Classification.json'

const ReData = ref(null)

//选择后的物资提示
const Classification: Ref<string> = ref('普通物资')

onMounted(async () => {
  ReData.value = await post('/user/serveUser')
})

function timeCal(time: any) {
  setTimeout(async () => {
    ReData.value = await post('/user/serveUser')
    clearInterval(time)
  }, 0)
}

// 60秒请求一次
const time = setInterval(async () => {
  await timeCal(time)
}, 60000)
const receiveClick = async (name: string) => {
  console.log(await post('/user/createUser', {name}));
}


const options = ClassificationJSON


// 以上模块记得封装成 useHook

// 以下代码模块

const enchantClick:(item:{
  label:string;
  value:string;
  grade:string;
})=>void = async (item) => {
  if (item.grade === '') {
    alert('请选择等级')
  }

  console.log(await post('/user/enchant', item));
}

const optionsDr = [
  {label:'I',value:'1',grade:'1'},
  {label:'II',value:'2',grade:'2'},
  {label:'III',value:'3',grade:'3'},
  {label:'IV',value:'4',grade:'4'},
  {label:'V',value:'5',grade:'5'},
]


const enchantValue = reactive([
  {label:'锋利',value:'sharpness',grade:''},
  {label:'抢夺',value:'looting',grade:''},
])



</script>

<template>
  <!-- 服务器介绍 -->
  <section class="section ">
    <div class="column ">
      <div class="content is-flex  is-flex is-justify-content-center mb-6 mt-4">
        <div class="title is-1">
          minecraft <strong class="has-text-info">Yuhua</strong> server
          <div class="title is-3 is-flex is-align-content-center mt-3">
            <p>服务器目前人数:<strong class="pl-2 has-text-danger ">{{ ReData?.data?.players?.online }}</strong></p>
          </div>
          <p class="is-size-5" ><strong class="pl-2" v-for="i in ReData?.data?.players.list">{{i}},</strong></p>
        </div>
      </div>
    </div>
  </section>
  <section class="section has-background-light">
    <h1 class="is-size-1">欢迎购物</h1>
    <h2 class="subtitle">
      目前的商品都可以<strong>购买</strong>, 疯狂的购买吧!
    </h2>
    <n-space class="mb-5" >
      <n-select v-model:value="Classification" :options="options" />
    </n-space>
    <div class="columns is-multiline">
      <home-advanced v-if="Classification === '高级物资'"/>
      <home-general-supplies v-if="Classification === '普通物资'" />
      <home-pet v-if="Classification === '宠物物资'"/>
      <home-ae-mek v-if="Classification === '核电物资'"/>
    </div>
  </section>
  <section class="section has-background-warning has-text-black">
    <h1 class="is-size-1">附魔</h1>
    <h2 class="subtitle">
      附魔你手中的物品
    </h2>

    <div class="columns is-multiline ">
      <div
          class="column m-5  is-one-fifth"
          v-for="item in enchantValue"
      >
        <button
            class="button is-success is-outlined is-large is-fullwidth "
            @click="enchantClick(item)"
        >
          {{item.label}}{{item.grade || " ?"}}
        </button>
        <n-space vertical class="mt-2">
          <n-select  placeholder="请选择附魔的等级"  v-model:value="item.grade" size="small" :options="optionsDr" />
        </n-space>
      </div>

    </div>
  </section>




</template>

<style scoped>
.overflow {
  width: 65px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/**:not(path):not(g) {*/
/*  color: hsla(210, 100%, 100%, 0.9) !important;*/
/*  background: hsla(210, 100%, 50%, 0.5) !important;*/
/*  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;*/

/*  box-shadow: none !important;*/
/*}*/
</style>
