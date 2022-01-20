<script setup lang="ts">
import {post} from '@/utils/request'
import {onMounted, Ref, ref} from 'vue'
import ClassificationJSON from '@/assets/JSON/Classification.json'


const name = ref('')
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
<!--  &lt;!&ndash; 奖励领取 &ndash;&gt;-->
<!--  <section class="section is-medium has-text-dark">-->
<!--    <h1 class="title">你可能需要这些东西</h1>-->
<!--    <h2 class="subtitle">-->
<!--      在下方输入 <strong>ID</strong>, 领取一套新手装备,还有一些补贴!-->
<!--    </h2>-->
<!--    <div class="field has-addons">-->
<!--      <div class="control">-->
<!--        <input class="input" v-model="name" type="text" placeholder="伙计! 输入你的ID">-->
<!--      </div>-->
<!--      <div class="control" @click="receiveClick(name)">-->
<!--        <a class="button is-info">-->
<!--          领取-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

  <section class="section is-medium has-background-light">
    <h1 class="title">欢迎购物</h1>
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
