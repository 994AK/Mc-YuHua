import {defineStore} from 'pinia'
import {Ref, ref} from 'vue'

export const useUserStore = defineStore('user', () => {
    const userInfo: Ref<string | null> = ref(localStorage.getItem('Users') ? localStorage.getItem('Users') : '')

    const changeUserInfo = (user: { token: string }) => {
        userInfo.value = user.token
        localStorage.setItem('Users', user.token)
    }

    return {userInfo, changeUserInfo}

})
