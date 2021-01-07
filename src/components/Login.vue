<template>
    <form @submit.prevent='submit'>
        <input type="email" required placeholder="email " v-model='email'>
        <input type="password" required placeholder="password " v-model='password'>
        <div class="error" v-if='error'>{{error}}</div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composable/useLogin'
export default {
    setup (props ,context){
        const {error ,login} = useLogin()
        const email = ref("")
        const password = ref("")
        const submit = async () => {
            await login({email: email.value ,password: password.value})
            if(!error.value){
                context.emit("logined")
            }
        }
        return {name ,email ,password ,submit ,error}
    }
}
</script>

<style>

</style>