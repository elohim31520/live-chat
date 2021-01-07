<template>
    <div class="container">
        <Nav/>
    </div>
    <br>
    <div class="container">
        <chatWindow />
    </div>
    <br>
    <div class="container">
        <chatForm/>
    </div>
</template>

<script>
import Nav from '../components/Nav'
import chatForm from '../components/chatForm'
import chatWindow from '../components/chatWindow'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import getUser from '../composable/getUser'
export default {
    components: {Nav ,chatForm ,chatWindow},
    setup (){
        const router = useRouter()
        const {user} = getUser()
        watch(user , ()=>{
            if(!user.value){
                router.push({name: "Welcome"})
            }
        })
    }
}
</script>

<style lang='scss'>
.container{
    background-color: #fff;
    width: 80%;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding: .5rem 1rem;
}
</style>