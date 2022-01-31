<script setup lang="ts">
import {useUserStore} from '@/store'
import {post} from "@/utils/request";
import _ from "lodash";

const UserStore = useUserStore()
// const receiveClick = () => {
//   const {_id, username, newcomer} = UserStore.userData
//   post("/user/newcomer", {_id, username, newcomer})
//
//
// }

const receiveClick = _.throttle(async function () {
  const {_id, username, newcomer} = UserStore.userData
  await post("/user/newcomer", {_id, username, newcomer})

},2000)


</script>

<template>
  <!-- .hero -->
  <home-hero/>
  <!-- /.hero -->

  <!-- .section  -->
  <home-section/>
  <!-- /.section  -->

  <!-- .section  -->
  <home-introduce/>
  <!-- /.section  -->


  <section class="section is-medium has-text-dark has-background-light ">
    <div class="container is-max-widescreen">
      <h1 class="title">你可能需要这些东西</h1>
      <h2 class="subtitle">
        在下方输入, 领取一些补贴!
      </h2>
      <div class="field has-addons ">
        <div class="control" @click="receiveClick">
          <a class="button is-info">
            领取
          </a>
        </div>
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

/*! debug.css | MIT License | zaydek.github.com/debug.css */
/**:not(path):not(g) {*/
/*  color: hsla(210, 100%, 100%, 0.9) !important;*/
/*  background: hsla(210, 100%, 50%, 0.5) !important;*/
/*  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;*/

/*  box-shadow: none !important;*/
/*}*/
</style>
