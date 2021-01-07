<template>
    <div class="welcom-con">
        <div v-if='showLogin'>
            <h1>登入</h1>
            <Login @logined='enterChat'/>
            <p class='tip'>No account yet? <span @click='showLogin = false'>Signup instead</span></p>
        </div>
        <div v-else>
            <h1>註冊</h1>
            <Signup @signed='enterChat'/>
            <p class='tip'>Registerd already, please <span @click='showLogin = true'>Login</span></p>
        </div>
    </div>
</template>

<script>
import Signup from '../components/Signup'
import Login from '../components/Login'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    components: {Signup ,Login},
    setup (){
        const showLogin = ref(true)
        const router = useRouter()
        const enterChat = () => {
            router.push({name: "Chatroom"})
        }
        return {showLogin ,enterChat}
    }
}
</script>

<style lang='scss'>
.welcom-con{
    text-align: center;
    padding: 20px 0;
    background-color: #fff;
    width: 70%;
    margin: auto;
    border-radius: 1rem;
    box-shadow: 20px 20px 15px rgba(0,0,0,0.1);
    form{
        width: 300px;
        margin: 20px auto;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input{
        width: 100%;
        padding: 10px;
        border-radius: 1rem;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    .tip{
        color: #333;
        span{
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .error{
        color: #ff3f80;
        font-size: 14px;
        margin: 1rem 0;
    }
}
</style>