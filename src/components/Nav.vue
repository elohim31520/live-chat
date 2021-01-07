<template>
    <nav v-if='user'>
        <div class='text'>
            <p>Hey there ... {{user.displayName}} </p>
            <p class='email'>帳號: {{user.email}}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from '../composable/useLogout'
import getUser from '../composable/getUser'

export default {
    setup (){
        const {error ,logout} = useLogout()
        const {user} = getUser()
        const handleClick = async () => {
            await logout()
        }
        return {handleClick ,user}
    }
}
</script>

<style lang='scss'>
nav{
    display: flex;
    align-items: center;
    width: 100%;
    .text{
        flex: 4;
    }
    button{
        height: 2.5rem;
        color: #fff;
    }
}
</style>