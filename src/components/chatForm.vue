<template>
    <form>
        <textarea name="" id="" cols="30" rows="2" placeholder="請輸入訊息..." v-model="message" @keypress.enter.prevent="submit"></textarea>
        <button @click.prevent.stop="submit">Enter</button>
        <div v-if='error'>{{error}}</div>
    </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composable/getUser'
import useCollection from '../composable/useCollection'
import {timestamp} from '../firebase/config'
export default {
    setup (){
        const {user} = getUser()
        const {error ,addDoc} = useCollection("messages")
        const message = ref("")

        const submit = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }
            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
        }
        return {message ,submit ,error}
    }
}
</script>

<style scoped lang='scss'>
form{
    display: flex;
    align-items: center;
    padding: 1rem;
}
textarea {
    border: 1px solid #ddd;
    width: 50%;
    margin-right: 1rem;
    resize:none;
    &:focus { 
        outline: none !important;
        border-color: #94EBDF;
        box-shadow: 0 0 10px #94EBDF;
    }
}
</style>