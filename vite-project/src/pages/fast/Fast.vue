<script setup lang="ts">
import {useUserStore} from '@/store'
import {reactive, ref} from "vue";
import {post} from '@/utils/request'

interface Instruction {
  _id?: string | undefined,
  username?: string | undefined,
  newcomer?: number | undefined,
}

const useInstructionEffect = () => {
  //获取用户信息
  const UserStore: Instruction = useUserStore().userData
  /*  指令信息
  *  name:显示名称
  *  value: 指令代码
  *  condition: 指的是对方
  *  multiple: 指的是多个家
  * */
  const InstructionInfo = reactive([
    {name: '设置家', value: 'sethome', multiple: true, msg: '设置家?输入家的名称'},
    {name: '回家', value: 'home', multiple: true},
    {name: '传送他人', value: 'tpa', condition: true},
    {name: '获取服务器种子', value: 'seed'},

  ])

  const InstructionClick: (item: { name: string, value: string, condition?: boolean, multiple?: boolean, msg?: string }) => void = (item) => {
    ///tpa [被传送玩家名]] (传送玩家名) (-c)
    if (item.condition) {
      const otherSite = prompt('对方名字')
      if (otherSite) {
        post('/user/instruction', {...item, otherSite, ...UserStore})
      } else {
        alert("不能对方名字不能为空哈")
      }

    }

    // 假设有多个家
    if (item.multiple) {
      const multiplePrompt = prompt(item.msg)
      //输入了家的名称
      if (multiplePrompt) {
        post('/user/instruction', {...item, multiplePrompt, ...UserStore})
      } else {
        post('/user/instruction', {...item, multiplePrompt: "HOME", ...UserStore})
      }
    }

    if (item.value === 'seed') {
      return alert('-2223122799206047632')
    }

    // //符合请求接口
    // post('/user/instruction',item)
    // console.log(item)
  }

  return {InstructionInfo, InstructionClick}

}

const {InstructionInfo, InstructionClick} = useInstructionEffect()

</script>

<template>

  <!-- 快捷页面介绍 -->
  <section class="section ">
    <h1 class="title">服务器快捷指令</h1>
    <h2 class="subtitle">
      确保你游戏 <strong>在线</strong> 才能使用此指令
    </h2>
  </section>
  <!-- 指令使用  -->
  <section class="section is-medium">
    <div class="columns ">
      <div class="column has-background-primary">
        <article class="message is-dark">
          <div class="message-header">
            <p>基本指令</p>
          </div>
          <div class="message-body" v-for="item in InstructionInfo" :key="item.name">
            <button class="button is-large is-fullwidth mb-2" @click="InstructionClick(item)">{{ item.name }}</button>
          </div>
        </article>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>
