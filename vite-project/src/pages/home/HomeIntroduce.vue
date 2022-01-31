<script setup lang="ts">
import {reactive, UnwrapNestedRefs} from "vue";

const modData: UnwrapNestedRefs<{
  href: string;
  alt?: string;
  src: string;
  msg: string;
}[]> = reactive([
  {href: '#', alt: '原版MC', src: 'img', msg: '厌倦了插件玩法？不想要插件？服务器中就无任何插件'},
  {href: '#', alt: '特性', src: 'img_1', msg: 'MC原版特性都有!体验第一'},
  {href: '#', alt: '熊孩子', src: 'img_11', msg: '熊孩子一概论封IP,网站不给白名单'},
  {href: '#', alt: '福利待遇', src: 'img_5', msg: '五险一金，每天签到每天有礼品'}
])

function getImageUrl(name: string) {
  return new URL(`../../assets/MOD/${name}.png`, import.meta.url).href
}

</script>

<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="i in modData">
          <article class="media notification has-background-white ">
            <figure class="media-left">
                <span class="icon is-lg">
                  <img :alt="i.alt" :src="getImageUrl(i.src)"/>
                </span>
            </figure>
            <div class="media-content">
              <div class="content">
                <h1 class="title is-size-3 a-href">
                  {{ i.alt }}
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
