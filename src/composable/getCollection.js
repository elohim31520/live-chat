import { ref ,watchEffect } from "vue"
import {projectFirestore} from '../firebase/config'


const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy("createdAt")

    const unsubscribe = collectionRef.onSnapshot(snap => {
        let res = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && res.push({...doc.data() ,id: doc.id})
        })
        documents.value = res
        error.value = null
    } , err => {
        console.log(err);
        documents.value = null
        error.value = "could not fetch the data"
    })

    watchEffect(onInvalidate => {
        onInvalidate(() => unsubscribe())
    })

    return {error ,documents}
}

export default getCollection