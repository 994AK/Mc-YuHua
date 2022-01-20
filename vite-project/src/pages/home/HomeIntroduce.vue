<script setup lang="ts">
import {reactive, UnwrapNestedRefs} from "vue";
import Dragon from "@/assets/MOD/Dragon.svg";

const modData: UnwrapNestedRefs<{
  href:string;
  alt?: string;
  src: string;
  msg: string;
}[]> = reactive([
  {href: 'https://www.mcmod.cn/class/1732.html', alt: '旅行者背包', src: 'img', msg: '背包满了?有了旅行者背包将不会再有这种事情发生了!'},
  {href: 'https://www.mcmod.cn/class/468.html', alt: '懒人厨房', src: 'img_1', msg: '傻瓜烹饪手册，他能显示你背包食材能够烹饪的食物。'},
  {href: 'https://www.mcmod.cn/class/770.html', alt: '冰火传说 / 冰与火之歌', src: 'img_11', msg: '你见过骑着龙,穿龙套,这不很酷的？'},
  {href: 'https://www.mcmod.cn/class/3725.html', alt: '匠魂', src: 'img_5', msg: '匠魂,听说过吧玩起来很nice的好不好!'},
  {href: 'https://www.mcmod.cn/class/329.html', alt: '地幔', src: 'img_6', msg: '地幔兼容性超好,耐心点肝起来'},
  {href: 'https://www.mcmod.cn/class/387.html', alt: '凿子', src: 'img_7', msg: '建筑党能拒绝这个？不可能的好吧,弄上你喜欢的颜色'},
  {href: 'https://www.mcmod.cn/class/527.html', alt: '夸克', src: 'img_8', msg: '不破坏原版的生存机制下,添加更多玩法哦'},
  {href: 'https://www.mcmod.cn/class/1323.html', alt: '通用机械', src: 'img_9', msg: '核辐射,高压电,喜欢玩机械小伙伴这里也有哦!'},
  {href: 'https://www.mcmod.cn/class/260.html', alt: '应用能源2', src: 'img_10', msg: '你可称它为模组中的红石：掌握者能够非常娴熟地运用，而新手时常认为其很难，同时可能性巨大。'
  },
])
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="i in modData">
          <article class="media notification has-background-white ">
            <figure class="media-left">
                <span class="icon is-lg">
                  <img :alt="i.alt" :src="i.src"/>
                </span>
            </figure>
            <div class="media-content">
              <div class="content">
                <h1 class="title is-size-4 a-href">
                  <a :href="i.href"> {{ i.alt }}</a>
                </h1>
                <p class="is-size-6 subtitle">
                  {{ i.msg }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>
