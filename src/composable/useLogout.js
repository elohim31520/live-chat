import { ref } from "vue"
import {projectAuth} from '../firebase/config'

const error = ref(null)

const logout = async () => {
    error.value = null
    try{
        await projectAuth.signOut()
        error.value = null
    }
    catch (e){
        console.log(e);
        error.value = e
    }
}

const useLogout = () => {
    return {error ,logout}
}

export default useLogout