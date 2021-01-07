import { ref } from "vue"
import {projectAuth} from '../firebase/config'

const error = ref(null)

const login = async ({email, password}={}) => {
    error.value = null
    try{
        await projectAuth.signInWithEmailAndPassword(email , password)
        error.value = null
    }
    catch (e){
        console.log(e);
        error.value = "帳號or密碼錯誤"
    }
}

const useLogin = () => {
    return {error ,login}
}

export default useLogin