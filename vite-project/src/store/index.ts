import {defineStore} from 'pinia'
import {Ref, ref} from 'vue'

export const useUserStore = defineStore('user', () => {
    const userInfo: Ref<string | null> = ref(localStorage.getItem('Users') ? localStorage.getItem('Users') : '')
    const userData: Ref<{
        _id?: string,
        username?: string,
        money?: number
        newcomer?: number
    }> = ref({})

    const changeUserInfo = (
        user: {
            token: string | null,
            info: {
                username?: string,
                userId?: string,
                newcomer?: number,
                money?: number,
            }
        }) => {
        userInfo.value = user.token
        if (user.token) {
            localStorage.setItem('Users', user.token)
        }

        userData.value._id = user.info.userId
        userData.value.username = user.info.username
        userData.value.newcomer = user.info.newcomer //新人礼包
        userData.value.money = user.info.money//玩家金币

        console.log(userData)

    }


    return {userInfo, userData, changeUserInfo}

})
