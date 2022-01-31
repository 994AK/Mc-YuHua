<script setup lang="ts">
import {useUserStore} from '@/store'
import {ref, Ref, watchEffect} from 'vue'
import {useRouter} from 'vue-router'
import {post} from "@/utils/request";

// 监听用户token的变化
const useWatchUserEffect = () => {
  //获取共享数据
  const UserStore = useUserStore()
  //监听值的变化
  const Store: Ref<string | null> = ref('')
  //监听token变化
  watchEffect(() => {
    if (UserStore.userInfo !== '') {
      Store.value = UserStore.userInfo
    }
  })

  return {UserStore, Store}
}
// 签到功能变化
const useSignInEffect = () => {
  const Tooltip: Ref<string> = ref('')

  const signInClick: (item: any) => void = async (item) => {
    await post('/user/signin', item).then(v => {
      Tooltip.value = v.msg
      alert(v.msg)
      location.reload()
    })
  }

  return {signInClick}
}

const {UserStore, Store} = useWatchUserEffect()
const {signInClick} = useSignInEffect()


const router = useRouter()


//退出登录
const quitClick = () => {
  router.push('/login')
  localStorage.clear()
  location.reload()
}


</script>

<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand ">
      <router-link to="/" class="navbar-item">
        <img src="../../assets/Logo.jpg" alt="" class="image is-24x24">
      </router-link>
    </div>


    <div
        id="navbarBasicExample"
        class="navbar-menu"
        v-if="Store"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          主页
        </router-link>
        <router-link class="navbar-item" to="/title">
          商店
        </router-link>
        <router-link class="navbar-item" to="/fast">
          快捷指令
        </router-link>

      </div>
    </div>
    <div v-if="Store">

      <div class="navbar-item has-dropdown is-hoverable mr-5">

        <a class="navbar-link ">
          <img class="is-rounded" src="../../assets/123.png">
        </a>
        <div class="navbar-dropdown">
          <!--          <a class="navbar-item" @click="()=>{alert('在努力开发')}">-->
          <!--            修改头像-->
          <!--          </a>-->
          <router-link to='/title' class="navbar-item">
            点我进商店
          </router-link>
          <a class="navbar-item" @click="quitClick">
            退出登录
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            游戏名:{{ UserStore.userData.username }}
          </a>
          <a class="navbar-item">
            游戏金币:{{ UserStore.userData.money }}
          </a>
          <a class="navbar-item" @click="signInClick(UserStore.userData)">
            点我签到
          </a>
        </div>
      </div>
    </div>
    <nav-user v-else/>
  </nav>
</template>

<style scoped>

</style>
