<script setup lang="ts">

import {ref, Ref} from 'vue'
import {post} from "@/utils/request";
import {useUserStore} from '@/store'
import { useRouter } from "vue-router";

const formRef: Ref<any> = ref(null)

const UserStore = useUserStore()
const router = useRouter()

// const message = useMessage()

const formValue = ref({
  user: {
    username: '',
    password: '',
  }
})

const rules = {
  user: {
    username: {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur']
    },
  },
}

const handleValidateClick = (e: any) => {
  formRef.value.validate((errors: any) => {
    if (!errors) {
      post('/user/login', formValue.value).then(v => {
        console.log(v)
        UserStore.changeUserInfo({
          token: v.data.token,
          info:v.data
        })
        if(v.code === 401) {
          alert(v.msg)
        } else {
          router.push('/')
          alert(v.msg)
        }

      })
    } else {
      console.log(errors)
      console.log(123)
    }
  })
}

</script>

<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-8 is-variable ">
          <div class="column is-two-thirds has-text-left">
            <h1 class="title is-1">YuHua服务器</h1>
            <p class="is-size-4">服务器是公益服,不收取任何费用,无插件.</p>
          </div>
          <n-form
              class="column is-one-third has-text-left"
              :model="formValue"
              :rules="rules"
              size="large"
              ref="formRef"
              label-placement="top"
          >

            <n-form-item path="user.username">
              <div class="field is-flex-grow-1">
                <label class="label">登录</label>
                <div class="control">
                  <!--                <n-input class="input is-medium" v-model:value="formValue.user.username" placeholder="输入账号"/>-->
                  <input class="input is-medium " type="text" v-model="formValue.user.username">
                </div>
              </div>
            </n-form-item>

            <n-form-item path="user.password">
              <div class="field is-flex-grow-1">
                <label class="label">密码</label>
                <input class="input is-medium " type="text" v-model="formValue.user.password">
              </div>
            </n-form-item>


            <n-form-item>
              <div class="field is-flex-grow-1">
                <button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium"
                        @click="handleValidateClick">登录
                </button>
              </div>
            </n-form-item>
          </n-form>
        </div>
      </div>
    </div>
  </section>


  <!--  <n-form-->
  <!--      :label-width="80"-->
  <!--      :model="formValue"-->
  <!--      :rules="rules"-->
  <!--      ref="formRef"-->
  <!--  >-->
  <!--    <n-form-item label="账号" path="user.username">-->
  <!--      <n-input v-model:value="formValue.user.username" placeholder="输入账号"/>-->
  <!--    </n-form-item>-->
  <!--    <n-form-item label="密码" path="user.password">-->
  <!--      <n-input placeholder="输入密码" v-model:value="formValue.user.password"/>-->
  <!--    </n-form-item>-->
  <!--    <n-form-item>-->
  <!--      <n-button @click="handleValidateClick" attr-type="button">登录</n-button>-->
  <!--    </n-form-item>-->
  <!--  </n-form>-->
</template>

<style scoped>

</style>
