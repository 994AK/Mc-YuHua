<script setup lang="ts">
import {ref, Ref} from "vue";

const fullheight: Ref<boolean> = ref(true)

// 监听滚动事件
const Scroll = () => {
  if (document.documentElement.scrollTop > 1) {
    fullheight.value = false
  }
}
// 注册滚动事件
document.addEventListener('scroll', Scroll)
</script>

<template>
  <section
      v-show="fullheight"
      class="hero"
      :class="{'is-fullheight':fullheight,'has-background-black':fullheight}"
  >
    <div class="hero-body">
      <div class="container" >
        <figure
            class="title is-2 center "
            :class="{'has-text-white':fullheight}"
        >
          YuHua
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.a-href {
  text-decoration: none
}
</style>
