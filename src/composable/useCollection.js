import { ref } from "vue"
import {projectFirestore} from '../firebase/config'


const useCollection = (collection) => {
    const error = ref(null)

    const addDoc = async(param) => {
        error.value = null
        try {
            await projectFirestore.collection(collection).add(param)
        } catch (e) {
            console.log(e);
            error.value = "無法送出"
        }
    }
    return {error ,addDoc}
}

export default useCollection