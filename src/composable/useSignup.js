import { ref } from "vue"
import {projectAuth} from '../firebase/config'

const error = ref(null)

const signup = async ({email, password ,name}={}) => {
    error.value = null
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email , password)
        if(!res) throw new Error("signup something wrong!")
        await res.user.updateProfile({displayName: name})
        error.value = null
        return res
    }
    catch (e){
        console.log(e);
        error.value = e
    }
}

const useSignup = () => {
    return {error ,signup}
}

export default useSignup