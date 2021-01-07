<template>
    <form @submit.prevent='submit'>
        <input type="text" required placeholder="暱稱" v-model='name' autocomplete="off">
        <input type="email" required placeholder="Email " v-model='email' autocomplete="off">
        <input type="password" required placeholder="Password " v-model='password' autocomplete="off">
        <div class="error" v-if='error'>{{error.message}}</div>
        <button >Sign</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composable/useSignup'
export default {
    setup (props, context){
        const { signup ,error} = useSignup()
        const name = ref("")
        const email = ref("")
        const password = ref("")
        const submit = async () => {
            await signup({name: name.value ,email: email.value ,password: password.value})
            if(!error.value){
                context.emit("signed")
            }
        }
        return {name ,email ,password ,submit ,error}
    }
}
</script>

<style>

</style>